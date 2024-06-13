$(document).ready(function(){
    $('.slide-character').slick({
        dots: true,
        infinite: true,
        
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1026,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 393,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots:true
                }
            }
        ]
    });
});
