// Select the navbar by its ID
const navbar = document.getElementById('nav');

// Add an event listener for the window's scroll event
window.addEventListener('scroll', function () {
    // Check if the scroll position is greater than or equal to 694px
    if (window.scrollY >= 690) {
        // Add the class that changes the background color
        navbar.style.backgroundColor = '#1A1A1A';
    } else {
        // Restore the initial transparent background color
        navbar.style.backgroundColor = 'transparent';
    }
});
