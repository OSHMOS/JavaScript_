var ans = 'abcde';
document.querySelector('button').addEventListener('click',
function(){
    var input = document.querySelectorAll('.input');

    for (let i = 0; i < 5; i++)
    {
        if (input[i].value == ans[i]){
            input[i].style.background = 'green';
        }else if (ans.includes(input[i].value)){
            input[i].style.background = 'yellow';
        } else {
            input[i].style.background = 'lightgrey';
        }

        input[i].classList.remove('input');
    }

    var template = `<div>
        <input class='input'>
        <input class='input'>
        <input class='input'>
        <input class='input'>
        <input class='input'>
    </div>`;
    document.querySelector('body').insertAdjacentHTML
    ('beforeend', template);
})