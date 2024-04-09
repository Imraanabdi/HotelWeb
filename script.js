document.addEventListener('DOMContentLoaded', function () {
    const sr = ScrollReveal({
        distance: '65px',
        duration: 2600,
        delay: 450,
        origin: 'top',
        reset: true,
    });

    sr.reveal('.hero-text', { delay: 200, origin: 'top' });
});
