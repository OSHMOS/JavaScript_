function insertNumber(a){
    const box = document.querySelector(".calculator_box");  // 무엇을 지정하는지 아는 것이 중요!
    box.innerHTML = a;
};

// 진짜 계산기라면, 부호를 box에 띄울 필요가 없다.
// 숫자가 서로 잘 이어지게 나오는 지가 중요하다. (1차 목표)
// 부호를 누르고 다른 숫자를 박스에 나타낸 후 '='을 눌렀을 때, 값이 box에 잘 표현 되면 된다.

