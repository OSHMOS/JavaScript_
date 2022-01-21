const button = document.querySelector("#modalOpenButton");

const modal = document.querySelector("#modal");

const cls_btn = document.querySelector("#modal_cls_btn");

button.onclick = function(){
    modal.style.display = "block";
}

cls_btn.onclick = function(){
    modal.style.display = "none";
}