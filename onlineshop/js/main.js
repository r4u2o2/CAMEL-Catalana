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


     /**
     * カレンダー
     */
    const weeks = ['日', '月', '火', '水', '木', '金', '土']
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const startDate = new Date(year, month - 1, 1) // 月の最初の日を取得
    const endDate = new Date(year, month,  0) // 月の最後の日を取得
    const endDayCount = endDate.getDate() // 月の末日
    const startDay = startDate.getDay() // 月の最初の日の曜日を取得
    let dayCount = 1 // 日にちのカウント
    let calendarHtml = '' // HTMLを組み立てる変数

    calendarHtml += '<h3>' + year  + '/' + month + '</h3>'
    calendarHtml += '<table>'

    // 曜日の行を作成
    for (let i = 0; i < weeks.length; i++) {
        calendarHtml += '<td>' + weeks[i] + '</td>'
    }

    for (let w = 0; w < 6; w++) {
        calendarHtml += '<tr>'

        for (let d = 0; d < 7; d++) {
            if (w == 0 && d < startDay) {
                // 1行目で1日の曜日の前
                calendarHtml += '<td></td>'
            } else if (dayCount > endDayCount) {
                // 末尾の日数を超えた
                calendarHtml += '<td></td>'
            } else {
                calendarHtml += '<td>' + dayCount + '</td>'
                dayCount++
            }
        }
        calendarHtml += '</tr>'
    }
    calendarHtml += '</table>'

    document.querySelector('#calendar').innerHTML = calendarHtml

});