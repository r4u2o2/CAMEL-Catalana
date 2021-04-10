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
     * product1Area
     */
    // 1. 要素の位置を取得
    var workPosY00 = $('#textArea01').offset().top;
    var workPosY01 = $('#product2Area').offset().top;
    console.log('text1:' + workPosY00);
    console.log('text2:' + workPosY01);
    // 2. スクロール位置取得
    $(window).on('scroll load', function(){
        var dy = $(this).scrollTop();
        // console.log('dy' + dy);
    // 3. 条件文
    // console.log($(window).height());
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
    });
    
    // /**
    //  * product2Area
    //  */
    // 1. 要素の位置を取得
    var workPosY01 = $('#product2Area').offset().top;
    var workPosY02 = $('#product3Area').offset().top;
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
    //  * product3Area
    //  */
    // 1. 要素の位置を取得
    var workPosY02 = $('#product3Area').offset().top;
    var workPosY03 = $('#howtoArea').offset().top;
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
    if(workPosY03 - $(window).height() < dy)
    {
        $('#textArea03').removeClass('left-in-text'),
        $('#rightIn03').removeClass('right-in-img'),
        $('#titleText03').removeClass('top-in-text'),
        $('#titleArea03').removeClass('top-in');
    }
    });

    // /**
    //  * product3Area
    //  */
    // 1. 要素の位置を取得
    var workPosY03 = $('#howtoArea').offset().top;
    // 2. スクロール位置取得
    $(window).on('scroll', function(){
        var dy = $(this).scrollTop();
        // console.log('dy' + dy);
    // 3. 条件文
    // console.log($(window).height());
    // 4. 対象要素にクラスの付与
    if(workPosY03 - $(window).height() < dy)
    {
        $('#textArea04').addClass('right-in-text'),
        $('#rightIn04').addClass('left-in-img'),
        $('#titleText04').addClass('top-in-text'),
        $('#titleArea04').addClass('top-in');
    }
    else{
        $('#textArea04').removeClass('right-in-text'),
        $('#rightIn04').removeClass('left-in-img'),
        $('#titleText04').removeClass('top-in-text'),
        $('#titleArea04').removeClass('top-in');
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