$(document).ready(function () {
	$('.lorem_1').dblclick(function () {
		$(this).hide();
	});
	$('.lorem_2').mouseenter(function () {
		alert('Hello');
	});
	$('.lorem_3').mouseleave(function () {
		alert('by');
	});
	$('.lorem_4').hover(function () {
		alert('Hey Mister');
		
	});
	$('.lorem_5 input').focus(function () {
		$(this).css({ "background-color": "red"});
	});
	$('.lorem_6').on({
		mouseenter: function () {
			$(this).css('background-color', 'red');
		},
		mouseleave: function () {
			$(this).css('background-color', 'gray');
			
		},
		click: function () {
			$(this).css('background-color', 'green');
		},
		dblclick: function () {
			$(this).css('background-color', 'yellow');
		}

	
	
	});

});