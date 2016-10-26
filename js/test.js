$(document).ready(function(){
  $('.hero-slick').slick({
    autoplay: true,
    arrows: false,
    fade: true,
    speed: 1000,
  });
  $('.sponsor-slick').slick({
  	infinite: true,
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	autoplay: true,
  	arrows: false,
  	speed: 900,
  });
});