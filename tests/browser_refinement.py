"""Regression checks for shared design, gallery access and widget independence."""
import unittest
from pathlib import Path
import browser_edge_cases as fixture
ORIGIN = fixture.ORIGIN


class Refinement(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        fixture.EdgeCases.setUpClass()

    @classmethod
    def tearDownClass(cls):
        fixture.EdgeCases.tearDownClass()

    def setUp(self):
        self.site = fixture.EdgeCases()
        self.site.setUp()
        self.page = self.site.page

    def tearDown(self):
        self.site.tearDown()

    def test_faq_keyboard_disclosure_and_translations(self):
        self.site.go('rules.html', consent=False)
        question = self.page.locator('.faq-question').first
        answer = self.page.locator('#faq-answer-1')
        for language in ('en', 'hr', 'de'):
            self.page.evaluate('language=>applyLang(language)', language)
            for theme in ('light', 'dark'):
                self.page.evaluate('theme=>document.documentElement.dataset.theme=theme', theme)
                question.focus()
                self.page.keyboard.press('Enter')
                self.assertEqual(question.get_attribute('aria-expanded'), 'true')
                self.assertTrue(answer.is_visible())
                self.assertEqual(question.locator('.faq-indicator').evaluate('(e)=>getComputedStyle(e,"::before").content'), '"\u2212"')
                self.page.keyboard.press('Space')
                self.assertEqual(question.get_attribute('aria-expanded'), 'false')
                self.assertTrue(answer.is_hidden())
        self.page.set_viewport_size({'width': 320, 'height': 800})
        self.assertFalse(self.page.evaluate('document.documentElement.scrollWidth>innerWidth'))

    def test_shared_translation_coverage(self):
        for source in Path('.').glob('*.html'):
            self.site.go(source.name, consent=False)
            for language in ('en', 'hr', 'de'):
                missing = self.page.evaluate('''language => [...document.querySelectorAll('[data-i18n]')]
                    .map(e => e.dataset.i18n).filter(key => !LANG_DATA[language][key])''', language)
                self.assertEqual(missing, [], (source.name, language))
                self.page.evaluate('language => applyLang(language)', language)
                for theme in ('light', 'dark'):
                    self.page.evaluate('theme => document.documentElement.dataset.theme=theme', theme)
                    for width in (320, 1440):
                        self.page.set_viewport_size({'width': width, 'height': 900})
                        self.assertFalse(self.page.evaluate('document.documentElement.scrollWidth>innerWidth'), (source.name, language, theme, width))

    def test_gallery_keyboard_labels_and_uncropped_images(self):
        for source in ('room.html', 'one-bedroom.html', 'duplex-apartment.html'):
            self.site.go(source, consent=False)
            for language in ('en', 'hr', 'de'):
                self.page.evaluate('language => applyLang(language)', language)
                label = self.page.locator('#mainGalleryImage').get_attribute('aria-label')
                self.assertNotIn('undefined', label)
                self.assertTrue(label)
                self.assertEqual(self.page.locator('#galleryCaption').count(), 0)
            self.assertEqual(self.page.locator('#mainGalleryImage').evaluate('(e)=>getComputedStyle(e).objectFit'), 'contain')
            self.page.locator('#mainGalleryImage').focus()
            self.page.keyboard.press('Enter')
            self.assertIn('open', self.page.locator('#lightbox').get_attribute('class'))
            self.assertEqual(self.page.locator('#lbClose').evaluate('(e)=>e===document.activeElement'), True)
            self.page.keyboard.press('ArrowRight')
            self.assertTrue(self.page.locator('#lbImg').get_attribute('src').endswith('/2.webp'))
            self.page.keyboard.press('Escape')
            self.assertEqual(self.page.locator('#mainGalleryImage').evaluate('(e)=>e===document.activeElement'), True)
            self.page.locator('.gallery-thumb-button').nth(2).focus()
            self.page.keyboard.press('Enter')
            self.assertTrue(self.page.locator('#mainGalleryImage').get_attribute('src').endswith('/3.webp'))

    def test_large_edge_flowers_fade_and_mobile_booking_is_in_flow(self):
        self.site.go(consent=False)
        self.page.set_viewport_size({'width': 1440, 'height': 1000})
        foliage = self.page.locator('.deco-r').evaluate('(e)=>({width:e.getBoundingClientRect().width,mask:getComputedStyle(e).maskImage,size:getComputedStyle(e).backgroundSize})')
        self.assertGreaterEqual(foliage['width'], 220)
        self.assertIn('linear-gradient', foliage['mask'])
        self.assertEqual(foliage['size'], '340px auto')
        self.page.set_viewport_size({'width': 390, 'height': 844})
        self.assertEqual(self.page.locator('.book-now').evaluate('(e)=>getComputedStyle(e).position'), 'static')
        self.assertLess(float(self.page.locator('.deco-r').evaluate('(e)=>getComputedStyle(e).opacity')), .2)

    def test_direct_contact_first_and_counter_failure_does_not_block_contacts(self):
        self.site.go('booking.html', consent=False)
        ordering = self.page.locator('.booking-card').evaluate_all('els=>els.map(e=>({direct:e.classList.contains("booking-direct"),order:Number(getComputedStyle(e).order)}))')
        direct = next(e for e in ordering if e['direct'])
        portal = next(e for e in ordering if not e['direct'])
        self.assertLess(direct['order'], portal['order'])
        self.page.locator('.footer-counter img').dispatch_event('error')
        self.assertTrue(self.page.locator('.counter-status').is_visible())
        for language in ('hr', 'de', 'en'):
            self.page.evaluate('language=>applyLang(language)', language)
            self.assertEqual(self.page.locator('.counter-status').inner_text(), self.page.evaluate('language=>LANG_DATA[language]["counter.unavailable"]', language))
        self.assertGreater(self.page.locator('a[href="tel:+385955445102"]').count(), 0)
        self.assertEqual(self.page.locator('.booking-direct .cta-button').get_attribute('href'), 'contact.html')

    def test_reduced_motion_and_no_javascript_contact_fallback(self):
        self.site.go(consent=False)
        self.page.emulate_media(reduced_motion='reduce')
        self.assertEqual(self.page.locator('.part-left').evaluate('(e)=>getComputedStyle(e).animationName'), 'none')
        context = self.site.browser.new_context(java_script_enabled=False)
        context.route('**/*', self.site.route)
        page = context.new_page()
        page.goto(ORIGIN + 'contact.html', wait_until='domcontentloaded')
        self.assertGreater(page.locator('a[href="mailto:vila-sanja@hotmail.com"]').count(), 0)
        self.assertGreater(page.locator('a[href="tel:+385955445102"]').count(), 0)
        context.close()


if __name__ == '__main__':
    unittest.main(verbosity=2)
