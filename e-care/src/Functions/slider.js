import * as $ from "jquery";

export const slider = () => {
    
$(document).ready(function () {
    $(".sections-carousel").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: `
    <button type="button" class="slick-prev d-inline-block align-middle">
      <svg width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.9907 3.98125L6.49489 14.5L16.9907 25.0187L13.7595 28.25L0.00947189 14.5L13.7595 0.75L16.9907 3.98125Z" fill="#002689"/>
      </svg>
    </button>`,
        nextArrow: `
    <button type="button" class="slick-next d-inline-block align-middle">
      <svg width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.00927734 25.0188L10.5051 14.5L0.00927734 3.98125L3.24053 0.75L16.9905 14.5L3.24053 28.25L0.00927734 25.0188Z" fill="#002689"/>
      </svg>
    </button>`,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 575.68,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
        ],
    });
});

}