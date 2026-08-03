document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 2. Scroll Reveal Animation using IntersectionObserver
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        // Find all intersecting entries and sort them by vertical/horizontal placement for a clean flow
        const intersecting = entries.filter(entry => entry.isIntersecting);
        
        intersecting.forEach((entry, index) => {
            const el = entry.target;
            
            // Check if card elements are part of a grid to apply stagger delay
            const isCard = el.classList.contains('card') || el.classList.contains('contact-card');
            const staggerDelay = isCard ? index * 80 : 0;
            
            setTimeout(() => {
                el.classList.add('in');
            }, staggerDelay);
            
            // Unobserve the element once transition is triggered
            observer.unobserve(el);
        });
    }, {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px' // Triggers slightly before element enters viewport fully
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 3. Premium Editorial Console Watermark
    console.log(
        "%c FUSHIFT %c SYSTEM OPERATIONAL %c",
        "background:#111111; color:#F7F6F3; padding:4px 6px; border-radius:3px 0 0 3px; font-family:monospace; font-weight:bold;",
        "background:#EDF3EC; color:#346538; padding:4px 6px; border-radius:0 3px 3px 0; font-family:monospace; font-weight:bold;",
        "background:transparent"
    );
});
