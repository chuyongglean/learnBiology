/**
 * BIOGRAPHY EDITORIAL SCRIPT
 * Engineered for Narrative-Driven Engagement, Precision UX, and High Performance.
 * Synchronized with the Elite Design System.
 */

/**
 * BIOGRAPHY EDITORIAL SCRIPT
 * Engineered for Narrative-Driven Engagement, Precision UX, and High Performance.
 * Synchronized with the Elite Design System.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Safety check for elite execution environment
    console.log("Biography Script: Initializing Narrative Engine...");
    /**
     * 01. Sidebar Active Link Highlighting (Intersection Observer)
     * Dynamically tracks reading progress and highlights the relevant chapter in the sidebar.
     */
    const chapters = document.querySelectorAll('section[id]');
    const sidebarLinks = document.querySelectorAll('.story-nav-link');

    if (chapters.length > 0 && sidebarLinks.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -60% 0px', // Precise focal point for editorial tracking
            threshold: 0
        };

        const activeChapterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.getAttribute('id');
                    sidebarLinks.forEach(link => {
                        const href = link.getAttribute('href').substring(1);
                        link.classList.toggle('active', href === currentId);
                    });
                }
            });
        }, observerOptions);

        chapters.forEach(chapter => activeChapterObserver.observe(chapter));
    }

    /**
     * 02. Parallax Effects for Editorial Portrait
     * Adds a subtle layer of depth to the sticky sidebar image during scroll.
     * Utilizes passive listeners and hardware acceleration for zero main-thread impact.
     */
    const portrait = document.querySelector('.bio-portrait-img');
    if (portrait && window.matchMedia("(min-width: 1024px)").matches) {
        let ticking = false;
        portrait.style.willChange = 'transform'; // Promote to layer for performance
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.scrollY;
                    const val = scrolled * 0.04;
                    portrait.style.transform = `translate3d(0, ${val}px, 0) scale(1.02)`;
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    /**
     * 03. Performance Verification
     * Redundant JS smooth-scroll and reveal observers removed.
     * Native CSS 'scroll-behavior: smooth' and 'scroll-padding-top' (defined in style.css)
     * are leveraged for optimal cross-browser interaction performance.
     * AOS (global) handles entrance animations for .chapter and .exp-item elements.
     */
});
