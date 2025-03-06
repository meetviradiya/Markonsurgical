document.addEventListener('DOMContentLoaded', () => {
    // Cache DOM elements
    const hamburger = document.getElementById('hamburger');
    const navbarLinks = document.getElementById('navbar-links');
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close");
    const moreInfoButtons = document.querySelectorAll(".button-more-info");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll('.slide-in');
  
    // Toggle mobile menu
    if (hamburger && navbarLinks) {
      hamburger.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
      });
    }
  
    // Popup functions (used externally if needed)
    function openPopup(id) {
      const popup = document.getElementById(id);
      if (popup) popup.style.display = 'flex';
    }
  
    function closePopup(id) {
      const popup = document.getElementById(id);
      if (popup) popup.style.display = 'none';
    }
  
    // Combined window click event to close popups and modal
    window.addEventListener('click', (event) => {
      // If clicking outside popup content (popup elements have 'popup' class)
      if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
      }
      // If clicking outside modal content
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    // "More Info" buttons: update and show modal popup
    moreInfoButtons.forEach(button => {
      button.addEventListener("click", () => {
        const card = button.closest(".card");
        if (!card) return;
        const title = card.querySelector("h3")?.innerText || '';
        const description = card.querySelector("p")?.innerText || '';
        if (modalTitle) modalTitle.innerText = title;
        if (modalDescription) modalDescription.innerText = description;
        if (modal) modal.style.display = "block";
      });
    });
  
    // Close modal on close button click
    if (closeBtn && modal) {
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });
    }
  
    // Animate elements on scroll using IntersectionObserver
    const appearOptions = {
      threshold: 0.5,
      rootMargin: '0px 0px -100px 0px'
    };
  
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, appearOptions);
  
    faders.forEach(fader => appearOnScroll.observe(fader));
    sliders.forEach(slider => appearOnScroll.observe(slider));
  });
  