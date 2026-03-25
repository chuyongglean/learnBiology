/**
 * CORE ELITE SCRIPT
 * Engineered for Performance, Precision, and Sophistication.
 */

document.addEventListener('DOMContentLoaded', () => {
    /**
     * 01. AOS Initialization
     */
    AOS.init({
        duration: 1000,
        easing: 'ease-out-expo',
        once: true,
        offset: 80,
        delay: 50
    });

    /**
     * 02. Header Scroll Controller
     */
    const header = document.querySelector('.header');
    const updateHeaderState = () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', updateHeaderState, { passive: true });
    updateHeaderState();

    /**
     * 03. High-Performance Intersection Observers
     */
    
    // Active Link Highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    const activeObserverOptions = {
        root: null,
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0
    };

    const activeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href').includes(id));
                });
            }
        });
    }, activeObserverOptions);

    sections.forEach(section => activeObserver.observe(section));

    // Custom Scroll Reveal Animations (Elite Minimalist Triggers)
    // Updated to include the flagship showcase 'feature-card' elements for rhythmic staggered entry.
    const revealElements = document.querySelectorAll('.expertise-item, .showcase-visual, .showcase-content, .feature-card, .skill-tier, .testimonial-card, .contact-info, .contact-form-container');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 100);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    /**
     * 04. Mobile Navigation Logic
     */
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            const isOpen = hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            body.style.overflow = isOpen ? 'hidden' : 'auto';
        });

        // Close on Link Click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                body.style.overflow = 'auto';
            });
        });
    }

    /**
     * 05. Premium Custom Cursor
     */
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (window.matchMedia("(min-width: 1024px)").matches && cursorDot && cursorOutline) {
        window.addEventListener('mousemove', (e) => {
            const { clientX: x, clientY: y } = e;

            cursorDot.style.left = `${x}px`;
            cursorDot.style.top = `${y}px`;

            cursorOutline.animate({
                left: `${x}px`,
                top: `${y}px`
            }, { duration: 600, fill: "forwards", easing: "ease-out" });
        });

        const interactiveElements = 'a, button, .expertise-item, .showcase-visual, .feature-card, .tier-tags span, .link-premium';
        document.querySelectorAll(interactiveElements).forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.6)';
                cursorOutline.style.borderColor = 'var(--accent-blue)';
                cursorOutline.style.background = 'rgba(0, 122, 255, 0.05)';
                cursorDot.style.background = 'var(--accent-blue)';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutline.style.borderColor = 'rgba(0, 0, 0, 0.2)';
                cursorOutline.style.background = 'transparent';
                cursorDot.style.background = 'var(--black)';
            });
        });
    }

    /**
     * 06. Form Interaction & Validation
     */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const status = document.getElementById('form-status');
        
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            // Premium Feedback Loop
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Sending...';

            try {
                // Simulation of professional processing
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                const recipient = 'chuyongglean@gmail.com';
                const mailto = `mailto:${recipient}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent("Name: " + data.name + "\n\n" + data.message)}`;
                
                window.location.href = mailto;

                status.textContent = "Preparing your email client...";
                status.className = "success";
                status.style.display = "block";
                
                contactForm.reset();
            } catch (err) {
                status.textContent = "Execution failed. Please try again.";
                status.className = "error";
                status.style.display = "block";
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
                setTimeout(() => status.style.display = "none", 5000);
            }
        });
    }

    /**
     * 07. Utilities
     */
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Smooth internal scrolling logic removed to restore natural scrolling behavior.
    // Sticky header offset is now managed natively via CSS scroll-padding-top.
});
