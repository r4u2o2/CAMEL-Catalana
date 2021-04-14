$(function(){
    /**
     * ハンバーガーメニュー
     */
     $('#manuButton').on('click', function(){
        console.log('menuクリック');
        $('#manuButton').toggleClass('active');
        $('#nav').toggleClass('active');
   });
    // 1. 要素の位置を取得
    var workPosY00 = $('#articleBox').offset().top;
    // 2. スクロール位置取得
    $(window).on('scroll load', function(){
        console.log('ロード');
        var dy = $(this).scrollTop();


    // 4. 対象要素にクラスの付与
    setTimeout(function(){
        $('#titleText01').addClass('top-in-text');
    $('#titleArea01').addClass('top-in');
   },1000);
    

    if(workPosY00 > dy)
    {
        $('#titleText01').addClass('top-in-text'),
        $('#titleArea01').addClass('top-in');
    }
    else
    {
        $('#titleText01').removeClass('top-in-text'),
        $('#titleArea01').removeClass('top-in');
    }
    });


});