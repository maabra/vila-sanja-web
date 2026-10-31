"""Run with: python tests/browser_edge_cases.py (requires Playwright and Edge).

Serve the real source through browser interception; no production writes, external
provider requests, or Elfsight view charges. Provider behavior is controlled here.
"""
import json
import unittest
from pathlib import Path
from urllib.parse import unquote, urlparse

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
ORIGIN = 'https://vilasanja.com/'
KEY = 'vs-privacy-consent-v3'


class EdgeCases(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.pw = sync_playwright().start()
        cls.browser = cls.pw.chromium.launch(channel='msedge', headless=True,
                                            args=['--disable-gpu'])

    @classmethod
    def tearDownClass(cls):
        cls.browser.close()
        cls.pw.stop()

    def setUp(self):
        self.context = self.browser.new_context(viewport={'width': 1073, 'height': 800})
        self.errors = []
        self.provider_calls = []
        self.provider_mode = 'success'
        self.context.route('**/*', self.route)
        self.page = self.context.new_page()
        self.context.on('page', lambda page: page.on('pageerror', lambda e: self.errors.append(str(e))))
        self.page.on('pageerror', lambda e: self.errors.append(str(e)))
        self.page.set_default_timeout(5000)

    def tearDown(self):
        self.context.close()
        self.assertEqual(self.errors, [], 'Unhandled browser errors')

    def route(self, route):
        url = urlparse(route.request.url)
        if url.hostname == 'vilasanja.com':
            path = (ROOT / unquote(url.path.lstrip('/') or 'index.html')).resolve()
            if path.is_relative_to(ROOT) and path.is_file():
                route.fulfill(path=str(path))
            else:
                route.fulfill(status=404, body='Missing test resource')
        elif url.hostname == 'static.elfsight.com' and url.path.endswith('platform.js'):
            self.provider_calls.append(route.request.url)
            if self.provider_mode == 'fail':
                route.abort()
            else:
                delay = {'slow': 10000, 'very-slow': 25000}.get(self.provider_mode, 0)
                route.fulfill(content_type='application/javascript', body=(
                    "setTimeout(()=>{document.querySelector('[class^=elfsight-app]')"
                    f".textContent='Guest review loaded';}},{delay});"))
        else:
            route.fulfill(status=200, content_type='text/html', body='<p>Test external map</p>')

    def go(self, name='index.html', consent=True):
        self.page.goto(ORIGIN + name, wait_until='load')
        if consent is not None:
            self.page.evaluate("""([key, allow]) => localStorage.setItem(key,
                JSON.stringify({version:3,maps:false,reviews:allow,savedAt:Date.now()}))""", [KEY, consent])
            self.page.reload(wait_until='load')

    def settings(self):
        self.page.evaluate('openCookieSettings()')

    def test_language_change_keeps_unsaved_consent(self):
        self.go(consent=False)
        self.settings()
        self.page.locator('.consent-toggle input').nth(0).check()
        self.page.locator('.consent-languages button[lang=de]').click()
        self.assertTrue(self.page.locator('.consent-toggle input').nth(0).is_checked())
        self.assertFalse(self.page.locator('.consent-toggle input').nth(1).is_checked())

    def test_menu_survives_scrolling_and_escape(self):
        self.go(consent=False)
        self.page.locator('.menu-toggle').click()
        self.page.evaluate('scrollTo(0, 500)')
        self.page.wait_for_timeout(350)
        self.assertGreaterEqual(self.page.locator('header').bounding_box()['y'], 0)
        self.page.keyboard.press('Escape')
        self.assertNotIn('active', self.page.locator('nav').get_attribute('class') or '')

    def test_submenu_resets_on_close_and_resize(self):
        self.go(consent=False)
        self.page.locator('.menu-toggle').click()
        toggle = self.page.locator('nav .dropdown-toggle').first
        toggle.click()
        self.assertTrue(self.page.locator('nav .dropdown-menu').first.is_visible())
        self.page.locator('.menu-toggle').click()
        self.page.locator('.menu-toggle').click()
        self.assertFalse(self.page.locator('nav .dropdown-menu').first.is_visible())
        self.page.set_viewport_size({'width': 1440, 'height': 800})
        self.assertEqual(self.page.locator('.menu-toggle').get_attribute('aria-expanded'), 'false')

    def test_restored_page_does_not_restore_open_menu(self):
        self.go(consent=False)
        self.page.locator('.menu-toggle').click()
        self.page.locator('nav .dropdown-toggle').first.click()
        self.page.evaluate("window.dispatchEvent(new PageTransitionEvent('pageshow', {persisted:true}))")
        self.assertEqual(self.page.locator('.menu-toggle').get_attribute('aria-expanded'), 'false')
        self.page.locator('nav').wait_for(state='hidden')

    def test_clipboard_denial_is_handled(self):
        self.go('contact.html', consent=False)
        self.page.evaluate("Object.defineProperty(navigator,'clipboard',{value:{writeText:()=>Promise.reject(new Error('Permission denied'))}})")
        self.page.locator('.copy-email-btn').click()
        self.page.wait_for_timeout(100)
        self.assertFalse(self.page.locator('.copy-email-btn').evaluate("b=>b.classList.contains('copied')"))
        self.assertEqual(self.errors, [])

    def test_lightbox_swipes_advance_once_and_ignore_vertical_scroll(self):
        for name in ['room.html', 'one-bedroom.html', 'duplex-apartment.html']:
            self.go(name, consent=False)
            self.page.evaluate('openLightbox(0)')
            def swipe(dx, dy):
                self.page.evaluate("""([dx,dy])=>{
                  const box=document.getElementById('lightbox');
                  box.dispatchEvent(new TouchEvent('touchstart', {touches:[new Touch({identifier:1,target:box,clientX:200,clientY:200})]}));
                  box.dispatchEvent(new TouchEvent('touchend', {changedTouches:[new Touch({identifier:1,target:box,clientX:200+dx,clientY:200+dy})]}));
                }""", [dx,dy])
            swipe(-80, 0)
            self.assertTrue(self.page.locator('#lbImg').get_attribute('src').endswith('/2.webp'), name)
            swipe(65, 180)
            self.assertTrue(self.page.locator('#lbImg').get_attribute('src').endswith('/2.webp'), name)
            self.page.keyboard.press('Escape')
            self.assertNotIn('open', self.page.locator('#lightbox').get_attribute('class'))

    def test_failed_provider_has_retry(self):
        self.provider_mode = 'fail'
        self.page.clock.install()
        self.go('reviews.html')
        self.page.clock.run_for(21000)
        retry = self.page.locator('.reviews-retry')
        self.assertTrue(retry.is_visible())
        self.provider_mode = 'success'
        retry.click()
        self.page.clock.run_for(500)
        self.page.frame_locator('[data-elfsight-frame]').get_by_text('Guest review loaded').wait_for()

    def test_slow_provider_and_withdrawal_during_loading(self):
        self.provider_mode = 'slow'
        self.page.clock.install()
        self.go('reviews.html')
        self.page.clock.run_for(500)
        self.settings()
        self.page.locator('.consent-toggle input').nth(1).uncheck()
        self.page.locator('.consent-save').click()
        self.page.clock.run_for(25000)
        self.assertEqual(self.page.locator('[data-elfsight-frame]').count(), 0)
        self.assertFalse(self.page.locator('[data-elfsight-widget]').is_visible())

    def test_late_provider_recovers_without_duplicate_frames(self):
        self.provider_mode = 'very-slow'
        self.page.clock.install()
        self.go('reviews.html')
        self.page.clock.run_for(21000)
        self.assertTrue(self.page.locator('.reviews-retry').is_visible())
        self.page.clock.run_for(5000)
        self.page.frame_locator('[data-elfsight-frame]').get_by_text('Guest review loaded').wait_for()
        self.assertEqual(self.page.locator('.reviews-load-status').count(), 0)
        self.assertEqual(self.page.locator('[data-elfsight-frame]').count(), 1)

    def test_rapid_clicks_and_reopening_settings(self):
        self.go('reviews.html', consent=False)
        self.page.evaluate("""()=>{
          for(let i=0;i<21;i++) document.querySelector('.menu-toggle').click();
          for(let i=0;i<21;i++) document.getElementById('dark-mode-btn').click();
          for(let i=0;i<15;i++) document.querySelectorAll('.lang-option')[i%3].click();
          for(let i=0;i<10;i++) openCookieSettings();
        }""")
        self.assertEqual(self.page.locator('.consent-panel').count(), 1)
        self.assertEqual(self.page.locator('html').get_attribute('lang'), 'de')
        self.assertEqual(self.page.locator('html').get_attribute('data-theme'), 'dark')
        self.page.locator('.consent-toggle input').nth(1).check()
        self.page.locator('.consent-save').click()
        self.page.frame_locator('[data-elfsight-frame]').get_by_text('Guest review loaded').wait_for()
        self.assertEqual(len(self.provider_calls), 1)
        for _ in range(4):
            self.page.evaluate("window.dispatchEvent(new Event('focus'));window.dispatchEvent(new Event('pageshow'))")
        self.assertEqual(self.page.locator('[data-elfsight-frame]').count(), 1)
        self.assertEqual(len(self.provider_calls), 1)

    def test_cross_tab_withdrawal_and_history(self):
        self.go('reviews.html')
        self.page.frame_locator('[data-elfsight-frame]').get_by_text('Guest review loaded').wait_for()
        other = self.context.new_page()
        other.goto(ORIGIN + 'index.html', wait_until='load')
        other.evaluate("key=>localStorage.setItem(key, JSON.stringify({version:3,maps:false,reviews:false,savedAt:Date.now()}))", KEY)
        self.page.wait_for_function("!document.querySelector('[data-elfsight-frame]')")
        self.page.goto(ORIGIN + 'about.html', wait_until='load')
        self.page.go_back(wait_until='load')
        self.assertEqual(self.page.locator('[data-elfsight-frame]').count(), 0)

    def test_corrupt_expired_and_blocked_storage(self):
        self.go(consent=False)
        for data in ['broken-json', json.dumps({'version':3,'maps':True,'reviews':True,'savedAt':0})]:
            self.page.evaluate('([key,value])=>localStorage.setItem(key,value)', [KEY,data])
            self.page.reload(wait_until='load')
            self.assertTrue(self.page.locator('.consent-panel').is_visible())
            self.assertEqual(self.page.locator('[data-elfsight-frame]').count(), 0)
        self.page.add_init_script("Storage.prototype.getItem=()=>{throw new Error('Storage blocked')};Storage.prototype.setItem=()=>{throw new Error('Storage blocked')}")
        self.page.on('dialog', lambda d: d.accept())
        self.page.reload(wait_until='load')
        self.page.locator('.consent-actions button').first.click()
        self.page.frame_locator('[data-elfsight-frame]').get_by_text('Guest review loaded').wait_for()
        self.page.evaluate("window.dispatchEvent(new Event('focus'))")
        self.assertFalse(self.page.locator('.consent-panel').count())

    def test_all_pages_languages_and_widths(self):
        failures = []
        for source in ROOT.glob('*.html'):
            self.go(source.name, consent=False)
            self.assertEqual(self.page.locator('header').count(), 1, source.name)
            for lang in ['en','hr','de']:
                self.page.evaluate('lang=>applyLang(lang)',lang)
                for width in [320,1073,1280,1440]:
                    self.page.set_viewport_size({'width':width,'height':800})
                    overflow = self.page.evaluate('document.documentElement.scrollWidth')
                    if overflow > width:
                        failures.append(f'{source.name} {lang} {width}: horizontal overflow {overflow}')
                    if width > 1200:
                        self.assertLessEqual(self.page.locator('#dark-mode-btn').bounding_box()['x'] +
                                             self.page.locator('#dark-mode-btn').bounding_box()['width'],width,
                                             f'{source.name} {lang} {width}: clipped navigation')
        self.assertEqual(failures, [])


if __name__ == '__main__':
    unittest.main(verbosity=2)
