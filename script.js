/* ================================
   Fim Saturn - JavaScript
   ================================ */

// === Mobile Menu Toggle ===
function toggleMobile() {
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileOverlay');
  menu.classList.toggle('open');
  overlay.classList.toggle('hidden');
}

// === FAQ Accordion ===
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const icon = btn.querySelector('.faq-icon');
  const isOpen = answer.classList.contains('open');

  // Close all FAQ items first
  document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-icon').forEach(i => (i.style.transform = 'rotate(0deg)'));

  // Open clicked item if it was closed
  if (!isOpen) {
    answer.classList.add('open');
    icon.style.transform = 'rotate(180deg)';
  }
}

// === Scroll Fade-In Animation (Intersection Observer) ===
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  }
);

document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

// === Navbar Border Glow on Scroll ===
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.borderBottomColor = 'rgba(0, 240, 255, 0.2)';
  } else {
    nav.style.borderBottomColor = 'rgba(0, 240, 255, 0.08)';
  }
});
