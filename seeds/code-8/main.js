window.addEventListener('scroll', function() {
    const down = document.querySelector('.down');
    const nav = document.querySelector('nav');
    const offset = down.offsetHeight + down.offsetTop;

    if (window.pageYOffset > offset) {
        nav.style.transform = 'translateX(0)';
        nav.style.opacity = 1;
    } else {
        nav.style.transform = 'translateX(200%)';
        nav.style.opacity = 0.5;
    }
});