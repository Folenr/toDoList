function createTask(){
    const toDo = document.getElementById('toDo');
    const addButton = document.getElementById('addTask');
    const div = document.createElement('div');
    const input = document.createElement('input');
    const button = document.createElement('button');

    button.innerText = 'submit';
    button.onclick = function(){Submit(input,button);};
    div.className = 'task';

    toDo.appendChild(div);
    div.appendChild(input);
    div.appendChild(button);
    toDo.appendChild(addButton);
}

function Submit(input,button){
    const p = document.createElement('p');
    const label = document.createElement('label');
    const select = document.createElement('select');
    const op1 = document.createElement('option');
    const op2 = document.createElement('option');
    const op3 = document.createElement('option');

    op1.value = 'toDo';
    op1.innerText = 'to do';
    op2.value = 'doing';
    op2.innerText = 'doing';
    op3.value = 'done';
    op3.innerText = 'done';

    select.onchange = function() {changeList(select);};
    label.className = 'select';
    p.innerText = input.value;

    select.appendChild(op1);
    select.appendChild(op2);
    select.appendChild(op3);
    label.appendChild(select);
    input.parentNode.appendChild(p);
    input.parentNode.appendChild(label);
    input.remove();
    button.remove();

}

function changeList(select){
    const div = select.parentNode.parentNode;
    const list = document.getElementById(select.value);
    const addButton = document.getElementById('addTask');
    list.appendChild(div);
    if(list.id == 'toDo')
        list.appendChild(addButton);
}