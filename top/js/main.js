$(function(){
    /**
     * anoutArea
     */
    // 1. 要素の位置を取得
    var workPosY01 = $('#aboutBlock > #textArea').offset().top;
    console.log('workPosY01:' + workPosY01);
    var workPosY02 = $('#productArea').offset().top;
    // 2. スクロール位置取得
    $(window).on('scroll', function(){
        var dy = $(this).scrollTop();
        console.log('dy' + dy);
    // 3. 条件文
    // console.log($(window).height());
    // 4. 対象要素にクラスの付与
    if(workPosY01 - $(window).height() < dy)
    {
        $('#aboutArea > #titleArea').addClass('top-in'),
        $('#aboutBlock > #moreArea').addClass('left-in-more'),
        $('#manuLine01').css('opacity','1');
    }
    else{
        $('#aboutArea > #titleArea').removeClass('top-in'),
        $('#aboutBlock > #moreArea').removeClass('left-in-more'),
        $('#manuLine01').css('opacity','0');
    }
    if(workPosY02 - $(window).height() < dy)
    {
        $('#aboutArea > #titleArea').removeClass('top-in'),
        $('#aboutBlock > #moreArea').removeClass('left-in-more'),
        $('#manuLine01').css('opacity','0');
    }
    });
    /**
     * productArea
     */
    // 1. 要素の位置を取得
    var workPosY02 = $('#productBlock > #textArea').offset().top;
    console.log('workPosY02:' + workPosY02);
    var workPosY03 = $('#deliveryArea').offset().top;
    console.log('workPosY03:' + workPosY03);
    // 2. スクロール位置取得
    $(window).on('scroll', function(){
        var dy = $(this).scrollTop();
        console.log('dy' + dy);
    // 3. 条件文
    // console.log($(window).height());
    // 4. 対象要素にクラスの付与
    if(workPosY02 - $(window).height() < dy)
    {
        $('#productArea > #titleArea').addClass('top-in'),
        $('#productBlock > #moreArea').addClass('left-in-more');
        $('#manuLine02').css('opacity','1');
    }
    else
    {
        $('#productArea > #titleArea').removeClass('top-in'),
        $('#productBlock > #moreArea').removeClass('left-in-more');
        $('#manuLine02').css('opacity','0');
    }
    if(workPosY03 - $(window).height() < dy)
    {
        $('#productArea > #titleArea').removeClass('top-in'),
        $('#productBlock > #moreArea').removeClass('left-in-more');
        $('#manuLine02').css('opacity','0');
    }
    });

    /**
     * deliveryArea
     */
    var workPosY03 = $('#deliveryBlock > #textArea').offset().top;
    var workPosY04 = $('#articleArea').offset().top;
    console.log('workPosY04:' + workPosY04);

    // 2. スクロール位置取得
    $(window).on('scroll', function(){
        var dy = $(this).scrollTop();
        console.log('dy' + dy);
    // 3. 条件文
    // console.log($(window).height());
    // 4. 対象要素にクラスの付与
    if(workPosY03 - $(window).height() < dy)
    {
        $('#deliveryArea > #titleArea').addClass('top-in'),
        $('#deliveryBlock > #moreArea').addClass('left-in-more');
        $('#manuLine03').css('opacity','1');
    }
    else
    {
        $('#deliveryArea > #titleArea').removeClass('top-in'),
        $('#deliveryBlock > #moreArea').removeClass('left-in-more');
        $('#manuLine03').css('opacity','0');
    }
    if(workPosY04 - $(window).height() < dy)
    {
        $('#productArea > #titleArea').removeClass('top-in'),
        $('#deliveryBlock > #moreArea').removeClass('left-in-more');
        $('#manuLine03').css('opacity','0');
    }
    });

    /**
     * articleArea
     */
     var workPosY04 = $('#articleBlock').offset().top;
 
     // 2. スクロール位置取得
     $(window).on('scroll', function(){
         var dy = $(this).scrollTop();
         console.log('dy' + dy);
     // 3. 条件文
     // console.log($(window).height());
     // 4. 対象要素にクラスの付与
     if(workPosY04 - $(window).height() < dy)
     {
         $('#articleArea > #titleArea').addClass('top-in'),
         $('#articleBlock > #moreArea').addClass('left-in-more');
         $('#manuLine04').css('opacity','1');
     }
     else
     {
         $('#articleArea > #titleArea').removeClass('top-in'),
         $('#articleBlock > #moreArea').removeClass('left-in-more');
         $('#manuLine04').css('opacity','0');
     }
     });

});