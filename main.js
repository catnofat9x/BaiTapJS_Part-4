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
        demSoChan ++;
    }
    if (inputCount2 % 2 === 0) {
        demSoChan ++;
    }
    if (inputCount3 % 2 === 0) {
        demSoChan ++;
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