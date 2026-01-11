document.addEventListener('DOMContentLoaded', () => {
    // 1. Technical Preloader Simulation (Tiko Vibe)
    const logsContainer = document.getElementById('loader-logs');
    const pBar = document.getElementById('p-bar');
    const preloader = document.getElementById('preloader');

    const messages = [
        "INITIALIZING CORE_KERNEL...",
        "CONNECTING TO NEURAL_NET...",
        "AUTHENTICATING FUSHIFT_IDENTITY...",
        "LOADING TACTICAL_PROJECTS...",
        "ESTABLISHING GLASS_OS_VIBE...",
        "SCANNING CYBER_ARSENAL...",
        "SYSTEM_READY: OK"
    ];

    let currentMsg = 0;
    const logInterval = setInterval(() => {
        if (currentMsg < messages.length) {
            const p = document.createElement('p');
            p.textContent = `> ${messages[currentMsg]}`;
            logsContainer.appendChild(p);

            // Progress bar mapping
            const progress = ((currentMsg + 1) / messages.length) * 100;
            pBar.style.width = `${progress}%`;

            currentMsg++;
        } else {
            clearInterval(logInterval);
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.visibility = 'hidden';
                }, 800);
            }, 500);
        }
    }, 400);

    // 2. Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 3. Hero Radar Drift
    const radar = document.querySelector('.hero-radar');
    if (radar) {
        window.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) / 40;
            const moveY = (e.clientY - window.innerHeight / 2) / 40;
            radar.style.transform = `translateY(-50%) translate(${moveX}px, ${moveY}px)`;
        });
    }

    // Console Watermark
    console.log("%c[!] SYSTEM BY JARVIS - FUSH1FT_404 ONLINE", "color: #00ff41; font-family: monospace; font-size: 16px; font-weight: bold;");
});
