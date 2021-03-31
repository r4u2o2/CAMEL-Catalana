$(function(){
    /**
     * topArea
     */
    // 1. 要素の位置を取得
    var workPosY00 = $('#topArea').offset().top;
    var workPosY01 = $('#selectArea').offset().top;
    // 2. スクロール位置取得
    $(window).on('scroll', function(){
        var dy = $(this).scrollTop();
        console.log('dy' + dy);
    // 3. 条件文
    // console.log($(window).height());
    // 4. 対象要素にクラスの付与
    if(workPosY00 - $(window).height() < dy)
    {
        // $('#leftIn').addClass('left-in-box'),
        // $('#rightIn00').addClass('right-in-img'),
        $('#topArea > #titleArea00').addClass('top-in'),
        $('#topArea > #titleText00').addClass('top-in-text');
    }
    else{
        // $('#leftIn').removeClass('left-in-box'),
        // $('#rightIn00').removeClass('right-in-img'),
        $('#topArea > #titleArea00').removeClass('top-in'),
        $('#topArea > #titleText00').removeClass('top-in-text');
    }
    if(workPosY01 - $(window).height() < dy)
    {
        // $('#leftIn').removeClass('left-in-box'),
        // $('#rightIn00').removeClass('right-in-img'),
        $('#topArea > #titleArea00').removeClass('top-in'),
        $('#topArea > #titleText00').removeClass('top-in-text');
    }
    });


    /**
     * 画像切り替え（クリックイベント）
     */
    var subImage1Src = $('#subImage1').css('background-image');
    var subImage2Src = $('#subImage2').css('background-image');
    var subImage3Src = $('#subImage3').css('background-image');

    console.log('画像１：' + subImage1Src);
    console.log('画像２：' + subImage2Src);
    console.log('画像３：' + subImage3Src);

     $('#subImage1').on('click', function(){
         console.log('画像1クリックしたよ');
         $('#mainImage').css('background-image', subImage1Src);
     });
     $('#subImage2').on('click', function(){
         console.log('画像2クリックしたよ');
         $('#mainImage').css('background-image', subImage2Src);
     });
     $('#subImage3').on('click', function(){
         console.log('画像3クリックしたよ');
         $('#mainImage').css('background-image', subImage3Src);
     });

});