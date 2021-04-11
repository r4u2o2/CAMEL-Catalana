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
    console.log('text1:' + workPosY00);
    // 2. スクロール位置取得
    $(window).on('scroll load', function(){
        var dy = $(this).scrollTop();
        // console.log('dy' + dy);
    // 3. 条件文
    // console.log($(window).height());
    // 4. 対象要素にクラスの付与
    $('#titleText01').addClass('top-in-text'),
        $('#titleArea01').addClass('top-in');
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