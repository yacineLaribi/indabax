document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu');
    const openBtn = document.getElementById('menu-open-button');
    const closeBtn = document.getElementById('menu-close-button');
    if (!menu) {
        console.warn('nav menu not found');
        return;
    }

    if (!openBtn || !closeBtn) {
        console.warn('menu open/close buttons not found');
        return;
    }

    openBtn.addEventListener('click', () => {
        document.body.classList.add('show-mobile-menu');
        menu.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
        document.body.classList.remove('show-mobile-menu');
        menu.classList.remove('open');
    });
    menu.querySelectorAll('a').forEach((a) => {
        a.addEventListener('click', () => {
            document.body.classList.remove('show-mobile-menu');
            menu.classList.remove('open');
        });
    });

    const events = document.querySelectorAll('.event');
    const btn = document.getElementById('showMoreBtn');
    const btnText = document.getElementById('btnText');
    const initialVisibleCount = 4; 
    events.forEach((event, index) => {
    if (index >= initialVisibleCount) {
            event.classList.add('hidden');
        }
    });
    btn.addEventListener('click', function() {
    const isExpanded = btn.classList.contains('expanded');
    if (!isExpanded) {
            events.forEach(event => event.classList.remove('hidden'));
            btnText.textContent = "Show less";
            btn.classList.add('expanded'); // Rotates arrow via CSS
        } else {
            events.forEach((event, index) => {
                if (index >= initialVisibleCount) {
                    event.classList.add('hidden');
                }
            });
            btnText.textContent = "Show more";
            btn.classList.remove('expanded');
            document.getElementById('agenda').scrollIntoView({ behavior: 'smooth' });
        }
    });
});