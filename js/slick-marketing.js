$(function(){
    $('.marketing__slick').slick({
        dots: true,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    arrows: false
                }
            },

            {
                breakpoint: 1440,
                settings: {
                    arrows:false
                }
            }

        ]
    });
});
