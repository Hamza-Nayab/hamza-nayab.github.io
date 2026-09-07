/**
 * Malik Mir Hamza Nayab — Personal Academic/Engineering Portfolio
 * Vanilla JavaScript (No dependencies, zero-build)
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initActiveNavLink();
  initScrollReveal();
});

/**
 * Mobile Navigation Drawer Toggle & Accessibility
 */
function initMobileNav() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileNavDrawer');

  if (!menuBtn || !drawer) return;

  function toggleDrawer(open) {
    const shouldOpen = typeof open === 'boolean' ? open : !drawer.classList.contains('is-open');
    if (shouldOpen) {
      drawer.classList.add('is-open');
      menuBtn.setAttribute('aria-expanded', 'true');
    } else {
      drawer.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  }

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDrawer();
  });

  // Close when clicking anywhere outside drawer or on drawer links
  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('is-open') && !drawer.contains(e.target) && e.target !== menuBtn) {
      toggleDrawer(false);
    }
  });

  drawer.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => toggleDrawer(false));
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      toggleDrawer(false);
      menuBtn.focus();
    }
  });
}

/**
 * Synchronize Active Nav Link with Current URL
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.split('/').pop() || 'index.html';

    if (
      linkPath === currentPath ||
      (currentPath === '' && linkPath === 'index.html') ||
      (currentPath === 'index.html' && (href === './' || href === 'index.html'))
    ) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

/**
 * Subtle Scroll Reveal using IntersectionObserver
 */
function initScrollReveal() {
  // Check user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1,
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}
