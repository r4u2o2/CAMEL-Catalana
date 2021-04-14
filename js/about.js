$(function(){
    /**
     * ハンバーガーメニュー
     */
     $('#manuButton').on('click', function(){
        console.log('menuクリック');
        $('#manuButton').toggleClass('active');
        $('#nav').toggleClass('active');
   });
    /**
     * conceptArea
     */
    // 1. 要素の位置を取得
    var workPosY00 = $('#textArea01').offset().top;
    var workPosY01 = $('#reasonArea').offset().top;
    var workPosY02 = $('#packageArea').offset().top;
    // 2. スクロール位置取得
    $(window).on('scroll load', function(){
        var dy = $(this).scrollTop();

        // 4. 対象要素にクラスの付与
    $('#textArea01').addClass('left-in-text'),
    $('#rightIn01').addClass('right-in-img'),
    $('#titleText01').addClass('top-in-text'),
    $('#titleArea01').addClass('top-in');
    
    if(workPosY00 > dy)
    {
        $('#textArea01').addClass('left-in-text'),
        $('#rightIn01').addClass('right-in-img'),
        $('#titleText01').addClass('top-in-text'),
        $('#titleArea01').addClass('top-in');
    }
    else
    {
        $('#textArea01').removeClass('left-in-text'),
        $('#rightIn01').removeClass('right-in-img'),
        $('#titleText01').removeClass('top-in-text'),
        $('#titleArea01').removeClass('top-in');
    }

    if(workPosY01 - $(window).height() < dy)
    {
        $('#textArea02').addClass('right-in-text'),
        $('#rightIn02').addClass('left-in-img'),
        $('#titleText02').addClass('top-in-text'),
        $('#titleArea02').addClass('top-in');
    }
    else{
        $('#textArea02').removeClass('right-in-text'),
        $('#rightIn02').removeClass('left-in-img'),
        $('#titleText02').removeClass('top-in-text'),
        $('#titleArea02').removeClass('top-in');
    }
    if(workPosY02 - $(window).height() < dy)
    {
        $('#textArea02').removeClass('right-in-text'),
        $('#rightIn02').removeClass('left-in-img'),
        $('#titleText02').removeClass('top-in-text'),
        $('#titleArea02').removeClass('top-in');
    }



    if(workPosY02 - $(window).height() < dy)
    {
        $('#textArea03').addClass('left-in-text'),
        $('#rightIn03').addClass('right-in-img'),
        $('#moreArea03').addClass('left-in-more'),
        $('#titleText03').addClass('top-in-text'),
        $('#titleArea03').addClass('top-in');
    }
    else{
        $('#textArea03').removeClass('left-in-text'),
        $('#rightIn03').removeClass('right-in-img'),
        $('#moreArea03').removeClass('left-in-more'),
        $('#titleText03').removeClass('top-in-text'),
        $('#titleArea03').removeClass('top-in');
    }

    });
    


});