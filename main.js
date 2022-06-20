//bài tập 1
document.getElementById('sortNumber').onclick = function () {
    //input
    var inputNum1 = Number(document.getElementById('inputNum1').value);
    var inputNum2 = Number(document.getElementById('inputNum2').value);
    var inputNum3 = Number(document.getElementById('inputNum3').value);
    //output txtSortNumber = str;
    var sortNumber = 0;

    //progress
    if (inputNum1 > inputNum2 && inputNum2 > inputNum3) {
        sortNumber = inputNum1 + '>' + inputNum2 + '>' + inputNum3;
    }
    else if (inputNum1 > inputNum3 && inputNum3 > inputNum2) {
        sortNumber = inputNum1 + '>' + inputNum3 + '>' + inputNum2;
    }
    else if (inputNum1 > inputNum2 && inputNum3 > inputNum1) {
        sortNumber = inputNum3 + '>' + inputNum1 + '>' + inputNum2;
    }
    else if (inputNum2 > inputNum1 && inputNum1 > inputNum3) {
        sortNumber = inputNum2 + '>' + inputNum1 + '>' + inputNum3;
    }
    else if (inputNum2 > inputNum3 && inputNum3 > inputNum1) {
        sortNumber = inputNum2 + '>' + inputNum3 + '>' + inputNum1;
    }
    else {
        sortNumber = inputNum1 + '<' + inputNum2 + '<' + inputNum3;
    }
    document.getElementById('txtSortNumber').innerHTML = sortNumber
}

//Bài tập 2
document.getElementById('btnHello').onclick = function () {
    var selUser = document.getElementById('selUser').value;
    var inKetQua = '';
    if (selUser === '') {
        inKetQua = "Bạn chưa chọn thành viên";
    }
    else if (selUser === 'B') {
        inKetQua = 'Xin Chào Bố'
    }
    else if (selUser === 'M') {
        inKetQua = 'Xin Chào Mẹ'
    }
    else if (selUser === 'A') {
        inKetQua = 'Xin chào anh trai'
    }
    else if (selUser === 'C') {
        inKetQua = 'Xin chào em gái'
    }
    else {
        inKetQua = 'Không thể in'
    }
    document.getElementById('txtHello').innerHTML = inKetQua;
}

//Bài Tập 3
document.getElementById('btnCount').onclick = function () {
    //input
    /*số thứ 1:number,số thứ 2:number,số thứ 3:number*/
    var inputCount1 = Number(document.getElementById('inputCount1').value);
    var inputCount2 = Number(document.getElementById('inputCount2').value);
    var inputCount3 = Number(document.getElementById('inputCount3').value);
    //output
    var demSoChan = 0;
    //progress
    if (inputCount1 % 2 === 0) {
        demSoChan++;
    }
    if (inputCount2 % 2 === 0) {
        demSoChan++;
    }
    if (inputCount3 % 2 === 0) {
        demSoChan++;
    }
    else {
        demSoLe = demSoChan - 3;
    }
    document.getElementById('txtCount').innerHTML = "có " + demSoChan + "số chẵn ," + (3 - demSoChan) + "số lẻ";
}
/*document.getElementById("btnCount").onclick = function () {
    var e = document.getElementById("inputCount1").value,
        t = document.getElementById("inputCount2").value,
        n = document.getElementById("inputCount3").value,
        a = 0;
    e % 2 == 0 && a++, t % 2 == 0 && a++, n % 2 == 0 && a++, (document.getElementById("txtCount").innerHTML = "Có " + a + " số chẵn," + (3 - a) + " số lẻ");
}),*/




//Bài tập 4
document.getElementById('btnEdge').onclick = function () {
    //input
    var canh1 = Number(document.getElementById('inputEdge1').value);
    var canh2 = Number(document.getElementById('inputEdge2').value);
    var canh3 = Number(document.getElementById('inputEdge3').value);
    //output
    duDoan = '';

    //progress
    if (canh1 === canh2 && canh2 === canh3) {
        duDoan = 'tam giác đều'
    }
    else if (canh1 === canh2 || canh2 === canh3 || canh3 === canh1) {
        duDoan = 'Tam Giác Cân'
    }
    else if (canh1 == Math.sqrt(canh2 * canh2 + canh3 * canh3) || canh2 == Math.sqrt(canh3 * canh3 + canh1 * canh1) || canh3 == (Math.sqrtcanh1 * canh1 + canh2 * canh2)) {
        duDoan = 'Tam Giác Vuông'
    }
    else {
        duDoan = 'Tam Giác Nào Đó'
    }
    document.getElementById('txtEdge').innerHTML = duDoan;
}

