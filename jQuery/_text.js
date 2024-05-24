$(document).ready(function(){
	$("#btn").click(function(){
		alert("text:"+$("#lorem").text());
	});
	$("#btn2").click(function(){
		alert($('#lorem').html());
	});
});