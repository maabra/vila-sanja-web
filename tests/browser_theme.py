"""Check theme surfaces, contrast, and persistence using offline browser routes."""
from pathlib import Path
from browser_edge_cases import EdgeCases, ORIGIN, KEY


def contrast(first, second):
    def luminance(rgb):
        channels = [v / 255 for v in rgb[:3]]
        linear = [v / 12.92 if v <= .04045 else ((v + .055) / 1.055) ** 2.4 for v in channels]
        return sum(v * weight for v, weight in zip(linear, [.2126, .7152, .0722]))
    values = sorted([luminance(first), luminance(second)])
    return (values[1] + .05) / (values[0] + .05)


if __name__ == '__main__':
    EdgeCases.setUpClass()
    test = EdgeCases()
    test.setUp()
    try:
        test.context.add_init_script("""localStorage.setItem('vs-theme','dark');
          localStorage.setItem('%s', JSON.stringify({version:3,maps:false,reviews:false,savedAt:Date.now()}));""" % KEY)
        for path in Path('.').glob('*.html'):
            test.page.goto(ORIGIN + path.name, wait_until='domcontentloaded')
            for width in (320, 1440):
                test.page.set_viewport_size({'width': width, 'height': 900})
                test.page.wait_for_timeout(250)
                assert test.page.locator('body').evaluate('(e)=>getComputedStyle(e).backgroundColor') == 'rgb(28, 38, 35)', path.name
                assert not test.page.evaluate('document.documentElement.scrollWidth>innerWidth'), (path.name, width)
                for selector in ('.card', '.section', '.section-alt .inner', '.room-intro', '.attr-card', '.apt-amen-col', '.town-card', '.beach-tip-card'):
                    for surface in test.page.locator(selector).all():
                        assert surface.evaluate('(e)=>getComputedStyle(e).backgroundColor') == 'rgba(0, 0, 0, 0)', (path.name, selector)
                for selector in ('.cta-button', '.book-now', '.footer-info', '.footer-copy', '.card-title', '.card-desc'):
                    for element in test.page.locator(selector).all():
                        colours = element.evaluate('''e=>{
                          const rgb=s=>s.match(/[\\d.]+/g).map(Number);
                          let bg=null;
                          for(let node=e;node;node=node.parentElement) {
                            const c=rgb(getComputedStyle(node).backgroundColor);
                            if(c.length===3 || c[3]===1) {bg=c;break;}
                          }
                          return [rgb(getComputedStyle(e).color),bg];
                        }''')
                        if colours[1]:
                            assert contrast(*colours) >= 4.5, (path.name, selector, colours)
            print('Dark theme passed:', path.name, flush=True)
        test.page.goto(ORIGIN, wait_until='domcontentloaded')
        test.page.set_viewport_size({'width': 1440, 'height': 1000})
        test.page.locator('#dark-mode-btn').click()
        assert test.page.locator('html').get_attribute('data-theme') == 'light'
        test.page.locator('#dark-mode-btn').click()
        assert test.page.evaluate("localStorage.getItem('vs-theme')") == 'dark'
        test.page.locator('.feat-grid').scroll_into_view_if_needed()
        test.page.wait_for_timeout(400)
        test.page.screenshot(path='dark-theme-preview.png')
        print('Theme toggle and persistence passed', flush=True)
    finally:
        test.tearDown()
        EdgeCases.tearDownClass()
