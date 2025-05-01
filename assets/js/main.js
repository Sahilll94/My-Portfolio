// Mobile menu toggle functionality - Complete rewrite
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav__link');
  
  // Toggle menu visibility when hamburger icon is clicked
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('show');
      document.body.classList.toggle('menu-open');
      
      // Toggle aria-expanded for accessibility
      const isExpanded = navMenu.classList.contains('show');
      navToggle.setAttribute('aria-expanded', isExpanded);
    });
  }
  
  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('show');
      document.body.classList.remove('menu-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnToggle = navToggle.contains(event.target);
    
    if (navMenu.classList.contains('show') && !isClickInsideMenu && !isClickOnToggle) {
      navMenu.classList.remove('show');
      document.body.classList.remove('menu-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
  
  // Add proper ARIA attributes for accessibility
  navToggle.setAttribute('aria-controls', 'nav-menu');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Toggle navigation menu');
});

// Hamburger menu and mobile footer navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const mobileFooterNav = document.getElementById('mobile-footer-nav');
  
  // Show/hide mobile footer navigation when hamburger is clicked
  if (navToggle && mobileFooterNav) {
    // Initially show the mobile footer navigation - just in case it's hidden by CSS
    mobileFooterNav.style.display = 'block';
    
    navToggle.addEventListener('click', function() {
      // Toggle hamburger animation
      this.classList.toggle('active');
      
      // Toggle mobile footer navigation
      if (mobileFooterNav.classList.contains('show')) {
        mobileFooterNav.classList.remove('show');
        setTimeout(() => {
          mobileFooterNav.style.transform = 'translateY(100%)';
        }, 10);
      } else {
        mobileFooterNav.classList.add('show');
        mobileFooterNav.style.transform = 'translateY(0)';
      }
    });
    
    // Close mobile footer navigation when clicking a link
    const mobileFooterLinks = mobileFooterNav.querySelectorAll('a');
    mobileFooterLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileFooterNav.classList.remove('show');
        navToggle.classList.remove('active');
        setTimeout(() => {
          mobileFooterNav.style.transform = 'translateY(100%)';
        }, 10);
      });
    });
  }
});

// Keep existing ScrollReveal and Typed.js initializations

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    const navMenuLink = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]"
    );
    if (navMenuLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navMenuLink.classList.add("active");
      } else {
        navMenuLink.classList.remove("active");
      }
    }
  });
}
window.addEventListener("scroll", scrollActive);

var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 30,
  backSpeed: 30,
  loop: true,
});

var typed = new Typed("#type", {
  stringsElement: "#typed-string",
  typeSpeed: 30,
  backSpeed: 30,
  loop: true,
});

var typed = new Typed("#types", {
  stringsElement: "#type-string",
  typeSpeed: 30,
  backSpeed: 30,
  loop: true,
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  // reset: true
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });
