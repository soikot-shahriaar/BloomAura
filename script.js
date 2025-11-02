document.addEventListener('DOMContentLoaded', function() {
  // Newsletter form validation
  const newsletterForm = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('newsletter-email');
  const errorMessage = document.getElementById('newsletter-error');
  const successMessage = document.getElementById('newsletter-success');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailPattern.test(emailInput.value);
      
      if (!isValidEmail) {
        errorMessage.classList.remove('d-none');
        successMessage.classList.add('d-none');
        emailInput.classList.add('is-invalid');
        emailInput.classList.remove('is-valid');
      } else {
        errorMessage.classList.add('d-none');
        successMessage.classList.remove('d-none');
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
        emailInput.value = '';
        
        // Reset success message after 3 seconds
        setTimeout(() => {
          successMessage.classList.add('d-none');
          emailInput.classList.remove('is-valid');
        }, 3000);
      }
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') !== '#') {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Add animation class to elements when they come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.card, .topic-card, .newsletter-box, .reading-list-item');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('visible');
      }
    });
  };

  // Run once on page load
  animateOnScroll();
  
  // Run on scroll
  window.addEventListener('scroll', animateOnScroll);

  // Logo hover effect
  const logoText = document.querySelector('.logo-text');
  if (logoText) {
    logoText.addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.05)';
      this.style.transition = 'transform 0.3s ease';
    });
    
    logoText.addEventListener('mouseout', function() {
      this.style.transform = 'scale(1)';
    });
  }
}); 