function initHomePage() {
    console.log('Initializing or re-initializing home page scripts.');

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // --- Hamburger Menu Logic ---
    if (hamburger && navMenu) {
        // Attach listener only once
        if (!hamburger.dataset.initialized) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
            document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }));
            hamburger.dataset.initialized = 'true';
        }
        // Always reset state on init, especially for bfcache restores
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }

    // --- Intersection Observer for Animations ---
    const elementsToAnimate = document.querySelectorAll('.feature-card, .course-card');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elementsToAnimate.forEach(el => {
        el.classList.remove('visible'); // Reset for re-animation on page show
        observer.observe(el);
    });
    console.log('Intersection observer has been set up.');
}


document.addEventListener('DOMContentLoaded', initHomePage);

window.addEventListener('pageshow', (event) => {
    // event.persisted is true if the page was restored from the bfcache
    if (event.persisted) {
        console.log('Page restored from bfcache. Re-initializing state and animations.');
        initHomePage();
    }
});
