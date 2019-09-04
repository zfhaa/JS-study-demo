// var lblScore = document.getElementById("integral");
// var lblPrice = document.getElementById("total");
// var table = document.getElementById("shopping");

// table.onclick = function (e) {
//     if (e.target.alt === "add") {
//         setInputValue(e.target.previousElementSibling, 1);
//     }
//     else if (e.target.alt === "minus") {
//         setInputValue(e.target.nextElementSibling, -1);
//     }
//     else if (e.target.type === "checkbox") {
//         if (e.target.id === "allCheckBox") {
//             //全选
//             var cbs = table.querySelectorAll("[name=cartCheckBox]");
//             for (var i = 0; i < cbs.length; i++) {
//                 cbs[i].checked = e.target.checked;
//             }
//         }
//         calTotal();
//     }
//     else if (e.target.parentElement.className === "cart_td_8") {
//         //删除
//         deleteTr(e.target.parentElement.parentElement);
//         calTotal();
//     }
//     else if(e.target.alt === "delete"){
//         deleteChecked();
//         calTotal();
//     }
// }

// /**
//  * 删除所选
//  */
// function deleteChecked() {
//     var trs = document.querySelectorAll("tbody tr[id^=product]");
//     for (var i = 0; i < trs.length; i++) {
//         var info = getTrInfo(trs[i]);
//         if(info.checked){
//             deleteTr(trs[i]);
//         }
//     }
// }

// /**
//  * 删除一行
//  * @param {*} tr 
//  */
// function deleteTr(tr) {
//     tr.previousElementSibling.remove();
//     tr.remove();
// }

// /**
//  * 设置input的增量
//  * @param {*} inp 
//  * @param {*} increase 
//  */
// function setInputValue(inp, increase) {
//     var val = +inp.value + increase;
//     if (val < 1) {
//         val = 1;
//     }
//     inp.value = val;
//     reCal();
// }

// /**
//  * 重新计算所有价格
//  */
// function reCal() {
//     calAllTrTotal();
//     calTotal();
// }

// /**
//  * 计算所有tr的总价
//  */
// function calAllTrTotal() {
//     var trs = document.querySelectorAll("tbody tr[id^=product]");
//     for (var i = 0; i < trs.length; i++) {
//         calTrTotal(trs[i]);
//     }
// }

// /**
//  * 计算所有商品的总价
//  */
// function calTotal() {
//     var sum = 0;
//     var score = 0;
//     var trs = document.querySelectorAll("tbody tr[id^=product]");
//     for (var i = 0; i < trs.length; i++) {
//         var info = getTrInfo(trs[i]);
//         if (info.checked) {
//             sum += info.total;
//             score += info.score * info.num;
//         }
//     }
//     lblPrice.innerText = sum.toFixed(2);
//     lblScore.innerText = score;
// }

// /**
//  * 计算某一行的总价
//  * @param {*} tr 
//  */
// function calTrTotal(tr) {
//     var info = getTrInfo(tr);
//     var total = info.unitPrice * info.num;
//     tr.querySelector(".cart_td_7").innerText = total.toFixed(2);
// }

// /**
//  * 得到某一行的所有信息
//  * @param {*} tr 
//  */
// function getTrInfo(tr) {
//     //得到单价
//     var unitPrice = +tr.querySelector(".cart_td_5").innerText;
//     var num = +tr.querySelector(".cart_td_6 input").value;
//     var score = +tr.querySelector(".cart_td_4").innerText;
//     var checked = tr.querySelector(".cart_td_1 input").checked;
//     var total = +tr.querySelector(".cart_td_7").innerText;
//     return {
//         unitPrice, //单价
//         num, //数量
//         score, //积分
//         checked, //是否选中
//         total //总价
//     }
// }

// reCal();


// var lblScore = document.getElementById("integral");
// var lblPrice = document.getElementById("total");
// var table = document.getElementById("shopping");

// console.log("aaa")
// table.onclick = function (e) {
//     if (e.target.alt === "add") {
//         setInputValue(e.target.previousElementSibling, 1);
//     } else if (e.target.alt === "minus") {
//         setInputValue(e.target.nextElementSibling, -1);
//     } else if (e.target.type === "checkbox") {
//         if (e.target.id === "allCheckBox") {      
//             //全选
//             var cbs = table.querySelectorAll("[name=cartCheckBox]"); //得到所有的复选框
//             for (var i = 0; i < cbs.length; i++) {
//                 cbs[i].checked = e.target.checked;
//             }
//         }

//         calTotal();
//     }
//     else if(e.target.parentElement.className==="cart_td_8"){
//         deleteTr(e.target.parentElement.parentElement);
//     }
//     else if(e.target.alt==="delete"){
//         deleteChecked();
//         calTotal();
//     }
// }
// /**
//  * 删除所选
//  */
// function deleteChecked(){
//     var trs = document.querySelectorAll("tbody tr[id^=product]");
//     for(var i=0;i<trs.length;i++){
//         var info = getTrInfo(trs[i]);
//         if(info.checked){
//             deleteTr(trs[i]);
//         }
//     }
// }
// /**
//  * 删除一行
//  * @param {*} tr 
//  */
// function deleteTr(tr){
//     tr.previousElementSibling.remove();
//     tr.remove();
//     calTotal();
// }

