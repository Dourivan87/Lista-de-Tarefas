document.getElementById ('task-form').addEventListener ('submit',addtask)

function removeAccentAndApplyLowerCase(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
}

function addtask(e){
    e.preventDefault();

    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    const allistItems = document.querySelectorAll('li');
    const allistItemData = []

    allistItems.forEach((item) => {
        allistItemData.push(removeAccentAndApplyLowerCase(item.textContent))
    })

    if(taskText ===''){
        alert('Please add a task');
        return;
        } else if (allistItemData.includes(removeAccentAndApplyLowerCase(`${taskText}X`))){
            alert('Tarefa já adicionada');
            taskInput.value='';
    }  else {
        addtaskToDom (taskText);
        taskInput.value ='';
        return
    }
}

function addtaskToDom (taskText,completed = false){
    const li = document.createElement('li');
    li.textContent = taskText;
    if (completed){
        li.classList.add('completed');
    }

    li.addEventListener('click',ToggleTaskCompletion);

    const deleteButtom = document.createElement('button');

     deleteButtom. textContent = 'X';
     deleteButtom.classList.add ('delete');
     deleteButtom. addEventListener('click',deleteTask);

     li.appendChild(deleteButtom);

     document.getElementById('task-list').appendChild(li);
}

function ToggleTaskCompletion(e){
    e.target.classList.toggle('completed');

}
function deleteTask(e){
    const li = e.target.parentElement;
    li.remove();

}
