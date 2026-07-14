// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved theme preference in localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

// Event listener to toggle dark mode
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save the user's theme preference to localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Navbar Toggle
const navbarToggle = document.getElementById('navbar-toggle');
const navbarCollapse = document.getElementById('navbar-collapse');

// Toggle the mobile navigation menu
navbarToggle.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
});

// Close the mobile menu when a link is clicked
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {  // Ensure the menu only closes on small screens
            navbarCollapse.classList.remove('show');
        }
    });
});

// Sticky Navbar on Scroll
const navbar = document.querySelector('.navbar');
const stickyOffset = navbar.offsetTop;

window.onscroll = function () {
    if (window.pageYOffset > stickyOffset) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};

// Testimonials Carousel (Example, modify according to your carousel library)
const testimonials = document.querySelectorAll('.testimonial-item');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, idx) => {
        if (idx === index) {
            testimonial.classList.add('active');
        } else {
            testimonial.classList.remove('active');
        }
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Auto cycle testimonials every 5 seconds (optional)
setInterval(nextTestimonial, 5000);

// Initialize first testimonial
showTestimonial(currentTestimonial);

// Handle form submission (Example: for contact form)
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        
        // You can add form submission logic here, e.g., using fetch or AJAX
        console.log('Form submitted:', formData);
        
        // Reset form after submission
        contactForm.reset();
        
        // Display success message (optional)
        alert('Thank you for your message!');
    });
}
