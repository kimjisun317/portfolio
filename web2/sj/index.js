$(document).ready(function(){
	$("#header").load("cni/header.html");
	$("#footer").load("cni/footer.html");
	
 });

/* main_slider */
$(function(){
	$('.bxslider').bxSlider({
	  mode: 'horizontal',
	  speed : 1000,
	  auto : true,
	  autoControls: true,
	  controls : true
	});
});

/* layer_campaign */
function layer_View(status){
	eval('$("#layer_View_box").' + status + '();');
	/* campaign_slider */
	var swiper = new Swiper('.campaign_swiper', { 
	slidesPerView: 1,
	spaceBetween: 3,
	initialSlide: 0,
	direction: "horizontal",
	loop : true,
	autoplay: false, /* {delay: 2500, disableOnInteraction: false, } */
	pagination: {el: '.swiper-pagination', clickable: true},
	navigation: {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'},
	roundLengths: true,
	breakpointsInverse: true, 
	breakpoints: {650: {slidesPerView: 3, spaceBetween: 0, slidesPerGroup: 3}}
	});
};

/* media_slider */
$(function(){
var swiper = new Swiper('.media_swiper', { 
	slidesPerView: 1,
	spaceBetween: 3,
	initialSlide: 0,
	direction: "horizontal",
	loop : true,
	autoplay: false, /* {delay: 2500, disableOnInteraction: false, } */
	pagination: {el: '.swiper-pagination', clickable: true},
	navigation: {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'},
	roundLengths: true,
	breakpointsInverse: true, 
	breakpoints: {650: {slidesPerView: 4, spaceBetween: 0, slidesPerGroup: 4}}
});
});