//Bài Tập 5:
document.getElementById('btnTomorrow').onclick = function () {
    var inputDay = Number(document.getElementById('inputDay').value);
    var inputMonth = Number(document.getElementById('inputMonth').value);
    var inputYear = Number(document.getElementById('inputYear').value);
    inKetQua = "";
    switch (inputMonth) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
            inKetQua = inputDay > 0 && inputDay < 31 ? inputDay + 1 + '/' + inputMonth + '/' + inputYear : 31 == inputDay ? "1/" + (inputMonth + 1) + "/" + inputYear : "Ngày Không Xác Định"
        case 2:
            inKetQua = inputDay > 0 && inputDay < 28 ? inputDay + 1 + '/' + inputMonth + '/' + inputYear : 28 == inputDay ? "1/" + (inputMonth + 1) + "/" + inputYear : "Ngày Không Xác Định"
        case 4:
        case 6:
        case 9:
        case 11:
            inKetQua = inputDay > 0 && inputDay < 30 ? inputDay + 1 + '/' + inputMonth + '/' + inputYear : 30 == inputDay ? "1/" + (inputMonth + 1) + "/" + inputYear : "Ngày Không Xác Định"
        case 12:
            inKetQua = inputDay > 0 && inputDay < 31 ? inputDay + 1 + '/' + inputMonth + '/' + inputYear : 31 == inputDay ? "1/1/" + (inputMonth + 1) : "Ngày Không Xác Định"
        default:
            a = "Tháng không xác định"
    }
    document.getElementById('txtDate').innerHTML = inKetQua;

}
document.getElementById("btnYesterday").onclick = function () {
    var inputDay = parseInt(document.getElementById("inputDay").value),
        inputMonth = parseInt(document.getElementById("inputMonth").value),
        inputYear = parseInt(document.getElementById("inputYear").value),
        inKetQua = "";
    switch (inputMonth) {
        case 1:
            inKetQua = inputDay > 1 && inputDay <= 31 ? inputDay - 1 + "/" + inputMonth + "/" + inputYear : 1 == inputDay ? "31/12/" + (inputYear - 1) : "Ngày không xác định";
            break;
        case 2:
            inKetQua = inputDay > 1 && inputDay <= 28 ? inputDay - 1 + "/" + inputMonth + "/" + inputYear : 1 == inputDay ? "31/" + (inputMonth - 1) + "/" + inputYear : "Ngày không xác định";
            break;
        case 3:
            inKetQua = inputDay > 1 && inputDay < 31 ? inputDay - 1 + "/" + inputMonth + "/" + inputYear : 1 == e ? NaN + (inputMonth - 1) + "/" + inputYear : "Ngày không xác định";
            break;
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            inKetQua = inputDay > 1 && inputDay < 31 ? inputDay - 1 + "/" + inputMonth + "/" + inputYear : 1 == inputDay ? "30/" + (inputMonth - 1) + "/" + inputYear : "Ngày không xác định";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            inKetQua = inputDay > 1 && inputDay <= 30 ? inputDay - 1 + "/" + inputMonth + "/" + inputYear : 1 == inputDay ? "31/" + (inputMonth - 1) + "/" + inputYear : "Ngày không xác định";
    }
    document.getElementById("txtDate").innerHTML = inKetQua;
}


//Bài tập 6
document.getElementById('btnCalcDay').onclick = function () {
    inputMonth2 = Number(document.getElementById('inputMonth2').value);
    inputYear2 = Number(document.getElementById('inputYear2').value);
    a = !1,
        b = 0;
    switch ((((inputYear2 % 4 == 0 && inputYear2 % 100 != 0) || inputYear2 % 400 == 0) && (a = !0), inputMonth2)) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            b = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            b = 30
            break;
        case 2:
            b = a ? 29 : 28;
        default:
            a = 0;
    }
    document.getElementById('txtCalcDay').innerHTML = "Tháng" + inputMonth2 + "Năm" + inputYear2 + "có" + b + "Ngày";
}

