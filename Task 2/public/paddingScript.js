window.addEventListener('load', function() {
    const navbar = document.querySelector('.navbar');
    const body = document.body;

    body.style.paddingTop = navbar.clientHeight + 'px';

    scrollTarget.style.paddingTop= navbar.clientHeight + 'px';

    window.addEventListener('resize', function() {
        body.style.paddingTop = navbar.clientHeight + 'px';
    });
});