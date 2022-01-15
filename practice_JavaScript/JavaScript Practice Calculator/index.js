// 진짜 계산기라면, 부호를 box에 띄울 필요가 없다.
// 숫자가 서로 잘 이어지게 나오는 지가 중요하다. (1차 목표)
// 부호를 누르고 다른 숫자를 박스에 나타낸 후 '='을 눌렀을 때, 값이 box에 잘 표현 되면 된다.

const cal_box1 = document.querySelector("#calculator_box1");
const cal_box2 = document.querySelector("#calculator_box2");

const plus = document.querySelector(".calculator_sign1");
const minus = document.querySelector(".calculator_sign2");
const divide = document.querySelector(".calculator_sign3");
const multiply = document.querySelector(".calculator_sign4");
const equal = document.querySelector(".calculator_sign5");

let a;

plus.onclick = function(){
    a = parseInt(cal_box1.value) + parseInt(cal_box2.value);
};

minus.onclick = function(){
    a = parseInt(cal_box1.value) - parseInt(cal_box2.value);
};

divide.onclick = function(){
    a = parseInt(cal_box1.value) / parseInt(cal_box2.value);
};

multiply.onclick = function(){
    a = parseInt(cal_box1.value) * parseInt(cal_box2.value);
};

equal.onclick = function(){
    alert(a);
};