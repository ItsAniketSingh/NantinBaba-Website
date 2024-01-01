// Show or hide the back-to-top button based on the scroll position
window.addEventListener('scroll', function () {
    var backToTopButton = document.querySelector('.back-to-top');
    if (window.pageYOffset > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll back to the top of the page when the back-to-top button is clicked
document.querySelector('.back-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});