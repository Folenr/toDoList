function createTask(){
    const toDo = document.getElementById('toDo');
    const addButton = document.getElementById('addTask');
    const div = document.createElement('div');
    const input = document.createElement('textarea');
    const button = document.createElement('button');

    input.onkeyup = function() {textAreaAdjust(input);};
    button.innerText = 'S';
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
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');
    
    op1.value = 'toDo';
    op1.innerText = 'to do';
    op2.value = 'doing';
    op2.innerText = 'doing';
    op3.value = 'done';
    op3.innerText = 'done';
    
    deleteButton.onclick = function() {deleteTask(deleteButton);};
    deleteButton.innerText = 'D';
    deleteButton.className = 'taskButton';

    editButton.onclick = function() {editTask(editButton);};
    editButton.innerText = 'E';
    editButton.className = 'taskButton';

    select.onchange = function() {changeList(select);};
    label.className = 'select';
    p.innerText = input.value;

    select.appendChild(op1);
    select.appendChild(op2);
    select.appendChild(op3);
    label.appendChild(select);
    input.parentNode.appendChild(p);
    input.parentNode.appendChild(label);
    input.parentNode.appendChild(deleteButton);
    input.parentNode.appendChild(editButton);
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

function textAreaAdjust(element) {
    element.style.minHeight = '1px';
    element.style.minHeight = (element.scrollHeight)+"px";
}

function deleteTask(button){
    button.parentNode.remove();
}

function editTask(button){
    const div = button.parentNode;
    const input = document.createElement('textarea');
    const submitButton = document.createElement('button');
    
    submitButton.innerText = 'S';
    submitButton.onclick = function(){Submit(input,submitButton);};
    input.value = div.querySelector('p').innerText;
    input.onkeyup = function() {textAreaAdjust(input);};
    div.appendChild(input);
    div.appendChild(submitButton);
    textAreaAdjust(input)

    div.querySelectorAll('.taskButton').forEach(taskButton => taskButton.remove());
    div.querySelector('p').remove();
    div.querySelector('label').remove();
}