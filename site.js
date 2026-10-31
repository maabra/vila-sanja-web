/* Small shared behaviours; core content and contact links remain plain HTML. */
(() => {
    const nav = document.querySelector('header nav');
    const toggle = document.querySelector('.menu-toggle');
    if (nav && toggle) {
        const sync = () => document.documentElement.classList.toggle('nav-open', nav.classList.contains('active') && innerWidth <= 1200);
        new MutationObserver(sync).observe(nav, {attributes: true, attributeFilter: ['class']});
        addEventListener('resize', sync);
        document.addEventListener('keydown', event => {
            if (event.key !== 'Tab' || !document.documentElement.classList.contains('nav-open') || document.querySelector('dialog[open]')) return;
            const links = [toggle, ...nav.querySelectorAll('a,button')].filter(node => node.getClientRects().length);
            const first = links[0], last = links[links.length - 1];
            if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
            else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
        });
    }
    const floating = document.querySelector('.book-now');
    if (floating && 'IntersectionObserver' in window) {
        const visible = new Set();
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target));
            floating.classList.toggle('near-action', visible.size > 0);
        });
        document.querySelectorAll('footer,.stay-booking,.booking-options').forEach(node => observer.observe(node));
    }
    const counter = document.querySelector('.footer-counter img');
    if (counter) {
        const failed = () => {
            const host = counter.closest('.footer-counter');
            if (!host || host.querySelector('.counter-status')) return;
            counter.closest('a').hidden = true;
            const status = document.createElement('p');
            status.className = 'counter-status';
            status.dataset.i18n = 'counter.unavailable';
            status.dataset.i18nOrig = LANG_DATA.en['counter.unavailable'];
            status.textContent = (LANG_DATA[document.documentElement.lang] || LANG_DATA.en)['counter.unavailable'];
            host.appendChild(status);
        };
        counter.addEventListener('error', failed);
        if (counter.complete && !counter.naturalWidth && counter.currentSrc) failed();
    }
})();
