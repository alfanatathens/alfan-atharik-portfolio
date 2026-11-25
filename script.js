const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '×' : '☰';
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }));
}

// Scroll reveal: progressive, subtle motion with a no-JS fallback.
document.documentElement.classList.add('motion-ready');

const revealGroups = [
  ['.intro-content > *', 90],
  ['.expertise-card', 110],
  ['.timeline-item', 100],
  ['.work-card', 140],
  ['.education-list > div', 100],
  ['.photo-grid figure', 90],
  ['.insights-inner > *', 120],
  ['.contact-main > *', 90]
];

revealGroups.forEach(([selector, delay]) => {
  document.querySelectorAll(selector).forEach((element, index) => {
    element.classList.add('reveal');
    element.style.setProperty('--reveal-delay', `${index * delay}ms`);
  });
});

document.querySelectorAll('.section-index, .section-heading, .hero-visual, .hero-copy > .eyebrow, .hero-copy h1, .hero-lede, .hero-proof, .hero-actions, .hero-foot').forEach((element, index) => {
  element.classList.add('reveal');
  if (element.closest('.hero')) {
    element.classList.add('reveal-visible');
  }
});

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -45px 0px' });

  revealElements.forEach(element => {
    if (!element.classList.contains('reveal-visible')) observer.observe(element);
  });
} else {
  revealElements.forEach(element => element.classList.add('reveal-visible'));
}

// Gentle image movement while hovering, disabled for touch and reduced-motion users.
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.work-image').forEach(frame => {
    frame.addEventListener('pointermove', event => {
      const bounds = frame.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      const image = frame.querySelector('img');
      if (image) image.style.transform = `scale(1.055) translate(${x * -8}px, ${y * -8}px)`;
    });
    frame.addEventListener('pointerleave', () => {
      const image = frame.querySelector('img');
      if (image) image.style.transform = '';
    });
  });
}
