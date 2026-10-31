"""Apartment enquiry composition stays local, valid and usable without widgets."""
import unittest
from urllib.parse import unquote
import browser_edge_cases as fixture


class Contact(unittest.TestCase):
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

    def test_enquiry_validation_review_translation_and_copy_fallback(self):
        self.site.go('contact.html', consent=False)
        self.page.evaluate('applyLang("en")')
        self.page.locator('#enquiry-name').fill('Test Guest')
        self.page.locator('#enquiry-email').fill('guest@example.com')
        self.page.locator('#enquiry-arrival').fill('2027-06-10')
        self.page.locator('#enquiry-departure').fill('2027-06-09')
        self.assertFalse(self.page.locator('#enquiry-departure').evaluate('e=>e.checkValidity()'))
        self.page.locator('#enquiry-departure').fill('2027-06-15')
        self.page.locator('#enquiry-unit').select_option('rm.hero')
        self.page.locator('#enquiry-guests').fill('3')
        self.assertFalse(self.page.locator('#enquiry-guests').evaluate('e=>e.checkValidity()'))
        self.page.locator('#enquiry-guests').fill('2')
        self.page.locator('#enquiry-message').fill('Please confirm availability.')
        self.page.locator('button[data-i18n="contact.prepare"]').click()
        self.assertTrue(self.page.locator('#enquiry-result').is_visible())
        draft = self.page.locator('#enquiry-preview').input_value()
        self.assertIn('\n', draft)
        self.assertIn('2027-06-15', draft)
        self.assertIn(draft, unquote(self.page.locator('#enquiry-email-link').get_attribute('href')))
        self.page.locator('#enquiry-guests').fill('3')
        self.assertIsNone(self.page.locator('#enquiry-email-link').get_attribute('href'))
        self.page.locator('#enquiry-guests').fill('2')
        self.assertTrue(self.page.locator('#enquiry-email-link').get_attribute('href').startswith('mailto:vila-sanja@hotmail.com?'))
        self.page.evaluate("Object.defineProperty(navigator,'clipboard',{value:{writeText:()=>Promise.reject(new Error('Denied'))},configurable:true})")
        self.page.locator('#copy-enquiry').click()
        self.assertIn('Select and copy', self.page.locator('#enquiry-status').inner_text())
        self.page.evaluate('applyLang("hr")')
        self.assertIn('Datum dolaska', self.page.locator('#enquiry-preview').input_value())
        self.assertEqual(self.page.locator('#enquiry-name').input_value(), 'Test Guest')
        self.assertEqual(self.site.provider_calls, [])

    def test_direct_contacts_work_without_javascript(self):
        context = self.site.browser.new_context(java_script_enabled=False)
        context.route('**/*', self.site.route)
        try:
            page = context.new_page()
            page.goto(fixture.ORIGIN + 'contact.html')
            self.assertEqual(page.locator('.contact-person').count(), 2)
            self.assertEqual(page.locator('.contact-actions a').count(), 8)
            self.assertTrue(page.locator('.contact-email-row a').is_visible())
            self.assertTrue(page.locator('#stay-enquiry').is_hidden())
            self.assertTrue(page.locator('.contact-location-actions a[href*="google.com/maps"]').is_visible())
        finally:
            context.close()


if __name__ == '__main__':
    unittest.main(verbosity=2)
