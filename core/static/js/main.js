// ── PARALLAX ──
const parallaxScene = document.getElementById('parallaxScene');
let rafTicking = false;

window.addEventListener('scroll', () => {
  if (!rafTicking) {
    requestAnimationFrame(() => {
      parallaxScene.style.transform = `translateY(${window.scrollY * 0.22}px)`;
      rafTicking = false;
    });
    rafTicking = true;
  }
}, { passive: true });


// ── ACTIVE NAV ON SCROLL ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === '#' + entry.target.id
        );
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => navObserver.observe(s));


// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

revealEls.forEach(el => revealObserver.observe(el));


// ── MOBILE NAV TOGGLE ──
const navToggle = document.getElementById('navToggle');
const navLinksList = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinksList.classList.toggle('open');
  });

  // close nav when a link is clicked on mobile
  navLinksList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinksList.classList.remove('open');
    });
  });
}


// ── SAKURA PETALS (canvas) ──
const canvas = document.getElementById('sakura-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const petals = Array.from({ length: 25 }, () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight - window.innerHeight,
  r: Math.random() * 3.5 + 2,
  speed: Math.random() * 0.6 + 0.25,
  drift: (Math.random() - 0.5) * 0.5,
  angle: Math.random() * Math.PI * 2,
  spin: (Math.random() - 0.5) * 0.016,
  alpha: Math.random() * 0.35 + 0.12,
  hue: Math.random() * 18 + 340,
}));

function drawPetal(p) {
  ctx.save();
  ctx.globalAlpha = p.alpha;
  ctx.translate(p.x, p.y);
  ctx.rotate(p.angle);
  ctx.beginPath();
  ctx.ellipse(0, 0, p.r, p.r * 1.65, 0, 0, Math.PI * 2);
  ctx.fillStyle = `hsl(${p.hue}, 58%, 80%)`;
  ctx.fill();
  ctx.restore();
}

function animatePetals() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  petals.forEach(p => {
    p.y += p.speed;
    p.x += p.drift + Math.sin(p.y * 0.011) * 0.28;
    p.angle += p.spin;
    if (p.y > canvas.height + 20) {
      p.y = -20;
      p.x = Math.random() * canvas.width;
    }
    drawPetal(p);
  });
  requestAnimationFrame(animatePetals);
}
animatePetals();