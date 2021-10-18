document.addEventListener('DOMContentLoaded', () => {
    $('.slick-slider-one').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
});