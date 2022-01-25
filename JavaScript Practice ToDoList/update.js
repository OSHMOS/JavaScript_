const toDoList = document.querySelector('#to-do-list');
const items = toDoList.children;

function updateToDo(event) {
    event.target.classList.toggle('done');
}

for (let item of items) {
    item.addEventListener('click', updateToDo);
}

