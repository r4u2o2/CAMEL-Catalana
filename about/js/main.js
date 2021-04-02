$(function(){
    /**
     * conceptArea
     */
    // 1. 要素の位置を取得
    var workPosY00 = $('#textArea01').offset().top;
    var workPosY01 = $('#textArea02').offset().top;
    console.log('text1:' + workPosY00);
    console.log('text2:' + workPosY01);
    // 2. スクロール位置取得
    $(window).on('scroll', function(){
        var dy = $(this).scrollTop();
        console.log('dy' + dy);
    // 3. 条件文
    // console.log($(window).height());
    // 4. 対象要素にクラスの付与
    
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
    });
    // /**
    //  * reasonArea
    //  */
    // 1. 要素の位置を取得
    var workPosY01 = $('#textArea02').offset().top;
    var workPosY02 = $('#textArea03').offset().top;
    // 2. スクロール位置取得
    $(window).on('scroll', function(){
        var dy = $(this).scrollTop();
        // console.log('dy' + dy);
    // 3. 条件文
    // console.log($(window).height());
    // 4. 対象要素にクラスの付与
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
    });
    
    // /**
    //  * packageArea
    //  */
    // 1. 要素の位置を取得
    var workPosY02 = $('#textArea03').offset().top;
    // 2. スクロール位置取得
    $(window).on('scroll', function(){
        var dy = $(this).scrollTop();
        // console.log('dy' + dy);
    // 3. 条件文
    // console.log($(window).height());
    // 4. 対象要素にクラスの付与
    if(workPosY02 - $(window).height() < dy)
    {
        $('#textArea03').addClass('left-in-text'),
        $('#rightIn03').addClass('right-in-img'),
        $('#titleText03').addClass('top-in-text'),
        $('#titleArea03').addClass('top-in');
    }
    else{
        $('#textArea03').removeClass('left-in-text'),
        $('#rightIn03').removeClass('right-in-img'),
        $('#titleText03').removeClass('top-in-text'),
        $('#titleArea03').removeClass('top-in');
    }
    });
    // // 1. 要素の位置を取得
    // var workPosY02 = $('#productBlock > #textArea02').offset().top;
    // console.log('workPosY02:' + workPosY02);
    // var workPosY03 = $('#deliveryArea').offset().top;
    // console.log('workPosY03:' + workPosY03);
    // // 2. スクロール位置取得
    // $(window).on('scroll', function(){
    //     var dy = $(this).scrollTop();
    //     // console.log('dy' + dy);
    // // 3. 条件文
    // // console.log($(window).height());
    // // 4. 対象要素にクラスの付与
    // if(workPosY02 - $(window).height() < dy)
    // {
    //     $('#productArea > #titleArea02').addClass('top-in'),
    //     $('#moreArea02').addClass('left-in-more'),
    //     $('#productBlock > #textArea02').addClass('left-in-text'),
    //     $('#rightIn02').addClass('right-in-img'),
    //     $('#manuLine02').css('opacity','1');
    // }
    // else
    // {
    //     $('#productArea > #titleArea02').removeClass('top-in'),
    //     $('#moreArea02').removeClass('left-in-more'),
    //     $('#productBlock > #textArea02').removeClass('left-in-text'),
    //     $('#rightIn02').removeClass('right-in-img'),
    //     $('#manuLine02').css('opacity','0');
    // }
    // if(workPosY03 - $(window).height() < dy)
    // {
    //     $('#productArea > #titleArea02').removeClass('top-in'),
    //     $('#moreArea02').removeClass('left-in-more'),
    //     $('#productBlock > #textArea02').removeClass('left-in-text'),
    //     $('#rightIn02').removeClass('right-in-img'),
    //     $('#manuLine02').css('opacity','0');
    // }
    // });



});