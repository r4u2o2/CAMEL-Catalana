function calcPrice(previewName, previewNum){
    
    var previewOption = $('#previewOption').text();
    var previewDate = $('#previewDate').text();
    // console.log(previewName);
    // console.log(previewNum);
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
    $('#previewPrice').text(totalPrice + '円');
    
    window.sessionStorage.setItem(['previewName'],[previewName]);
    console.log(window.sessionStorage.getItem(['previewName']));
    window.sessionStorage.setItem(['previewNum'],[previewNum]);
    console.log(window.sessionStorage.getItem(['previewNum']));
    window.sessionStorage.setItem(['previewDate'],[previewDate]);
    console.log(window.sessionStorage.getItem(['previewDate']));
    window.sessionStorage.setItem(['previewOption'],[previewOption]);
    console.log(window.sessionStorage.getItem(['previewOption']));
    window.sessionStorage.setItem(['totalPrice'],[totalPrice]);
    console.log(window.sessionStorage.getItem(['totalPrice']));
}
