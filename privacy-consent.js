(function () {
    'use strict';

    var storageKey = 'vs-privacy-consent-v3';
    var lifetime = 180 * 24 * 60 * 60 * 1000;
    var consent = null;
    var language = 'en';
    var initialized = false;
    var pageOnlyChoice = false;
    var messages = {
        en: {
            title: 'A little privacy, please', eyebrow: 'Vila Sanja · Your preferences',
            text: 'Make yourself at home. We remember your language, theme and privacy choices on this device. Maps and guest reviews stay off until you choose to load them.',
            detail: 'Google Maps and Elfsight may receive your IP address and device details and use cookies. Browse freely without them, and change your mind anytime in Cookie settings.',
            privacy: 'Read our privacy notice', cookieSettings: 'Cookie settings',
            accept: 'Allow all', reject: 'Reject optional', settings: 'Choose settings',
            settingsTitle: 'Your stay. Your choices.', settingsIntro: 'Choose the extras you would like to see. Everything else on the site works without them.',
            necessary: 'The essentials', necessaryText: 'Your language, theme and privacy choice stay in your browser.', alwaysOn: 'Always on',
            externalText: 'Optional services may receive your IP address and device details and use their own cookies. You can withdraw consent here at any time.',
            save: 'Save my choices', cancel: 'Back',
            categories: { maps: 'Interactive map', reviews: 'Guest reviews' },
            providers: { maps: 'Google Maps', reviews: 'Elfsight' },
            descriptions: { maps: 'See where to find us and explore the neighbourhood.', reviews: 'Read guest experiences in the live review widget.' },
            mapTitle: 'Find your way to Vila Sanja', mapText: 'Our interactive map is provided by Google Maps. You can enable it in your settings or open directions in a new tab.',
            mapLink: 'Open Google Maps', mapButton: 'Choose privacy settings',
            reviewsTitle: 'A few words from our guests', reviewsText: 'These reviews are provided by Elfsight. Enable guest reviews in your privacy settings to see what visitors have shared.',
            storageError: 'Your browser could not save this preference. Your choice applies for this page only and will be asked again on your next visit.'
        },
        hr: {
            title: 'Malo privatnosti, molim', eyebrow: 'Vila Sanja · Vaše postavke',
            text: 'Osjećajte se kao kod kuće. Na ovom uređaju pamtimo vaš jezik, temu i odabir privatnosti. Karte i recenzije gostiju učitavaju se tek kada ih dopustite.',
            detail: 'Google karte i Elfsight mogu primiti vašu IP adresu i podatke o uređaju te koristiti kolačiće. Stranicu možete pregledavati i bez njih, a odabir promijeniti u Postavkama kolačića.',
            privacy: 'Pročitajte obavijest o privatnosti', cookieSettings: 'Postavke kolačića',
            accept: 'Dopusti sve', reject: 'Odbij neobavezno', settings: 'Odaberi postavke',
            settingsTitle: 'Vaš boravak. Vaš odabir.', settingsIntro: 'Odaberite dodatne sadržaje koje želite vidjeti. Ostatak stranice radi i bez njih.',
            necessary: 'Osnovne postavke', necessaryText: 'Vaš jezik, tema i odabir privatnosti ostaju u pregledniku.', alwaysOn: 'Uvijek aktivno',
            externalText: 'Neobavezne usluge mogu primiti vašu IP adresu i podatke o uređaju te koristiti vlastite kolačiće. Privolu ovdje možete povući u svakom trenutku.',
            save: 'Spremi moj odabir', cancel: 'Natrag',
            categories: { maps: 'Interaktivna karta', reviews: 'Recenzije gostiju' },
            providers: { maps: 'Google karte', reviews: 'Elfsight' },
            descriptions: { maps: 'Pronađite nas i istražite okolicu.', reviews: 'Pročitajte iskustva gostiju u widgetu s recenzijama.' },
            mapTitle: 'Pronađite put do Vile Sanja', mapText: 'Interaktivnu kartu pruža Google. Omogućite je u postavkama privatnosti ili otvorite upute u novoj kartici.',
            mapLink: 'Otvori Google karte', mapButton: 'Odaberi postavke privatnosti',
            reviewsTitle: 'Nekoliko riječi naših gostiju', reviewsText: 'Ove recenzije pruža Elfsight. Omogućite recenzije u postavkama privatnosti i pročitajte iskustva naših gostiju.',
            storageError: 'Preglednik nije mogao spremiti postavku. Odabir vrijedi samo za ovu stranicu i bit će ponovno zatražen pri sljedećem posjetu.'
        },
        de: {
            title: 'Ein wenig Privatsphäre, bitte', eyebrow: 'Vila Sanja · Ihre Einstellungen',
            text: 'Fühlen Sie sich wie zu Hause. Wir merken uns Ihre Sprache, Ihr Design und Ihre Datenschutzauswahl auf diesem Gerät. Karten und Gästebewertungen laden erst mit Ihrer Zustimmung.',
            detail: 'Google Maps und Elfsight können Ihre IP-Adresse und Gerätedaten erhalten und Cookies verwenden. Sie können die Website auch ohne diese Dienste nutzen und Ihre Auswahl jederzeit in den Cookie-Einstellungen ändern.',
            privacy: 'Unseren Datenschutzhinweis lesen', cookieSettings: 'Cookie-Einstellungen',
            accept: 'Alle erlauben', reject: 'Optionale ablehnen', settings: 'Auswahl anpassen',
            settingsTitle: 'Ihr Aufenthalt. Ihre Wahl.', settingsIntro: 'Wählen Sie die Extras, die Sie sehen möchten. Alle anderen Inhalte funktionieren auch ohne sie.',
            necessary: 'Die Grundeinstellungen', necessaryText: 'Sprache, Design und Datenschutzauswahl bleiben in Ihrem Browser.', alwaysOn: 'Immer aktiv',
            externalText: 'Optionale Dienste können Ihre IP-Adresse und Gerätedaten erhalten und eigene Cookies verwenden. Sie können Ihre Einwilligung hier jederzeit widerrufen.',
            save: 'Meine Auswahl speichern', cancel: 'Zurück',
            categories: { maps: 'Interaktive Karte', reviews: 'Gästebewertungen' },
            providers: { maps: 'Google Maps', reviews: 'Elfsight' },
            descriptions: { maps: 'Finden Sie uns und erkunden Sie die Umgebung.', reviews: 'Lesen Sie Gästeerfahrungen im Bewertungs-Widget.' },
            mapTitle: 'Ihr Weg zur Vila Sanja', mapText: 'Unsere interaktive Karte wird von Google Maps bereitgestellt. Aktivieren Sie sie in den Einstellungen oder öffnen Sie die Wegbeschreibung in einem neuen Tab.',
            mapLink: 'Google Maps öffnen', mapButton: 'Datenschutz auswählen',
            reviewsTitle: 'Ein paar Worte unserer Gäste', reviewsText: 'Diese Bewertungen werden von Elfsight bereitgestellt. Aktivieren Sie Gästebewertungen in Ihren Datenschutzeinstellungen, um die Erfahrungen unserer Gäste zu lesen.',
            storageError: 'Ihr Browser konnte diese Einstellung nicht speichern. Sie gilt nur für diese Seite und wird beim nächsten Besuch erneut abgefragt.'
        }
    };

    var returnFocus = null;

    function getLanguage() {
        try {
            var stored = localStorage.getItem('vs-lang');
            return messages[stored] ? stored : 'en';
        } catch (error) {
            console.error('Could not read the saved language preference.', error);
            return 'en';
        }
    }

    function readConsent() {
        try {
            var saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
            if (saved && saved.version === 3 && ['maps', 'reviews'].every(function (key) { return typeof saved[key] === 'boolean'; }) &&
                Number.isFinite(saved.savedAt) && saved.savedAt <= Date.now() &&
                Date.now() - saved.savedAt < lifetime) {
                return saved;
            }
        } catch (error) {
            console.error('Could not read the saved privacy choice.', error);
        }
        return null;
    }

    function applyConsent() {
        var choices = consent || {};
        document.querySelectorAll('[data-external-map]').forEach(function (placeholder) {
            var frame = placeholder.parentNode.querySelector('[data-external-frame]');
            if (!choices.maps && frame) frame.remove();
            placeholder.hidden = !!choices.maps;
            if (!choices.maps || frame) return;
            frame = document.createElement('iframe');
            frame.src = placeholder.dataset.externalMap;
            frame.title = placeholder.dataset.mapTitle || 'Vila Sanja location on Google Maps';
            frame.width = '100%';
            frame.height = '320';
            frame.loading = 'lazy';
            frame.referrerPolicy = 'no-referrer';
            frame.allowFullscreen = true;
            frame.style.border = '0';
            frame.dataset.externalFrame = 'true';
            placeholder.parentNode.appendChild(frame);
        });
        document.querySelectorAll('[data-elfsight-widget]').forEach(function (widget) {
            widget.hidden = !choices.reviews;
            widget.previousElementSibling.hidden = !!choices.reviews;
            if (!choices.reviews) {
                // Removing the browsing context stops the provider's running code.
                widget.replaceChildren();
            } else if (!widget.querySelector('iframe[data-elfsight-frame]')) {
                // A noscript fallback is not a loaded widget (including with saved consent).
                widget.replaceChildren();
                var frame = document.createElement('iframe');
                frame.dataset.elfsightFrame = 'true';
                frame.title = messages[language].reviewsTitle;
                frame.width = '100%';
                frame.height = '600';
                frame.style.border = '0';
                frame.referrerPolicy = 'no-referrer';
                frame.srcdoc = '<!doctype html><html><head><meta name="referrer" content="no-referrer"></head><body><div class="elfsight-app-8ae2e8e5-09be-43ec-853b-b421f041f45c" data-elfsight-app-lazy></div><script src="https://static.elfsight.com/platform/platform.js" async><\/script></body></html>';
                widget.appendChild(frame);
            }
        });
    }

    function saveChoice(choices) {
        consent = { version: 3, maps: !!choices.maps, reviews: !!choices.reviews, savedAt: Date.now() };
        try {
            localStorage.setItem(storageKey, JSON.stringify(consent));
            pageOnlyChoice = false;
        } catch (error) {
            pageOnlyChoice = true;
            console.error('Could not save the privacy choice.', error);
            window.alert(messages[language].storageError);
        }
        applyConsent();
        closePanel();
    }

    function closePanel() {
        var panel = document.querySelector('.consent-panel');
        if (panel) panel.remove();
        document.documentElement.classList.remove('consent-open');
        if (returnFocus && returnFocus.isConnected) returnFocus.focus();
    }

    function element(tag, className, text) {
        var node = document.createElement(tag);
        if (className) node.className = className;
        if (text) node.textContent = text;
        return node;
    }

    function openPanel(settings) {
        var previousFocus = document.activeElement;
        closePanel();
        if (previousFocus && !previousFocus.closest('.consent-panel')) returnFocus = previousFocus;
        var t = messages[language];
        var panel = element('dialog', 'consent-panel');
        panel.setAttribute('role', 'dialog');
        panel.setAttribute('aria-modal', 'true');
        panel.setAttribute('aria-label', settings ? t.settingsTitle : t.title);
        var brand = element('div', 'consent-brand');
        var logo = document.createElement('img');
        logo.src = 'images/depo/logo.png';
        logo.alt = '';
        logo.width = 48;
        logo.height = 48;
        brand.appendChild(logo);
        brand.appendChild(element('span', '', t.eyebrow));
        panel.appendChild(brand);
        var languages = element('div', 'consent-languages');
        languages.setAttribute('role', 'group');
        languages.setAttribute('aria-label', 'Language / Jezik / Sprache');
        [['en', 'English'], ['hr', 'Hrvatski'], ['de', 'Deutsch']].forEach(function (item) {
            var button = element('button');
            var flag = element('span', 'consent-language-flag');
            var flags = {
                en: '<rect width="30" height="20" fill="#21468b"/><path d="M0 0L30 20M30 0L0 20" stroke="#fff" stroke-width="5"/><path d="M0 0L30 20M30 0L0 20" stroke="#c8102e" stroke-width="2"/><path d="M15 0V20M0 10H30" stroke="#fff" stroke-width="7"/><path d="M15 0V20M0 10H30" stroke="#c8102e" stroke-width="4"/>',
                hr: '<path fill="#f00" d="M0 0h30v7H0z"/><path fill="#fff" d="M0 7h30v6H0z"/><path fill="#171796" d="M0 13h30v7H0z"/><path fill="#fff" stroke="#c8102e" stroke-width=".6" d="M11 6h8v7q-4 5-8 0z"/><path fill="#c8102e" d="M11 6h2v2h-2zm4 0h2v2h-2zm-2 2h2v2h-2zm4 0h2v2h-2zm-6 2h2v2h-2zm4 0h2v2h-2zm-2 2h2v2h-2zm4 0h2v2h-2zm-2 2h2v2h-2z"/>',
                de: '<path fill="#111" d="M0 0h30v7H0z"/><path fill="#d00" d="M0 7h30v6H0z"/><path fill="#ffce00" d="M0 13h30v7H0z"/>'
            };
            flag.innerHTML = '<svg viewBox="0 0 30 20" width="30" height="20" focusable="false" aria-hidden="true">' + flags[item[0]] + '</svg>';
            flag.setAttribute('aria-hidden', 'true');
            button.appendChild(flag);
            button.appendChild(element('span', '', item[1]));
            if (language === item[0]) {
                var selected = element('span', 'consent-language-selected', '\u2713');
                selected.setAttribute('aria-hidden', 'true');
                button.appendChild(selected);
            }
            button.type = 'button';
            button.lang = item[0];
            button.setAttribute('aria-pressed', String(language === item[0]));
            button.addEventListener('click', function () {
                setPrivacyLanguage(item[0]);
            });
            languages.appendChild(button);
        });
        panel.appendChild(languages);
        var heading = element('h2', '', settings ? t.settingsTitle : t.title);
        heading.id = 'consent-heading';
        panel.setAttribute('aria-labelledby', heading.id);
        panel.appendChild(heading);

        if (settings) {
            panel.appendChild(element('p', 'consent-intro', t.settingsIntro));
            var essential = element('div', 'consent-essential');
            var essentialCopy = element('div');
            essentialCopy.appendChild(element('strong', '', t.necessary));
            essentialCopy.appendChild(element('p', '', t.necessaryText));
            essential.appendChild(essentialCopy);
            essential.appendChild(element('span', 'consent-badge', t.alwaysOn));
            panel.appendChild(essential);
            var toggles = {};
            ['maps', 'reviews'].forEach(function (key) {
                var label = element('label', 'consent-toggle');
                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = !!(consent && consent[key]);
                toggles[key] = checkbox;
                var copy = element('span', 'consent-option-copy');
                copy.appendChild(element('strong', '', t.categories[key]));
                copy.appendChild(element('span', 'consent-provider', t.providers[key]));
                copy.appendChild(element('span', 'consent-description', t.descriptions[key]));
                label.appendChild(copy);
                checkbox.setAttribute('role', 'switch');
                checkbox.setAttribute('aria-label', t.categories[key]);
                label.appendChild(checkbox);
                panel.appendChild(label);
            });
            panel.appendChild(element('p', 'consent-detail', t.externalText));
            var save = element('button', 'consent-save', t.save);
            save.type = 'button';
            save.addEventListener('click', function () {
                saveChoice({ maps: toggles.maps.checked, reviews: toggles.reviews.checked });
            });
            var cancel = element('button', 'consent-secondary', t.cancel);
            cancel.type = 'button';
            cancel.addEventListener('click', function () { openPanel(false); });
            var settingsActions = element('div', 'consent-actions');
            settingsActions.appendChild(save);
            settingsActions.appendChild(cancel);
            panel.appendChild(settingsActions);
        } else {
            panel.appendChild(element('p', 'consent-intro', t.text));
            panel.appendChild(element('p', 'consent-detail', t.detail));
            var actions = element('div', 'consent-actions');
            [
                ['accept', true, ''],
                ['reject', false, ''],
                ['settings', null, 'consent-secondary']
            ].forEach(function (item) {
                var button = element('button', item[2], t[item[0]]);
                button.type = 'button';
                button.addEventListener('click', function () {
                    if (item[0] === 'settings') {
                        openPanel(true);
                    } else {
                        saveChoice({ maps: item[1], reviews: item[1] });
                    }
                });
                actions.appendChild(button);
            });
            panel.appendChild(actions);
        }
        var privacyLink = element('a', 'consent-privacy-link', t.privacy);
        privacyLink.href = 'privacy.html';
        panel.appendChild(privacyLink);
        var error = element('p', 'consent-error');
        error.setAttribute('aria-live', 'polite');
        panel.appendChild(error);
        panel.tabIndex = -1;
        panel.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') closePanel();
        });
        panel.addEventListener('cancel', function (event) {
            event.preventDefault();
            closePanel();
        });
        document.body.appendChild(panel);
        document.documentElement.classList.add('consent-open');
        panel.showModal();
        panel.focus();
    }

    function refreshLanguageLabels() {
        document.querySelectorAll('.cookie-settings').forEach(function (button) {
            button.textContent = messages[language].cookieSettings;
        });
        document.querySelectorAll('[data-privacy-label], [data-privacy-copy]').forEach(function (label) {
            var key = label.dataset.privacyLabel || label.dataset.privacyCopy;
            label.textContent = messages[language][key];
        });
    }

    function refreshOpenPanel() {
        var panel = document.querySelector('.consent-panel');
        if (panel) {
            openPanel(!!panel.querySelector('.consent-toggle'));
        }
    }

    function embedIcon(kind) {
        var icon = element('span', 'external-content-icon');
        icon.setAttribute('aria-hidden', 'true');
        var glyph = element('i', kind === 'map' ? 'fa-solid fa-map-location-dot' : 'fa-solid fa-comments');
        icon.appendChild(glyph);
        return icon;
    }

    function createEmbedPlaceholders() {
        document.querySelectorAll('[data-external-map]').forEach(function (placeholder) {
            var t = messages[language];
            placeholder.classList.add('external-content-placeholder');
            placeholder.appendChild(embedIcon('map'));
            var title = element('strong', '', t.mapTitle);
            title.dataset.privacyCopy = 'mapTitle';
            placeholder.appendChild(title);
            var text = element('p', '', t.mapText);
            text.dataset.privacyCopy = 'mapText';
            placeholder.appendChild(text);
            var mapLink = element('a', '', t.mapLink);
            mapLink.href = 'https://www.google.com/maps/search/?api=1&query=Vila+Sanja+Premantura';
            mapLink.target = '_blank';
            mapLink.rel = 'noopener noreferrer';
            mapLink.dataset.privacyCopy = 'mapLink';
            placeholder.appendChild(mapLink);
            var button = element('button', '', t.mapButton);
            button.type = 'button';
            button.dataset.privacyCopy = 'mapButton';
            button.addEventListener('click', function () {
                openPanel(true);
            });
            placeholder.appendChild(button);
        });
        document.querySelectorAll('[data-elfsight-widget]').forEach(function (widget) {
            var t = messages[language];
            widget.hidden = true;
            var placeholder = element('div', 'external-content-placeholder');
            placeholder.appendChild(embedIcon('reviews'));
            var title = element('strong', '', t.reviewsTitle);
            title.dataset.privacyCopy = 'reviewsTitle';
            placeholder.appendChild(title);
            var text = element('p', '', t.reviewsText);
            text.dataset.privacyCopy = 'reviewsText';
            placeholder.appendChild(text);
            var button = element('button', '', t.mapButton);
            button.type = 'button';
            button.dataset.privacyCopy = 'mapButton';
            button.addEventListener('click', function () {
                openPanel(true);
            });
            placeholder.appendChild(button);
            widget.parentNode.insertBefore(placeholder, widget);
            widget.dataset.externalPlaceholder = 'true';
        });
    }

    function setPrivacyLanguage(nextLanguage) {
        language = messages[nextLanguage] ? nextLanguage : 'en';
        if (typeof window.applyLang === 'function') window.applyLang(language);
        document.querySelectorAll('[data-privacy-language]').forEach(function (section) {
            section.hidden = section.dataset.privacyLanguage !== language;
        });
        document.querySelectorAll('[data-privacy-lang-button]').forEach(function (button) {
            button.setAttribute('aria-pressed', String(button.dataset.privacyLangButton === language));
        });
        document.documentElement.lang = language;
        try {
            localStorage.setItem('vs-lang', language);
        } catch (error) {
            console.error('Could not save the selected language.', error);
        }
        refreshLanguageLabels();
        refreshOpenPanel();
    }

    function syncConsent() {
        // Keep an unsaved choice for this page when browser storage is unavailable.
        if (pageOnlyChoice && consent && Date.now() - consent.savedAt < lifetime) return;
        var previous = consent;
        consent = readConsent();
        applyConsent();
        if (!consent) {
            if (!document.querySelector('.consent-panel')) openPanel(false);
        } else if (!previous || previous.savedAt !== consent.savedAt ||
            previous.maps !== consent.maps || previous.reviews !== consent.reviews) {
            closePanel();
        }
    }

    function initialize() {
        if (initialized) return;
        initialized = true;
        language = getLanguage();
        createEmbedPlaceholders();
        document.querySelectorAll('[data-privacy-lang-button]').forEach(function (button) {
            button.addEventListener('click', function () {
                setPrivacyLanguage(button.dataset.privacyLangButton);
            });
        });
        if (document.querySelector('[data-privacy-language]')) {
            setPrivacyLanguage(language);
        }
        document.querySelectorAll('.cookie-settings').forEach(function (button) {
            button.addEventListener('click', function () {
                openPanel(true);
            });
        });
        document.querySelectorAll('.lang-option').forEach(function (option) {
            option.addEventListener('click', function () {
                if (document.querySelector('[data-privacy-language]')) {
                    setPrivacyLanguage(getLanguage());
                    return;
                }
                language = getLanguage();
                refreshLanguageLabels();
                refreshOpenPanel();
            });
        });
        refreshLanguageLabels();
        window.openCookieSettings = function () {
            openPanel(true);
        };
        window.addEventListener('storage', function (event) {
            if (event.key !== storageKey && event.key !== null) return;
            pageOnlyChoice = false;
            syncConsent();
        });
        // Back/Forward restoration and returning to an open tab must re-read storage.
        window.addEventListener('pageshow', syncConsent);
        window.addEventListener('focus', syncConsent);
        document.addEventListener('visibilitychange', function () {
            if (!document.hidden) syncConsent();
        });
        syncConsent();
    }

    // Also initialize when the script is loaded after DOMContentLoaded has fired.
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize, { once: true });
    } else {
        initialize();
    }
})();
