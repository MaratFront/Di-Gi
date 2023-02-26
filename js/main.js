$(function(){
    $('.top_slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:'<a href="#" class="slick-arrow slick-next"><img src="images/forward.svg"></a>',
        prevArrow:'<a href="#" class="slick-arrow slick-prev"><img src="images/back.svg"></a>',

        responsive: [
            {
                breakpoint: 640,
                settings: {
                    arrows: false
                }
            },

            {
                breakpoint: 320,
                settings: {
                    arrows:false
                }
            }

        ]
    });
});
