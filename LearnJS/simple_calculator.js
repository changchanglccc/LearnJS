/**
 * Created by chongli on 2017-03-27.
 */
var result1;
//add
function add() {
    var firstNum = getFirstNum();
    var twiceNum = getTwiceNum();
    re=Number(firstNum) + Number(twiceNum);
    sendResult(re);
}
//substract
function substract() {
    var firstNum = getFirstNum();
    var twiceNum = getTwiceNum();
    re=firstNum - twiceNum;
    sendResult(re);
}
//multiply
function multiply() {
    var firstNum = getFirstNum();
    var twiceNum = getTwiceNum();
    re=firstNum * twiceNum;
    sendResult(re);
}
//divide
function divide() {
    var firstNum = getFirstNum();
    var twiceNum = getTwiceNum();
    re=firstNum/twiceNum;
    sendResult(re);
}
function getFirstNum() {
    var fn = document.getElementById("firstNum").value;
    return fn;
}
function getTwiceNum() {
    var tn = document.getElementById("twiceNum").value;
    return tn;
}
//给p标签传值
function sendResult(result1) {
    var num = document.getElementById("result");
    num.innerHTML = result1;
}