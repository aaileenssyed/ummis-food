// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Add active class to navigation based on scroll position
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.navbar-nav a[href="#${sectionId}"]`);

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.classList.remove('active');
      });
      if (navLink) {
        navLink.classList.add('active');
      }
    }
  });
});
