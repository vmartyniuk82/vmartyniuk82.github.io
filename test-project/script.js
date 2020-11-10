$('.single-slide').slick({
    infinite: true,
    prevArrow: "<img src='images/arr-left.svg' class='prev' alt='1'>",
    nextArrow: "<img src='images/arr-right.svg' class='next' alt='2'>",
});
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    // vertical: true,
    nextArrow: "<img src='images/arr-right.svg' class='next' alt='2'>",
});

var x = document.querySelector('#xxxx1')
x.style.width = '88%';
var y = document.querySelector('#yyyy1')
y.innerHTML = x.style.width;