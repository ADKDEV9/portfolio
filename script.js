// Add smooth scrolling to all links
$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,
        once: true,
    });
    // GSAP Animations
    gsap.from('.navbar', {duration: 1.5, y: '-100%', ease: 'bounce'});
    gsap.from('.header .text-center', {duration: 2, opacity: 0, delay: 0.5, y: -50});
});
