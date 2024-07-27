// Function to toggle light/dark mode
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-toggle');

    // Toggle dark-mode class on the body
    body.classList.toggle('dark-mode');

    // Update theme icon based on current mode
    if (body.classList.contains('dark-mode')) {
        themeIcon.textContent = '🌞'; // Sun icon for light mode
        localStorage.setItem('theme', 'dark'); // Save the preference in localStorage
    } else {
        themeIcon.textContent = '🌙'; // Moon icon for dark mode
        localStorage.setItem('theme', 'light'); // Save the preference in localStorage
    }
}

// Add event listener to the theme toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Load theme preference from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').textContent = '🌞';
    } else {
        document.getElementById('theme-toggle').textContent = '🌙';
    }
});

// Function to toggle mobile menu
function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
}

// Add event listener to the mobile menu button
document.querySelector('.mobile-menu-btn').addEventListener('click', toggleMobileMenu);
