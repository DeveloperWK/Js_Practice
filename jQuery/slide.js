$(document).ready(function(){
	$(".btn_01").click(function(){
		$(".lorem_01").slideDown(1000);

	});
	$(".btn_02").click(function(){
		$(".lorem_02").slideUp(1000);
	});
	$('.btn_03').click(function(){
		$('.lorem_03').slideToggle(1000);
	})
});