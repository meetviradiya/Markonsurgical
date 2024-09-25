// Get DOM elements
const hamburger = document.getElementById('hamburger');
const navbarLinks = document.getElementById('navbar-links');
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
const moreInfoButtons = document.querySelectorAll(".button-more-info");
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Open popup
function openPopup(id) {
    document.getElementById(id).style.display = 'flex';
}

// Close popup
function closePopup(id) {
    document.getElementById(id).style.display = 'none';
}

// Close popups when clicking outside of the popup content
window.onclick = (event) => {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
    }
};

// Add event listeners to "More Info" buttons
moreInfoButtons.forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".card");
        const title = card.querySelector("h3").innerText;
        const description = card.querySelector("p").innerText;

        // Update modal content
        document.getElementById("modal-title").innerText = title;
        document.getElementById("modal-description").innerText = description;

        // Show the modal
        modal.style.display = "block";
    });
});

// Close modal functionality
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Animate elements on scroll
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
