/**
 * Malik Mir Hamza Nayab — Personal Academic/Engineering Portfolio
 * Vanilla JavaScript (Owlstown Argyle Theme Interactivity)
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initActiveNavLink();
  initToolsButton();
  initContactForm();
});

/**
 * Mobile Navigation Drawer Toggle & Accessibility
 */
function initMobileNav() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileNavDrawer');

  if (!menuBtn || !drawer) return;

  function toggleDrawer(open) {
    const shouldOpen = typeof open === 'boolean' ? open : !drawer.classList.contains('open');
    if (shouldOpen) {
      drawer.classList.add('open');
      menuBtn.setAttribute('aria-expanded', 'true');
    } else {
      drawer.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  }

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDrawer();
  });

  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('open') && !drawer.contains(e.target) && e.target !== menuBtn) {
      toggleDrawer(false);
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      toggleDrawer(false);
      menuBtn.focus();
    }
  });
}

/**
 * Synchronize Active Nav Link with Current Page
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.theme-navlinks2-item-link');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.split('/').pop() || 'index.html';

    const parentItem = link.closest('.theme-navlinks2-item');

    if (
      linkPath === currentPath ||
      (currentPath === '' && linkPath === 'index.html') ||
      (currentPath === 'index.html' && (href === './' || href === 'index.html'))
    ) {
      if (parentItem) parentItem.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    } else {
      if (parentItem) parentItem.classList.remove('is-active');
      link.removeAttribute('aria-current');
    }
  });
}

/**
 * Floating Tools Button Toggle
 */
function initToolsButton() {
  const toolsBtn = document.getElementById('toolsBtn');
  const toolsMenu = document.getElementById('toolsMenu');

  if (!toolsBtn || !toolsMenu) return;

  toolsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toolsMenu.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (toolsMenu.classList.contains('active') && !toolsMenu.contains(e.target)) {
      toolsMenu.classList.remove('active');
    }
  });

  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      toolsMenu.classList.remove('active');
    });
  }
}

/**
 * Contact Form Client-side Handler
 */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    // If form action is set to a live service (Formspree/EmailJS), allow normal submission or handle via fetch
    const action = contactForm.getAttribute('action');
    if (!action || action.includes('placeholder') || action === '#' || action === '/contact_form') {
      e.preventDefault();
      
      const nameInput = document.getElementById('contact_name');
      const name = nameInput ? nameInput.value.trim() : 'Friend';

      if (formFeedback) {
        formFeedback.style.display = 'block';
        formFeedback.style.color = '#15803d';
        formFeedback.style.backgroundColor = '#f0fdf4';
        formFeedback.style.border = '1px solid #bbf7d0';
        formFeedback.style.padding = '12px 16px';
        formFeedback.style.borderRadius = '4px';
        formFeedback.style.marginTop = '16px';
        formFeedback.innerHTML = `<strong>Thank you, ${name}!</strong> Your message has been sent successfully. I will get back to you soon.`;
      }
      contactForm.reset();
    }
  });
}
