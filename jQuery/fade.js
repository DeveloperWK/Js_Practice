$(document).ready(function() {
	$('.btn').click(function(){
		$('.box1').fadeIn(5000);
	});
	$(".btn").click(function(){
		$(".box2").fadeToggle(2000);
	});
	$(".btn").click(function(){
		$(".box3").fadeOut(2000);
	});
	$(".btn").click(function(){
		$(".box4").fadeTo('slow',0.5);
	});
	

});