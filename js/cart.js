$(function(){
    $('#cart2').on('click', function(){
        $('#overlay').load('cart.html');
        $('#overlay').addClass('overlay');
    
        $('#overlay').on('click', function(){
            window.location.reload();
        });
    });
});