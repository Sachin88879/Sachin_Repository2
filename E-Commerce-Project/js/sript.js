// Owlcarousel
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        center: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1200: {
            items: 3,
            nav: true,
            loop: false
        }, 1600: {
            items: 4,
            nav: true,
            loop: false
        }, 1900: {
            items:5 ,
            nav: true,
            loop: false
        }
    });
});