function insertNumber(a){
    let box = document.querySelector(".calculator_box");  // 무엇을 지정하는지 아는 것이 중요!
    box.innerHTML = a;
};

function insertsign(){
    let box = document.querySelector(".calculator_box");
    let sign = document.querySelector(".sign");
    console.log(sign); // why undefined?
    box.innerHTML = sign;
};