// /**
//  * 设置商品的数量
//  * @param {*} inp 
//  * @param {*} increase 
//  */
// function setInputValue(inp, increase) {
//     var val = +inp.value + increase;
//     if (val < 1) {
//         val = 1;
//     }
//     inp.value = val;
//     reCal();
// }
// /**
//  * 重新计算所有价格
//  */
// function reCal() {
//     calAllTrTotal();
//     calTotal();
// }
// /**
//  * 计算每一个tr总价
//  */
// function calAllTrTotal() {
//     var trs = document.querySelectorAll("tbody tr[id^=product]");
//     for (var i = 0; i < trs.length; i++) {
//         calTrTotal(trs[i])
//     }
// }
// /**
//  * 计算所有商品的总价
//  */
// function calTotal() {
//     var sum = 0; //所有商品的总价
//     var score = 0; //总积分
//     var trs = document.querySelectorAll("tbody tr[id^=product]");
//     for (var i = 0; i < trs.length; i++) {
//         var info = getTrInfo(trs[i]);
//         if (info.checked) {
//             sum += info.total;
//             score += info.score * info.num;
//         }
//     }
//     lblPrice.innerHTML = sum.toFixed(2);
//     lblScore.innerHTML = score;

// }

// /**
//  * 计算某一行的总价
//  * @param {*} tr 
//  */
// function calTrTotal(tr) {
//     var info = getTrInfo(tr);
//     var total = info.unitPrice * info.num; //某一行的总价
//     tr.querySelector(".cart_td_7").innerText = total.toFixed(2); //得到总价后，保存2位小数
// }

// /**
//  * 得到某一行的所有信息
//  * @param {*} tr 
//  */
// function getTrInfo(tr) {

//     var unitPrice = +tr.querySelector(".cart_td_5").innerText; //得到单价
//     var num = +tr.querySelector(".cart_td_6 input").value; //数量
//     var score = +tr.querySelector(".cart_td_4").innerText; //积分
//     var checked = tr.querySelector(".cart_td_1 input").checked; //是否选中
//     var total = +tr.querySelector(".cart_td_7").innerText; //总价
//     return {
//         unitPrice,
//         num,
//         score,
//         checked,
//         total
//     }
// }
// reCal();




//自己写的，粗略


var lblScore = document.getElementById("integral");
var lblPrice = document.getElementById("total");
var table = document.getElementById("shopping");


table.onclick = function (e) {
    if (e.target.alt === "add") {
        e.target.previousElementSibling.value++;
        calAllTrTotal();
        calTotal();
    }
    if (e.target.alt === "minus") {

        e.target.nextElementSibling.value--;
        if (e.target.nextElementSibling.value < 1) {
            e.target.nextElementSibling.value = 1
        }
        calAllTrTotal();
        calTotal();
    }
    if(e.target.parentElement.className==="cart_td_8"){
        e.target.parentElement.parentElement.previousElementSibling.remove();
        e.target.parentElement.parentElement.remove();
        calAllTrTotal();
        calTotal();
    }
    if(e.target.type==="checkbox"){
        calTotal();
    }
    if(e.target.id==="allCheckBox"){
        var inps = document.querySelectorAll("tbody input[type^=checkbox]");
        for(var i =0;i<inps.length;i++){
            inps[i].checked=e.target.checked;
        }
        calTotal();
    }
    if(e.target.alt==="delete"){
        var trs = document.querySelectorAll("tbody tr[id^=product]");
        for (var i = 0; i < trs.length; i++) {
            var info = getTrInfo(trs[i]) ;
            if(info.checked){
                trs[i].previousElementSibling.remove();
                trs[i].remove();
            }
        }
    }
    calTotal();
}



function calAllTrTotal() { //每一种商品的总价
    var trs = document.querySelectorAll("tbody tr[id^=product]");
    for (var i = 0; i < trs.length; i++) {
        calTrTotal(trs[i])

    }
}

function calTotal() { //所有商品的总价
    var sum = 0;
    var score = 0;
    var trs = document.querySelectorAll("tbody tr[id^=product]");
    for (var i = 0; i < trs.length; i++) {
        var info = getTrInfo(trs[i]);
        if (info.checked) {
            sum += info.total
            score += info.score * info.num;
        }
        lblPrice.innerHTML = sum;
        lblScore.innerHTML = score;
    }
}

function calTrTotal(tr) { //某一种商品的总价
    var info = getTrInfo(tr);
    var total = info.num * info.unitPrice;
    tr.querySelector(".cart_td_7").innerText = total.toFixed(2);
}



function getTrInfo(tr) { //某一种商品的所有信息
    var total = +tr.querySelector(".cart_td_7").innerText;
    var num = +tr.querySelector(".cart_td_6 input").value;
    var unitPrice = +tr.querySelector(".cart_td_5").innerText;
    var score = +tr.querySelector(".cart_td_4").innerText;
    var checked = tr.querySelector(".cart_td_1 input").checked;
    return {
        total,
        num,
        unitPrice,
        score,
        checked,
    }
}
calAllTrTotal();
calTotal();