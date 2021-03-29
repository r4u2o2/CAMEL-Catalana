$(function(){
    /**
     * anoutArea
     */
    // 1. 要素の位置を取得
    var workPosY = $('#aboutArea').offset().top;
    console.log('workPosY' + workPosY);
    // 2. スクロール位置取得
    $(window).on('scroll', function(){
        var dy = $(this).scrollTop();
        console.log('dy' + dy);
    // 3. 条件文
    // console.log($(window).height());
    // 4. 対象要素にクラスの付与
    if(workPosY - $(window).height() < dy)
    {
        $('#aboutArea > #titleArea').addClass('top-in'),
        $('#aboutBlock > #moreArea').addClass('left-in');
    }
    });
    /**
     * productArea
     */
    // 1. 要素の位置を取得
    var workPosY = $('#productArea').offset().top;
    console.log('workPosY' + workPosY);
    // 2. スクロール位置取得
    $(window).on('scroll', function(){
        var dy = $(this).scrollTop();
        console.log('dy' + dy);
    // 3. 条件文
    // console.log($(window).height());
    // 4. 対象要素にクラスの付与
    if(workPosY - $(window).height() < dy)
    {
        $('#productArea > #titleArea').addClass('top-in'),
        $('#productBlock > #moreArea').addClass('left-in');
    }
    });
});