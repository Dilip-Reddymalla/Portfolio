/* ═══════════════════════════════════════════════════
   READING PROGRESS BAR
═══════════════════════════════════════════════════ */
const progressBar = document.getElementById('progress-bar');

function updateProgressBar() {
    if (!progressBar) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
}

/* ═══════════════════════════════════════════════════
   NAVBAR: SCROLL BLUR + SCROLL-SPY
═══════════════════════════════════════════════════ */
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('#desktop-nav a');
const sections = document.querySelectorAll('section[id]');
const backToTop = document.getElementById('back-to-top');

function onScroll() {
    const scrollY = window.scrollY;

    // Sticky blur
    if (navbar) navbar.classList.toggle('scrolled', scrollY > 50);

    // Back-to-top visibility
    if (backToTop) backToTop.classList.toggle('visible', scrollY > 400);

    // Update progress bar
    updateProgressBar();

    // Scroll-spy: highlight active nav link
    let currentSection = '';
    sections.forEach(section => {
        if (scrollY >= section.offsetTop - 120) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', onScroll, { passive: true });

/* ═══════════════════════════════════════════════════
   REVEAL ANIMATIONS (Intersection Observer)
═══════════════════════════════════════════════════ */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

/* ═══════════════════════════════════════════════════
   CURSOR GLOW EFFECT (RAF-throttled, touch-safe)
═══════════════════════════════════════════════════ */
const cursorGlow = document.getElementById('cursor-glow');

if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
    let raf = null;
    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (!raf) {
            raf = requestAnimationFrame(() => {
                cursorGlow.style.left = mouseX + 'px';
                cursorGlow.style.top = mouseY + 'px';
                raf = null;
            });
        }
    }, { passive: true });
} else if (cursorGlow) {
    cursorGlow.style.display = 'none';
}

/* ═══════════════════════════════════════════════════
   HAMBURGER MENU
═══════════════════════════════════════════════════ */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
        const isOpen = hamburger.classList.toggle('open');
        mobileNav.classList.toggle('open', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            mobileNav.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
            hamburger.classList.remove('open');
            mobileNav.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
}

/* ═══════════════════════════════════════════════════
   BACK TO TOP
═══════════════════════════════════════════════════ */
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ═══════════════════════════════════════════════════
   EMAIL COPY
═══════════════════════════════════════════════════ */
const emailBtn = document.getElementById('Email-btn');
const notify = document.getElementById('notify');

if (emailBtn && notify) {
    emailBtn.addEventListener('click', () => {
        const email = 'reddymaladilip@gmail.com';
        navigator.clipboard.writeText(email)
            .then(() => {
                notify.classList.remove('hidden');
                emailBtn.textContent = 'Copied!';
                setTimeout(() => {
                    notify.classList.add('hidden');
                    emailBtn.textContent = 'Copy Email';
                }, 2500);
            })
            .catch(() => {
                // Fallback
                const el = document.createElement('textarea');
                el.value = email;
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);
                notify.classList.remove('hidden');
                setTimeout(() => notify.classList.add('hidden'), 2500);
            });
    });
}
