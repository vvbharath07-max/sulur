// script.js

document.addEventListener('DOMContentLoaded', () => {
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the item is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a class that triggers the CSS animation
                entry.target.classList.add('is-visible');
                // Stop observing once it's visible to prevent re-triggering
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateOnScrollElements.forEach(element => {
        observer.observe(element);
    });

    // Add specific animation classes for initial load or manual trigger if needed
    // The classes like fade-in, slide-up etc. will be added dynamically by the observer
    // but the transition property in CSS handles the initial state to visible state.
    // For elements that should animate immediately (e.g., hero content),
    // you might still use direct animation classes without `animate-on-scroll`
    // or set `threshold: 0` and position them to be immediately intersecting.

    // Example for header nav items (already animated in HTML, but demonstrating)
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link, index) => {
        link.style.animationDelay = `${index * 0.1}s`;
    });

    // For elements with a delay, ensure they have the `animate-on-scroll` and specific animation class
    // For instance, the button in the hero section:
    const heroButton = document.querySelector('#home .primary-button');
    if (heroButton) {
        heroButton.classList.add('pop-in'); // Add the specific animation type
    }
});
