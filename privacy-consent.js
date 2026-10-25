(function () {
    'use strict';

    var storageKey = 'vs-privacy-consent-v1';
    var lifetime = 180 * 24 * 60 * 60 * 1000;
    var consent = null;
    var language = 'en';
    var messages = {
        en: {
            title: 'Your privacy matters',
            text: 'This site uses browser storage for your language, theme, and consent choice. Optional external content (Google Maps, guest reviews, and font services) is off until you choose to allow it. No analytics or advertising cookies are used.',
            privacy: 'Privacy notice',
            cookieSettings: 'Cookie settings',
            accept: 'Allow optional content',
            reject: 'Reject optional content',
            settings: 'Settings',
            settingsTitle: 'Privacy settings',
            necessary: 'Necessary site storage',
            necessaryText: 'Language, theme, and remembering this choice. Always active; these settings stay in your browser.',
            external: 'Optional external content',
            externalText: 'Load Google Maps, the Elfsight guest-review widget, Google Fonts, and Font Awesome from their providers. These providers may receive your IP address and device/browser information.',
            save: 'Save choices',
            cancel: 'Cancel',
            mapTitle: 'Map not loaded',
            mapText: 'Google Maps is an external service. Allow optional content to load the map, or open the location directly on Google Maps.',
            mapLink: 'Open in Google Maps',
            mapButton: 'Review privacy settings',
            reviewsTitle: 'Guest reviews',
            reviewsText: 'The review widget is provided by Elfsight and loads only after you allow optional external content.',
            storageError: 'Your browser could not save this preference. Your choice applies for this page only and will be asked again on your next visit.'
        },
        hr: {
            title: 'Vaša privatnost nam je važna',
            text: 'Ova stranica koristi pohranu u pregledniku za jezik, temu i vaš odabir privatnosti. Neobavezni vanjski sadržaji (Google karte, recenzije gostiju i fontovi) isključeni su dok ih ne dopustite. Ne koristimo analitičke ni oglašivačke kolačiće.',
            privacy: 'Obavijest o privatnosti',
            cookieSettings: 'Postavke kolačića',
            accept: 'Dopusti neobavezne sadržaje',
            reject: 'Odbij neobavezne sadržaje',
            settings: 'Postavke',
            settingsTitle: 'Postavke privatnosti',
            necessary: 'Nužna pohrana stranice',
            necessaryText: 'Jezik, tema i pamćenje ovog odabira. Uvijek aktivno; postavke ostaju u vašem pregledniku.',
            external: 'Neobavezni vanjski sadržaji',
            externalText: 'Učitavanje Google karata, Elfsight widgeta s recenzijama gostiju, Google Fontsa i Font Awesomea od njihovih pružatelja. Ti pružatelji mogu primiti vašu IP adresu te podatke o uređaju i pregledniku.',
            save: 'Spremi odabir',
            cancel: 'Odustani',
            mapTitle: 'Karta nije učitana',
            mapText: 'Google karte su vanjska usluga. Dopustite neobavezne sadržaje za učitavanje karte ili otvorite lokaciju izravno na Google kartama.',
            mapLink: 'Otvori u Google kartama',
            mapButton: 'Pregledaj postavke privatnosti',
            reviewsTitle: 'Recenzije gostiju',
            reviewsText: 'Widget s recenzijama pruža Elfsight i učitava se samo nakon što dopustite neobavezne vanjske sadržaje.',
            storageError: 'Preglednik nije mogao spremiti ovu postavku. Odabir vrijedi samo za ovu stranicu, a pri sljedećem posjetu bit će ponovno zatražen.'
        },
        de: {
            title: 'Ihre Privatsphäre ist uns wichtig',
            text: 'Diese Website speichert Ihre Sprache, Ihr Design und Ihre Einwilligung im Browser. Optionale externe Inhalte (Google Maps, Gästebewertungen und Schriftarten) bleiben deaktiviert, bis Sie zustimmen. Wir verwenden keine Analyse- oder Werbe-Cookies.',
            privacy: 'Datenschutzhinweis',
            cookieSettings: 'Cookie-Einstellungen',
            accept: 'Optionale Inhalte erlauben',
            reject: 'Optionale Inhalte ablehnen',
            settings: 'Einstellungen',
            settingsTitle: 'Datenschutzeinstellungen',
            necessary: 'Notwendiger Website-Speicher',
            necessaryText: 'Sprache, Design und Speicherung dieser Auswahl. Immer aktiv; diese Einstellungen bleiben in Ihrem Browser.',
            external: 'Optionale externe Inhalte',
            externalText: 'Google Maps, das Elfsight-Gästebewertungs-Widget, Google Fonts und Font Awesome werden von deren Anbietern geladen. Diese Anbieter können Ihre IP-Adresse sowie Geräte- und Browserinformationen erhalten.',
            save: 'Auswahl speichern',
            cancel: 'Abbrechen',
            mapTitle: 'Karte nicht geladen',
            mapText: 'Google Maps ist ein externer Dienst. Erlauben Sie optionale Inhalte, um die Karte zu laden, oder öffnen Sie den Standort direkt in Google Maps.',
            mapLink: 'In Google Maps öffnen',
            mapButton: 'Datenschutzeinstellungen ansehen',
            reviewsTitle: 'Gästebewertungen',
            reviewsText: 'Das Bewertungs-Widget wird von Elfsight bereitgestellt und erst geladen, wenn Sie optionale externe Inhalte erlauben.',
            storageError: 'Ihr Browser konnte diese Einstellung nicht speichern. Sie gilt nur für diese Seite und wird beim nächsten Besuch erneut abgefragt.'
        }
    };

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
            if (saved && saved.version === 1 && typeof saved.external === 'boolean' &&
                Number.isFinite(saved.savedAt) && saved.savedAt <= Date.now() &&
                Date.now() - saved.savedAt < lifetime) {
                return saved;
            }
        } catch (error) {
            console.error('Could not read the saved privacy choice.', error);
        }
        return null;
    }

    function addStylesheet(id, href) {
        if (document.getElementById(id)) return;
        var link = document.createElement('link');
        link.id = id;
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    }

    function removeExternalContent() {
        document.querySelectorAll('[data-external-frame]').forEach(function (frame) {
            frame.remove();
        });
        document.querySelectorAll('[data-external-map]').forEach(function (placeholder) {
            placeholder.hidden = false;
            delete placeholder.dataset.loaded;
        });
        document.querySelectorAll('[data-external-placeholder]').forEach(function (placeholder) {
            placeholder.hidden = false;
        });
        var widget = document.querySelector('[data-elfsight-widget]');
        if (widget) {
            widget.innerHTML = '';
            widget.hidden = true;
            if (widget.previousElementSibling) {
                widget.previousElementSibling.hidden = false;
            }
        }
        var widgetScript = document.getElementById('elfsight-platform');
        if (widgetScript) widgetScript.remove();
        document.getElementById('google-fonts-css')?.remove();
        document.getElementById('fontawesome-css')?.remove();
    }

    function loadExternalContent() {
        addStylesheet(
            'google-fonts-css',
            'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap'
        );
        addStylesheet(
            'fontawesome-css',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'
        );

        document.querySelectorAll('[data-external-map]').forEach(function (placeholder) {
            if (placeholder.dataset.loaded === 'true') return;
            var frame = document.createElement('iframe');
            frame.src = placeholder.dataset.externalMap;
            frame.title = placeholder.dataset.mapTitle || 'Vila Sanja location on Google Maps';
            frame.width = '100%';
            frame.height = '320';
            frame.loading = 'lazy';
            frame.referrerPolicy = 'no-referrer';
            frame.allowFullscreen = true;
            frame.style.border = '0';
            frame.style.display = 'block';
            frame.dataset.externalFrame = 'true';
            placeholder.hidden = true;
            placeholder.parentNode.appendChild(frame);
            placeholder.dataset.loaded = 'true';
        });

        var reviews = document.querySelector('[data-elfsight-widget]');
        if (reviews && !document.getElementById('elfsight-platform')) {
            reviews.hidden = false;
            if (reviews.previousElementSibling) {
                reviews.previousElementSibling.hidden = true;
            }
            reviews.innerHTML = '<div class="elfsight-app-8ae2e8e5-09be-43ec-853b-b421f041f45c" data-elfsight-app-lazy></div>';
            var script = document.createElement('script');
            script.id = 'elfsight-platform';
            script.src = 'https://static.elfsight.com/platform/platform.js';
            script.async = true;
            script.onerror = function () {
                console.error('The optional guest-review widget could not be loaded.');
            };
            document.body.appendChild(script);
        }
    }

    function applyConsent() {
        if (consent && consent.external) {
            loadExternalContent();
        } else {
            removeExternalContent();
        }
    }

    function saveChoice(external) {
        consent = { version: 1, external: external, savedAt: Date.now() };
        try {
            localStorage.setItem(storageKey, JSON.stringify(consent));
        } catch (error) {
            console.error('Could not save the privacy choice.', error);
            window.alert(messages[language].storageError);
        }
        applyConsent();
        closePanel();
    }

    function closePanel() {
        var panel = document.querySelector('.consent-panel');
        if (panel) panel.remove();
    }

    function element(tag, className, text) {
        var node = document.createElement(tag);
        if (className) node.className = className;
        if (text) node.textContent = text;
        return node;
    }

    function openPanel(settings) {
        closePanel();
        var t = messages[language];
        var panel = element('section', 'consent-panel');
        panel.setAttribute('role', 'dialog');
        panel.setAttribute('aria-label', settings ? t.settingsTitle : t.title);
        var heading = element('h2', '', settings ? t.settingsTitle : t.title);
        panel.appendChild(heading);

        if (settings) {
            var necessary = element('p', '', t.necessaryText);
            var necessaryLabel = element('strong', '', t.necessary);
            panel.appendChild(necessaryLabel);
            panel.appendChild(necessary);
            var label = element('label', 'consent-toggle');
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = !!(consent && consent.external);
            var description = element('span');
            description.appendChild(element('strong', '', t.external));
            description.appendChild(document.createElement('br'));
            description.appendChild(document.createTextNode(t.externalText));
            label.appendChild(checkbox);
            label.appendChild(description);
            panel.appendChild(label);

            var save = element('button', 'consent-save', t.save);
            save.type = 'button';
            save.addEventListener('click', function () {
                saveChoice(checkbox.checked);
            });
            var cancel = element('button', 'consent-secondary', t.cancel);
            cancel.type = 'button';
            cancel.addEventListener('click', closePanel);
            var settingsActions = element('div', 'consent-actions');
            settingsActions.appendChild(save);
            settingsActions.appendChild(cancel);
            panel.appendChild(settingsActions);
        } else {
            panel.appendChild(element('p', '', t.text));
            var privacyLink = element('a', '', t.privacy);
            privacyLink.href = 'privacy.html';
            panel.appendChild(privacyLink);
            var actions = element('div', 'consent-actions');
            [
                ['accept', true, ''],
                ['reject', false, 'consent-secondary'],
                ['settings', null, 'consent-secondary']
            ].forEach(function (item) {
                var button = element('button', item[2], t[item[0]]);
                button.type = 'button';
                button.addEventListener('click', function () {
                    if (item[0] === 'settings') {
                        openPanel(true);
                    } else {
                        saveChoice(item[1]);
                    }
                });
                actions.appendChild(button);
            });
            panel.appendChild(actions);
        }
        var error = element('p', 'consent-error');
        error.setAttribute('aria-live', 'polite');
        panel.appendChild(error);
        document.body.appendChild(panel);
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

    function createEmbedPlaceholders() {
        document.querySelectorAll('[data-external-map]').forEach(function (placeholder) {
            var t = messages[language];
            placeholder.classList.add('external-content-placeholder');
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

    document.addEventListener('DOMContentLoaded', function () {
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
                language = getLanguage();
                refreshLanguageLabels();
                refreshOpenPanel();
            });
        });
        refreshLanguageLabels();
        window.openCookieSettings = function () {
            openPanel(true);
        };
        consent = readConsent();
        if (consent) {
            applyConsent();
        } else {
            openPanel(false);
        }
    });
})();
