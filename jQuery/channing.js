$(document).ready(function () {
    // Channing 
    $('.btn').click(function () {
        $('.lorem').css({ 'background': 'red' })
            .slideUp(1000)
            .slideDown(1000);   
    });
    // Call Back 
    $('.btn1').click(function () {
        $('.lorem1').hide(function () {
            alert('Hello User');
        });
    });
    
});