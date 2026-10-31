/* One keyboard-accessible gallery for all accommodation pages. */
(() => {
    const gallery = document.querySelector('[data-gallery-folder]');
    if (!gallery) return;
    const count = Number(gallery.dataset.galleryCount);
    const base = gallery.dataset.galleryFolder;
    const main = document.getElementById('mainGalleryImage');
    const box = document.getElementById('lightbox');
    const enlarged = document.getElementById('lbImg');
    const thumbnails = gallery.querySelector('.gallery-thumbnails');
    const buttons = [];
    let current = 0;
    let returnFocus = null;
    const source = index => `${base}/${index + 1}.webp`;
    const words = () => LANG_DATA[document.documentElement.lang] || LANG_DATA.en;
    function update() {
        const text = words();
        const label = `${text[gallery.dataset.stayTitle]} · ${text['gallery.photo']} ${current + 1} / ${count}`;
        main.alt = label;
        main.setAttribute('aria-label', text['gallery.open'] + ': ' + label);
        gallery.querySelector('.gallery-arrow.left').setAttribute('aria-label', text['gallery.previous']);
        gallery.querySelector('.gallery-arrow.right').setAttribute('aria-label', text['gallery.next']);
        document.getElementById('lbPrev').setAttribute('aria-label', text['gallery.previous']);
        document.getElementById('lbNext').setAttribute('aria-label', text['gallery.next']);
        document.getElementById('lbClose').setAttribute('aria-label', text['gallery.close']);
        box.setAttribute('aria-label', text['gallery.label']);
        enlarged.alt = label;
        buttons.forEach((button, index) => {
            button.setAttribute('aria-label', `${text['gallery.photo']} ${index + 1} / ${count}`);
            button.setAttribute('aria-pressed', String(index === current));
            button.querySelector('img').classList.toggle('selected', index === current);
        });
    }
    function show(index) {
        current = (index + count) % count;
        main.src = source(current);
        if (box.classList.contains('open')) enlarged.src = source(current);
        update();
    }
    for (let index = 0; index < count; index++) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'gallery-thumb-button';
        const image = document.createElement('img');
        image.className = 'gallery-thumb';
        image.src = `${base}/${index + 1}-160.webp`;
        image.alt = '';
        image.width = 160;
        image.height = 120;
        image.loading = 'lazy';
        image.decoding = 'async';
        button.appendChild(image);
        button.addEventListener('click', () => show(index));
        thumbnails.appendChild(button);
        buttons.push(button);
    }
    window.openLightbox = function (index) {
        returnFocus = document.activeElement;
        show(index);
        enlarged.src = source(current);
        box.classList.add('open');
        document.body.style.overflow = 'hidden';
        document.getElementById('lbClose').focus();
    };
    function close() {
        box.classList.remove('open');
        document.body.style.overflow = '';
        if (returnFocus && typeof returnFocus.focus === 'function') returnFocus.focus();
    }
    main.tabIndex = 0;
    main.setAttribute('role', 'button');
    main.setAttribute('aria-haspopup', 'dialog');
    main.addEventListener('click', () => openLightbox(current));
    main.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); openLightbox(current);
        }
    });
    gallery.querySelector('.gallery-arrow.left').addEventListener('click', () => show(current - 1));
    gallery.querySelector('.gallery-arrow.right').addEventListener('click', () => show(current + 1));
    document.getElementById('lbPrev').addEventListener('click', () => show(current - 1));
    document.getElementById('lbNext').addEventListener('click', () => show(current + 1));
    document.getElementById('lbClose').addEventListener('click', close);
    box.addEventListener('click', event => { if (event.target === box || event.target.classList.contains('lb-wrap')) close(); });
    document.addEventListener('keydown', event => {
        if (!box.classList.contains('open')) return;
        if (event.key === 'Escape') close();
        if (event.key === 'ArrowRight') show(current + 1);
        if (event.key === 'ArrowLeft') show(current - 1);
        if (event.key === 'Tab') {
            const controls = Array.from(box.querySelectorAll('button'));
            const first = controls[0], last = controls[controls.length - 1];
            if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
            else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
        }
    });
    document.addEventListener('site:language', update);
    update();
})();
