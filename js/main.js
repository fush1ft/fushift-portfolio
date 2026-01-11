document.addEventListener('DOMContentLoaded', () => {
    console.log("%c[!] FUSH1FT_404 System Online", "color: #00ff41; font-family: monospace; font-size: 16px; font-weight: bold;");
    console.log("%c>> Decrypting user profiles...", "color: #00f0ff; font-family: monospace;");
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Radar interaction (optional)
    const radar = document.querySelector('.hero-radar');
    if (radar) {
        window.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) / 50;
            const moveY = (e.clientY - window.innerHeight / 2) / 50;
            radar.style.transform = `translateY(-50%) translate(${moveX}px, ${moveY}px)`;
        });
    }
});
