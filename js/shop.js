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
     * topArea
     */
    // 1. 要素の位置を取得
    var workPosY00 = $('#topArea').offset().top;
    var workPosY01 = $('#selectArea').offset().top;
    // 2. スクロール位置取得
    $(window).on('scroll load', function(){
        var dy = $(this).scrollTop();
        // console.log('dy' + dy);
    // 3. 条件文
    // console.log($(window).height());
    // 4. 対象要素にクラスの付与
        $('.img-block').addClass('left-in-img'),
        $('#mainImage').addClass('right-in-img'),
        $('#topArea > #titleArea00').addClass('top-in'),
        $('#topArea > #titleText00').addClass('top-in-text');
    if(workPosY00 - $(window).height() < dy)
    {
        // $('#leftIn').addClass('left-in-box'),
        // $('#rightIn00').addClass('right-in-img'),
        $('.img-block').addClass('left-in-img'),
        $('#mainImage').addClass('right-in-img'),
        $('#topArea > #titleArea00').addClass('top-in'),
        $('#topArea > #titleText00').addClass('top-in-text');
    }
    else{
        // $('#leftIn').removeClass('left-in-box'),
        // $('#rightIn00').removeClass('right-in-img'),
        $('.img-block').removeClass('left-in-img'),
        $('#mainImage').removeClass('right-in-img'),
        $('#topArea > #titleArea00').removeClass('top-in'),
        $('#topArea > #titleText00').removeClass('top-in-text');
    }
    if(workPosY01 - $(window).height() < dy)
    {
        // $('#leftIn').removeClass('left-in-box'),
        // $('#rightIn00').removeClass('right-in-img'),
        $('.img-block').removeClass('left-in-img'),
        $('#mainImage').removeClass('right-in-img'),
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




    //アコーディオンをクリックした時の動作
    $('.select > p').on('click', function() {//セレクト要素をクリックしたら
        // console.log('セレクトクリック');

        $('.box').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
      
        var findElm = $(this).next(".box");//セレクト直後のアコーディオンを行うエリアを取得

        if($(this).hasClass('close')){//セレクト要素にクラス名closeがあれば
            $(this).removeClass('close');//クラス名を除去 
            // console.log('クラスあるよ');
        }
        else
        {//それ以外は
            $('.close').removeClass('close'); //クラス名closeを全て除去した後
            $(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
            $(findElm).slideDown(500);//アコーディオンを開く
        }

        // $(this).children('#selectClose').on('click', function(){
            
        // });
        
        
    });

    $('#input').on('click', function(){
        return false;
    });
    $('#button').on('click', function(){
        // console.log($('#input').val());
        $('#previewMessageTitle').css('display', 'block');
        $('#previewMessage').text($('#input').val());
    });

    /**
     * selectクリック
     */
    $('#selectName > p').on('click', function(){
        // console.log('商品名クリック');
        var productName = $(this).text();
        $('#previewName').text(productName);
        $('#selectButton00 > p').text(productName);
        window.sessionStorage.setItem(['previewName'],[productName]);
        $('.box').slideUp(500);
        var previewName = $('#previewName').text();
        var previewNum = $('#previewNum').text();
        calcPrice(previewName, previewNum);
        // console.log('商品名' + $(this).text());
    });
   
    $('#selectNum > option').on('click', function(){
        // console.log('個数クリック');
        var productNum = $(this).text();
        $('#previewNum').text(productNum);
        $('#selectButton01 > p').text(productNum);
        window.sessionStorage.setItem(['previewNum'],[productNum]);
        $('.box').slideUp(500);
        var previewName = $('#previewName').text();
        var previewNum = $('#previewNum').text();
        calcPrice(previewName, previewNum);
        // console.log('商品名' + $(this).text());
    });

    $('#selectOption > p').on('click', function(){
        // console.log('オプションクリック');
        var previewOption = $(this).text();
        $('#previewOption').text(previewOption);
        $('#selectButton02 > p').text(previewOption);
        window.sessionStorage.setItem(['previewOption'],[previewOption]);
        $('.box').slideUp(500);
        var previewName = $('#previewName').text();
        var previewNum = $('#previewNum').text();
        calcPrice(previewName, previewNum);
        // console.log('商品名' + $(this).text());
    });

  
    /**
     * 計算
     */

    $('.price').on('click', function(){
        // console.log('金額クリック');
        var previewName = $('#previewName').text();
        var previewNum = $('#previewNum').text();
        calcPrice(previewName, previewNum);


        // var productObj = {
        //     'カメリ・カタラーナ box' : 1800,
        //     'カメリ・カタラーナ paper bag' : 1500,
        // }
        // // console.log(productObj[]);
    
        // // console.log('Num1:' + productNum[0]);
    
        // var previewName = $('#previewName').text();
        // // console.log('商品名：' + previewName);
    
        // var previewNum = $('#previewNum').text();
        // // console.log(previewNum);
    
        // var platePrice = 100;
        // var price = productObj[previewName];
        //     var num = previewNum;
        //     // console.log('個数' + num);
        //     var totalPrice = 0;

        // if($('#previewOption').text() === 'メッセージプレート(+100円)')
        // {
        //     totalPrice = price*num+platePrice;
        // }
        // else if(previewName !== '商品名')
        // {
        //     totalPrice = price*num;
        // }
        // $('#previewPrice').html('<p>' + totalPrice + '円</p>');

    });


    /**
     * カート
     */
    $('#cart').on('click', function(){
        $('#overlay').load('cart.html');
        $('#overlay').addClass('overlay');

        $('#overlay').on('click', function(){
                     window.location.reload();
        });
    });

    // $('#cart2, #cart').on('click', function(){
    //     var cartData = $('#cart2').load('cart.html');
    //     $('#cart2').addClass('overlay');

    //     //  window.sessionStorage.setItem(['data'],[cartData]);
    //     //  console.log(window.sessionStorage.getItem(['data']));

    //      // 6. #overlayを再度クリックした時、.fade-inを削除
    //      $('#cart2').on('click', function(){
    //          $(this).removeClass('overlay');
    //         //  $(this).unload('cart.html');
    //      });

    // });




     /**
     * カレンダー
     */
    const weeks = ['日', '月', '火', '水', '木', '金', '土']
    const date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    const config = {
        show: 1,
    }
    
    function showCalendar(year, month) {
        for ( i = 0; i < config.show; i++) {
            const calendarHtml = createCalendar(year, month)
            const sec = document.createElement('section')
            sec.innerHTML = calendarHtml
            document.querySelector('#calender').appendChild(sec)
    
            month++
            if (month > 12) {
                year++
                month = 1
            }
        }
    }
    
    function createCalendar(year, month) {
        const startDate = new Date(year, month - 1, 1) // 月の最初の日を取得
        const endDate = new Date(year, month,  0) // 月の最後の日を取得
        const endDayCount = endDate.getDate() // 月の末日
        const lastMonthEndDate = new Date(year, month - 2, 0) // 前月の最後の日の情報
        const lastMonthendDayCount = lastMonthEndDate.getDate() // 前月の末日
        const startDay = startDate.getDay() // 月の最初の日の曜日を取得
        let dayCount = 1 // 日にちのカウント
        let calendarHtml = '' // HTMLを組み立てる変数
    
        // calendarHtml += '<p>ご希望の到着予定日</p>'
        calendarHtml += '<h3>' + month + '月' + '</h3>'
        calendarHtml += '<table>'
    
        // 曜日の行を作成
        // for (let i = 0; i < weeks.length; i++) {
        //     calendarHtml += '<td>' + weeks[i] + '</td>'
        // }
    
        for (let w = 0; w < 5; w++) {
            calendarHtml += '<tr>'
    
            for (let d = 0; d < 7; d++) {
                if (w == 0 && d < startDay) {
                    // 1行目で1日の曜日の前
                    let num = lastMonthendDayCount - startDay + d + 1
                    calendarHtml += '<td class="is-disabled"></td>'
                } else if (dayCount > endDayCount) {
                    // 末尾の日数を超えた
                    let num = dayCount - endDayCount
                    calendarHtml += '<td class="is-disabled"></td>'
                    dayCount++
                } else {
                    calendarHtml += `<td class="calendar_td" data-date="${year}/${month}/${dayCount}">${dayCount}</td>`
                    dayCount++
                }
            }
            calendarHtml += '</tr>'
        }
        calendarHtml += '</table>'
    
        return calendarHtml
    }
    
    function moveCalendar(e) {
        document.querySelector('#calendar').innerHTML = ''
    
        if (e.target.id === 'prev') {
            month--
    
            if (month < 1) {
                year--
                month = 12
            }
        }
    
        if (e.target.id === 'next') {
            month++
    
            if (month > 12) {
                year++
                month = 1
            }
        }
    
        showCalendar(year, month)
    }
    
    // document.querySelector('#prev').addEventListener('click', moveCalendar)
    // document.querySelector('#next').addEventListener('click', moveCalendar)
    
    document.addEventListener("click", function(e) {
        if(e.target.classList.contains("calendar_td")) {
            // alert('クリックした日付は' + e.target.dataset.date + 'です')
            $('#previewDate').html(e.target.dataset.date);
            $('#calender > p').html(e.target.dataset.date);
            // console.log($('#calender > p').text());
            // console.log(e.target.dataset.date);
            var previewName = $('#previewName').text();
        var previewNum = $('#previewNum').text();
        calcPrice(previewName, previewNum);
        }
    })
    
    showCalendar(year, month)


    $('#previewName').html(window.sessionStorage.getItem(['previewName']));
    $('#previewNum').html(window.sessionStorage.getItem(['previewNum']));
    $('#previewDate').html(window.sessionStorage.getItem(['previewDate']));
    $('#previewOption').html(window.sessionStorage.getItem(['previewOption']));


});

function calcPrice(previewName, previewNum){
    console.log(previewName);
    console.log(previewNum);
    var previewOption = $('#previewOption').text();
    var previewDate = $('#previewDate').text();
    // $('#previewOption').text(previewOption);
    var productObj = {
        'カメリ・カタラーナ box' : 1800,
        'カメリ・カタラーナ paper bag' : 1500,
        '商品名' : 0,
    }
    if(previewNum === '')
    {
        previewNum = 0;
    }
    // console.log(productObj[]);

    // console.log('Num1:' + productNum[0]);

    // var previewName = $('#previewName').text();
    // console.log('商品名：' + previewName);

    // var previewNum = $('#previewNum').text();
    // console.log(previewNum);

    var platePrice = 100;
    var price = productObj[previewName];
        var num = previewNum;
        // console.log('個数' + num);
        var totalPrice = 0;

    if($('#previewOption').text() === 'メッセージプレート(+100円)')
    {
        totalPrice = price*num+platePrice;
    }
    else if(previewName !== '商品名')
    {
        totalPrice = price*num;
    }
    $('#previewPrice').html('<p>' + totalPrice + '円</p>');
    
    window.sessionStorage.setItem(['previewName'],[previewName]);
    console.log(window.sessionStorage.getItem(['previewName']));
    window.sessionStorage.setItem(['previewNum'],[previewNum]);
    console.log(window.sessionStorage.getItem(['previewNum']));
    window.sessionStorage.setItem(['previewDate'],[previewDate]);
    console.log(window.sessionStorage.getItem(['previewDate']));
    window.sessionStorage.setItem(['previewOption'],[previewOption]);
    console.log(window.sessionStorage.getItem(['previewOption']));
}
