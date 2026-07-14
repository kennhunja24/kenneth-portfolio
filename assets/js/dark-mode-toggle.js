// Dark Mode Toggle Logic
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');  // The button or switch to toggle dark mode
    const body = document.body;

    // Check for saved theme preference in localStorage and apply it
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        darkModeToggle.classList.add('active');
    } else {
        body.classList.remove('dark-mode');
        darkModeToggle.classList.remove('active');
    }

    // Event listener for toggling the theme
    darkModeToggle.addEventListener('click', function () {
        // Toggle dark mode on the body
        body.classList.toggle('dark-mode');
        
        // Toggle active state on the button (optional visual change)
        darkModeToggle.classList.toggle('active');
        
        // Save the user's theme preference to localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});
