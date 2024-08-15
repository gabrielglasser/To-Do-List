const newTask = document.querySelector('.newTask');
const btnNewTask = document.querySelector('.btnNewTask');
const task = document.querySelector('.tasks');

function createList(){ //cria lista
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
};

function createBtnClean(li) { // funcao para criar botao de limpar
    li.innerHTML += '  ';
    const btnClear = document.createElement('button');
    btnClear.innerText = 'Apagar';
    btnClear.setAttribute('class', 'clear');
    li.appendChild(btnClear);
};


function createTask(textoInput){  //funcao para cliar a lista de tarefas
    const li = createList();
    li.innerHTML = textoInput;
    task.appendChild(li);
    clearInput();
    createBtnClean(li);
};

btnNewTask.addEventListener('click', function(e) {
    if (!newTask.value) return;
    createTask(newTask.value);
});

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('clear')) {
        el.parentElement.remove();
    }

});