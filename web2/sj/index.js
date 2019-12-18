$(document).ready(function(){
	$("#header").load("cni/header.html");
	$("#footer").load("cni/footer.html");
	
 });


$(function(){
	/* main_slider */
	$('.bxslider').bxSlider({
	  mode: 'horizontal',
	  speed : 1000,
	  auto : true,
	  autoControls: true,
	  controls : true
	});
	

	/* slick */
	$('.slick').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		responsive: [{
					breakpoint: 1280,
					 settings: {slidesToShow: 3, slidesToScroll: 3}
					   },
					   {
					   breakpoint: 1070,
					 settings: {slidesToShow: 1, slidesToScroll: 1}
					   }]
	});
	/*  
	infinite: true ,  맨끝이미지에서 끝나지 않고 다시 맨앞으로 이동 
	slidesToShow: 1,  화면에 보여질 이미지 갯수
	slidesToScroll: 1,   스크롤시 이동할 이미지 갯수 
	autoplay: true,  자동으로 다음이미지 보여주기 
	arrows: true,  화살표 
	dots:true,  아래점 
	autoplaySpeed:10000, 다음이미지로 넘어갈 시간 
	speed:1000 ,  다음이미지로 넘겨질때 걸리는 시간 
	pauseOnHover:true,  마우스 호버시 슬라이드 이동 멈춤 
	//vertical:true,/* 세로방향으로 슬라이드를 원하면 추가하기// 기본값 가로방향 슬라이드*
	responsive: [ 
		{  반응형웹 breakpoint: 960,  기준화면사이즈 
		settings: {slidesToShow:2 }  사이즈에 적용될 설정 
		},
		{  반응형웹 breakpoint: 768,  기준화면사이즈 
		settings: {slidesToShow:1 }  사이즈에 적용될 설정  
		} ] 
   */
});



