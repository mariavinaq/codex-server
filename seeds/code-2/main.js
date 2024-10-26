const floater = document.querySelector('.floater');

document.addEventListener('mousemove', function(event) {
    let mouseY = event.clientY;
    floater.style.top = mouseY + 'px';
});

window.addEventListener('beforeunload', function() {
    floater.style.top = 0;
});

window.onbeforeunload = function() {
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
};