document.addEventListener('DOMContentLoaded', () => {
    // 1. Reliability Preloader Fix
    const preloader = document.getElementById('preloader');

    // Fallback: Force hide preloader after 3 seconds if load event fails
    const forceExit = setTimeout(() => {
        hidePreloader();
    }, 3000);

    window.addEventListener('load', () => {
        clearTimeout(forceExit);
        hidePreloader();
    });

    function hidePreloader() {
        if (preloader && preloader.style.display !== 'none') {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }

    // 2. Smooth Scrolling for all internal links
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

    // Console Watermark
    console.log("%cFUSHIFT // OPERATIONAL", "color: #3b82f6; font-weight: bold; font-size: 14px;");
});
