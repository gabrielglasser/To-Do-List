const newTask = document.querySelector('.newTask');
const btnNewTask = document.querySelector('.btnNewTask');
const task = document.querySelector('.tasks');

function createList(){
    const li = document.createElement('li');
    return li;
}

newTask.addEventListener('keypress', function(e) {  //funcao para quando precionar ENTER(13) o tarefa ser adicionada
    if (e.keyCode === 13) {
        if (!newTask.value) return;
        createTask(newTask.value);
    }
});

function clearInput() {   //funcao para limpar o input 
    newTask.value = '';
    newTask.focus();
}


function createTask(textoInput){
    const li = createList();
    li.innerHTML = textoInput;
    task.appendChild(li);
    clearInput();
};

btnNewTask.addEventListener('click', function(e) {
    if (!newTask.value) return;
    createTask(newTask.value);
});