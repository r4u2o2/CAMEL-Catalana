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
     * モーダル
     */
    //  1. 画像パスの配列準備
    var imageSrcArray = [
        'img/shop01.png',
        'img/shop02.png',
        'img/shop03.png',
    ]
    // // 2. #workBlock sectionクリック時
    // $('#workBlock > section').on('click', function(){
    //     // console.log('workblockクリックしたよ');
    //     // 3. sectionの何番目を押したか判定
    //     var index = $(this).index();
    //     console.log('sectionの番号：' + index);
    //     // 4. modalに入るHTML作成, 変数var modalContentに代入
    //     // 5. #overlayの中のHTMLを書き換え、.fade-inを追加

    //     var modalContent = '<figure class="modal"><img src="' + imageSrcArray[index] + '" alt=""></figure>';

    //     // $('#overlay').html('<figure class="modal"><img src="' + imageSrcArray[index] + '" alt=""></figure>');

    //     $('#overlay').html(modalContent).addClass('fade-in');

    //     // $('#overlay').html('<img src="' + imageSrcArray[index] + '"></img>'), $('#overlay').addClass('fade-in');
        
    //     // 6. #overlayを再度クリックした時、.fade-inを削除
    //     $('#overlay').on('click', function(){
    //         console.log('再度クリックしたよ');
    //         $('#overlay').removeClass('fade-in');
    //     });
    // });
    
});