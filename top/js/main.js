$(function(){
    /**
     * header
     */
    // 1. 要素の位置を取得
    var workPosY0 = $('#headerArea').offset().top;
    var workPosY00 = $('#topArea').offset().top;
    // 2. スクロール位置取得
    $(window).on('scroll', function(){
        var dy = $(this).scrollTop();
        // console.log('dy' + dy);
    // 3. 条件文
    // console.log($(window).height());
    // 4. 対象要素にクラスの付与
    if(workPosY00 - $(window).height() < dy)
    {
        $('#scrollArea').css('opacity', '0');
    }
    else{
        $('#scrollArea').css('opacity', '1');
    }
    // if(workPosY00 - $(window).height() < dy)
    // {
    //     $('#headerArea > #titleArea00').removeClass('top-in');
    // }
    });
    /**
     * anoutArea
     */
    // 1. 要素の位置を取得
    var workPosY01 = $('#aboutBlock > #textArea01').offset().top;
    console.log('workPosY01:' + workPosY01);
    var workPosY02 = $('#productArea').offset().top;
    // 2. スクロール位置取得
    $(window).on('scroll', function(){
        var dy = $(this).scrollTop();
        // console.log('dy' + dy);
    // 3. 条件文
    // console.log($(window).height());
    // 4. 対象要素にクラスの付与
    if(workPosY01 - $(window).height() < dy)
    {
        // $('#aboutBlock').addClass('fade-in'),
        $('#titleArea01').addClass('top-in'),
        $('#moreArea01').addClass('left-in-more'),
        $('#textArea01').addClass('left-in-text'),
        $('#rightIn01').addClass('right-in-img'),
        $('#manuLine01').css('opacity','1');
    }
    else{
        // $('#aboutBlock').removeClass('fade-in'),
        $('#titleArea01').removeClass('top-in'),
        $('#moreArea01').removeClass('left-in-more'),
        $('#textArea01').removeClass('left-in-text'),
        $('#rightIn01').removeClass('right-in-img'),
        $('#manuLine01').css('opacity','0');
    }
    if(workPosY02 - $(window).height() < dy)
    {
        // $('#aboutBlock').removeClass('fade-in'),
        $('#titleArea01').removeClass('top-in'),
        $('#moreArea01').removeClass('left-in-more'),
        $('#textArea01').removeClass('left-in-text'),
        $('#rightIn01').removeClass('right-in-img'),
        $('#manuLine01').css('opacity','0');
    }
    });
    /**
     * productArea
     */
    // 1. 要素の位置を取得
    var workPosY02 = $('#productBlock > #textArea02').offset().top;
    console.log('workPosY02:' + workPosY02);
    var workPosY03 = $('#deliveryArea').offset().top;
    console.log('workPosY03:' + workPosY03);
    // 2. スクロール位置取得
    $(window).on('scroll', function(){
        var dy = $(this).scrollTop();
        // console.log('dy' + dy);
    // 3. 条件文
    // console.log($(window).height());
    // 4. 対象要素にクラスの付与
    if(workPosY02 - $(window).height() < dy)
    {
        $('#productArea > #titleArea02').addClass('top-in'),
        $('#moreArea02').addClass('left-in-more'),
        $('#productBlock > #textArea02').addClass('left-in-text'),
        $('#rightIn02').addClass('right-in-img'),
        $('#manuLine02').css('opacity','1');
    }
    else
    {
        $('#productArea > #titleArea02').removeClass('top-in'),
        $('#moreArea02').removeClass('left-in-more'),
        $('#productBlock > #textArea02').removeClass('left-in-text'),
        $('#rightIn02').removeClass('right-in-img'),
        $('#manuLine02').css('opacity','0');
    }
    if(workPosY03 - $(window).height() < dy)
    {
        $('#productArea > #titleArea02').removeClass('top-in'),
        $('#moreArea02').removeClass('left-in-more'),
        $('#productBlock > #textArea02').removeClass('left-in-text'),
        $('#rightIn02').removeClass('right-in-img'),
        $('#manuLine02').css('opacity','0');
    }
    });

    /**
     * deliveryArea
     */
    var workPosY03 = $('#deliveryBlock > #textArea03').offset().top;
    var workPosY04 = $('#articleArea').offset().top;
    console.log('workPosY04:' + workPosY04);

    // 2. スクロール位置取得
    $(window).on('scroll', function(){
        var dy = $(this).scrollTop();
        // console.log('dy' + dy);
    // 3. 条件文
    // console.log($(window).height());
    // 4. 対象要素にクラスの付与
    if(workPosY03 - $(window).height() < dy)
    {
        $('#deliveryArea > #titleArea03').addClass('top-in'),
        $('#moreArea03').addClass('left-in-more'),
        $('#deliveryBlock > #textArea03').addClass('left-in-text'),
        $('#rightIn03').addClass('right-in-img'),
        $('#manuLine03').css('opacity','1');
    }
    else
    {
        $('#deliveryArea > #titleArea03').removeClass('top-in'),
        $('#moreArea03').removeClass('left-in-more'),
        $('#deliveryBlock > #textArea03').removeClass('left-in-text'),
        $('#rightIn03').removeClass('right-in-img'),
        $('#manuLine03').css('opacity','0');
    }
    if(workPosY04 - $(window).height() < dy)
    {
        $('#deliveryArea > #titleArea03').removeClass('top-in'),
        $('#moreArea03').removeClass('left-in-more'),
        $('#deliveryBlock > #textArea03').removeClass('left-in-text'),
        $('#rightIn03').removeClass('right-in-img'),
        $('#manuLine03').css('opacity','0');
    }
    });

    /**
     * articleArea
     */
     var workPosY04 = $('#articleBox').offset().top;
 
     // 2. スクロール位置取得
     $(window).on('scroll', function(){
         var dy = $(this).scrollTop();
        //  console.log('dy' + dy);
     // 3. 条件文
     // console.log($(window).height());
     // 4. 対象要素にクラスの付与
     if(workPosY04 - $(window).height() < dy)
     {
         $('#articleArea > #titleArea04').addClass('top-in'),
         $('#moreArea04').addClass('left-in-more'),
         $('#articleBox').addClass('left-in-box'),
         $('#rightIn04').addClass('right-in-img'),
         $('#manuLine04').css('opacity','1');
     }
     else
     {
         $('#articleArea > #titleArea04').removeClass('top-in'),
         $('#moreArea04').removeClass('left-in-more'),
         $('#articleBox').removeClass('left-in-box'),
         $('#rightIn04').removeClass('right-in-img'),
         $('#manuLine04').css('opacity','0');
     }
     });

     /**
      * スクロール位置保存
      */
    $("#moreArea01, #moreArea02, #moreArea03, #moreArea04").click(function(){
        var scrollPos = $(document).scrollTop();
        localStorage.setItem('key',scrollPos);
    });
    $(document).ready(function(){
        var pos = localStorage.getItem('key');
        $('html,body').animate({ scrollTop: pos }, 'slow');
        localStorage.clear();
    });

    /**
     * ページ内リンク
     */
    // 目的のidの高さ取得
    var linkPosY = [
        $('#aboutArea').offset().top,
        $('#aboutArea').offset().top,
        $('#productArea').offset().top,
        $('#productArea').offset().top,
        $('#deliveryArea').offset().top,
        $('#deliveryArea').offset().top,
        $('#articleArea').offset().top,
        $('#articleArea').offset().top,
    ]



    $('#navList > li').on('click', function(){
        
        var index = $(this).index();
        // console.log(index + '番目をクリックしたよ');

        // console.log('高さ:' + linkPosY[index]);

        // 目的のidまで移動
        $('html').animate({
            scrollTop: linkPosY[index]
        }, 1000);

        // リンクの解除
        return false;
    });

});