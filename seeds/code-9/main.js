// LIGHTS ON OR OFF
const storedPreference = localStorage.getItem('modePreference');
const modeToggle = document.querySelector('.mode-toggle');
const html = document.documentElement;

// Toggle between dark and light mode
modeToggle.addEventListener('click', function () {
    if (html.classList.contains('dark-mode')) {
        html.classList.remove('dark-mode');
        html.classList.add('light-mode');
        localStorage.setItem('modePreference', 'light');
    } else {
        html.classList.remove('light-mode');
        html.classList.add('dark-mode');
        localStorage.setItem('modePreference', 'dark');
    }
});

// Apply the stored mode preference
if (storedPreference === 'dark') {
    html.classList.remove('light-mode');
    html.classList.add('dark-mode');
} else {
    html.classList.remove('dark-mode');
    html.classList.add('light-mode');
}