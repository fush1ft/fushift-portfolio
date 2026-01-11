document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for all internal links
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
