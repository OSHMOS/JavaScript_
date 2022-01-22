const button = document.querySelector("#modalOpenButton");

const modal = document.querySelector("#modal");

const cls_btn = document.querySelector(".close-area");

button.onclick = function(){
    modal.style.display = "flex";
}

cls_btn.onclick = function(){
    modal.style.display = "none";
}