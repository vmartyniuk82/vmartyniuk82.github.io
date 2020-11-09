$('.single-slide').slick({
    infinite: true,
    prevArrow: "<img src='images/arr-left.svg' class='prev' alt='1'>",
    nextArrow: "<img src='images/arr-right.svg' class='next' alt='2'>",
});
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: "<img src='images/arr-right.svg' class='next' alt='2'>",
});