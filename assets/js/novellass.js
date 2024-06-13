$(document).ready(function () {
    $(".slide-novellas").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1026,
          settings: {
            slidesToShow: 3,  // Thay đổi số slide hiện thị
            slidesToScroll: 3, // Thay đổi số slide cuộn
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            infinite: true,
          },
        },
        {
          breakpoint: 393,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    });
  });
  