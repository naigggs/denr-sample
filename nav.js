window.addEventListener('scroll', function () {
    var navbar2 = document.getElementById('navbar-2');
    var carouselHeight = document.querySelector('.slideshow-container').offsetHeight;

    if (window.pageYOffset > carouselHeight) {
        navbar2.classList.add('fixed'); // Add 'fixed' class
    } else {
        navbar2.classList.remove('fixed'); // Remove 'fixed' class
    }
});