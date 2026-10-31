/* Prepare an enquiry locally. Nothing is sent until the guest sends their email. */
(() => {
    const form = document.getElementById('stay-enquiry');
    if (!form) return;
    form.hidden = false;
    const result = document.getElementById('enquiry-result');
    const preview = document.getElementById('enquiry-preview');
    const status = document.getElementById('enquiry-status');
    const emailLink = document.getElementById('enquiry-email-link');
    const words = () => LANG_DATA[document.documentElement.lang] || LANG_DATA.en;
    const field = name => form.elements.namedItem(name);
    let statusKey = '';
    function announce(key) {
        statusKey = key;
        status.textContent = words()[key];
    }
    function validate() {
        const text = words();
        const arrival = field('arrival');
        const departure = field('departure');
        departure.setCustomValidity(arrival.value && departure.value && departure.value <= arrival.value ? text['contact.dateerror'] : '');
        const capacity = Number(field('unit').selectedOptions[0].dataset.capacity);
        const guests = field('guests');
        guests.max = capacity;
        guests.setCustomValidity(Number(guests.value) > capacity ? text['contact.guesterror'].replace('{count}', capacity) : '');
        return form.checkValidity();
    }
    function draft() {
        const text = words();
        const unit = field('unit').value;
        return [
            text['contact.subject'], '',
            `${text['contact.name']}: ${field('name').value.trim()}`,
            `${text['contact.email']}: ${field('email').value.trim()}`,
            `${text['contact.arrival']}: ${field('arrival').value || text['contact.unspecified']}`,
            `${text['contact.departure']}: ${field('departure').value || text['contact.unspecified']}`,
            `${text['nav.accom']}: ${text[unit === 'any' ? 'contact.any' : unit]}`,
            `${text['contact.guests']}: ${field('guests').value}`, '',
            `${text['contact.message']}:`, field('message').value.trim()
        ].join('\n');
    }
    function refreshDraft() {
        preview.value = draft();
        if (!validate()) {
            emailLink.removeAttribute('href');
            emailLink.setAttribute('aria-disabled', 'true');
            return;
        }
        emailLink.removeAttribute('aria-disabled');
        emailLink.href = 'mailto:vila-sanja@hotmail.com?subject=' + encodeURIComponent(words()['contact.subject']) + '&body=' + encodeURIComponent(preview.value);
    }
    form.addEventListener('input', () => {
        validate();
        if (!result.hidden) refreshDraft();
        if (statusKey) { statusKey = ''; status.textContent = ''; }
    });
    form.addEventListener('change', validate);
    form.addEventListener('submit', event => {
        event.preventDefault();
        if (!validate()) { form.reportValidity(); return; }
        refreshDraft();
        result.hidden = false;
        announce('contact.ready');
        preview.focus();
    });
    document.getElementById('copy-enquiry').addEventListener('click', async () => {
        if (!validate()) { form.reportValidity(); return; }
        refreshDraft();
        try {
            await navigator.clipboard.writeText(preview.value);
            announce('contact.copied');
        } catch (error) {
            preview.focus();
            preview.select();
            announce('contact.copyfailed');
        }
    });
    document.addEventListener('site:language', () => {
        validate();
        if (!result.hidden) refreshDraft();
        if (statusKey) announce(statusKey);
    });
})();
