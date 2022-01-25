let time = 600;
let min = " ";
let sec = " ";

let x = setInterval(function() {
    min = parseInt(time/60);
    sec = time % 60;

    document.querySelector("#timer").innerHTML = min + "분" + sec + "초";
    time--;

    if (time < 0) {
        clearInterval(x);
        document.querySelector("#timer").innerHTML = "시간 초과";
    }
}, 1000);