//Bài Tập 7
document.getElementById('btnReadInt').onclick = function ()
 {
    var a = document.getElementById('inputReadInt').value
    b = Math.floor(a / 100);
    d = Math.floor((a % 100) / 10)
    f = "";
    switch (b) {
        case 1:
            f += "một trăm ";
            break;
        case 2:
            f += "hai trăm ";
            break;
        case 3:
            f += "ba trăm ";
            break;
        case 4:
            f += "bốn trăm ";
            break;
        case 5:
            f += "năm trăm ";
            break;
        case 6:
            f += "sáu trăm ";
            break;
        case 7:
            f += "bảy trăm ";
            break;
        case 8:
            f += "tám trăm ";
            break;
        case 9:
            f += "chín trăm ";
            break;
        default:
            alert("số hàng trăm không xác định được");
    }
    switch (d) {
        case 1:
            f += "một mươi ";
            break;
        case 2:
            f += "hai mươi ";
            break;
        case 3:
            f += "ba mươi ";
            break;
        case 4:
            f += "bốn mươi ";
            break;
        case 5:
            f += "năm mươi ";
            break;
        case 6:
            f += "sáu mươi ";
            break;
        case 7:
            f += "bảy mươi ";
            break;
        case 8:
            f += "tám mươi ";
            break;
        case 9:
            f += "chín mươi ";
            break;
        default:
            alert("Số hàng chục không xác định được");
    }
    switch((a % 100) % 10){
        case 1:
                f += "một";
                break;
            case 2:
                f += "hai";
                break;
            case 3:
                f += "ba";
                break;
            case 4:
                f += "bốn";
                break;
            case 5:
                f += "năm";
                break;
            case 6:
                f += "sáu";
                break;
            case 7:
                f += "bảy";
                break;
            case 8:
                f += "tám";
                break;
            case 9:
                f += "chín";
                break;
            default:
                alert("Số hàng đơn vị không xác định được.");
    }
    document.getElementById("txtReadInt").innerHTML = f;
}

//Bài tập 8
document.getElementById('btnSearch').onclick = function () {
    inputName1 = document.getElementById('inputName1').value;
    inputX1 = document.getElementById('inputX1').value;
    inputY1 = document.getElementById('inputY1').value;
    inputName2 = document.getElementById('inputName2').value;
    inputX2 = document.getElementById('inputX2').value;
    inputY2 = document.getElementById('inputY2').value;
    inputName3 = document.getElementById('inputName3').value;
    inputX3 = document.getElementById('inputX3').value;
    inputY3 = document.getElementById('inputY3').value;
    inputX4 = document.getElementById('inputX4').value;
    inputY4 = document.getElementById('inputY4').value;
    var sinhVien1 = Math.pow(1 -inputX1 , 2 ) + Math.pow(inputY4 - inputY1, 2 ),
        ketQuaSV1 = Math.sqrt(sinhVien1)
    var sinhVien2 = Math.pow(1 - inputX2 , 2) + Math.pow(inputY4 - inputY2, 2 ),
        ketQuaSV2 = Math.sqrt(sinhVien2)
    var sinhVien3 = Math.pow(1 - inputX3 , 2) + Math.pow(inputY4 - inputY3, 2 ),
        ketQuaSV3 = Math.sqrt(sinhVien3)
    sinhVienXaNhat = '';
    if(sinhVien1 > sinhVien2 && sinhVien1 > sinhVien3 ){
        sinhVienXaNhat = inputName1;
    }
    else if(sinhVien2 > sinhVien3 && sinhVien2 > sinhVien1 ){
        sinhVienXaNhat = inputName2;
    }
    else if(sinhVien3 > sinhVien1 && sinhVien3 > sinhVien2 ){
        sinhVienXaNhat = inputName3;
    }
    else{
        sinhVienXaNhat = 'Không có kết quả';
    }
    document.getElementById('txtSearch').innerHTML = "Sinh viên xa trường nhất: " + sinhVienXaNhat;
}