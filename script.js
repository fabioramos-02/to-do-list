document.getElementById('addButton').addEventListener('click', addTask);

let taskToEdit = null; // Variável para armazenar a tarefa que será editada

// Função para adicionar tarefas
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Por favor, adicione uma tarefa!");
        return;
    }

    const taskList = document.getElementById('taskList');

    // Cria o item da lista
    const li = document.createElement('li');
    li.innerHTML = `<span>${taskText}</span>
                   <button class="edit-btn">Editar</button>
                   <button class="delete-btn">Excluir</button>`;

    // Adiciona o item à lista
    taskList.appendChild(li);

    // Adiciona o evento de edição
    li.querySelector('.edit-btn').addEventListener('click', function() {
        editTask(taskText, li);
    });

    // Adiciona o evento de exclusão
    li.querySelector('.delete-btn').addEventListener('click', function() {
        taskToDelete = li; // Armazena a tarefa a ser excluída
        openModal(); // Abre o modal de confirmação
    });

    // Limpa o campo de input
    taskInput.value = "";
}

// Função para editar uma tarefa
function editTask(taskText, taskElement) {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');

    // Coloca o texto da tarefa no campo de input para edição
    taskInput.value = taskText;

    // Altera o botão de "Adicionar" para "Atualizar"
    addButton.textContent = "Atualizar";

    // Atribui a tarefa a ser editada
    taskToEdit = taskElement;

    // Altera a funcionalidade do botão "Atualizar"
    addButton.removeEventListener('click', addTask); // Remove o evento de adicionar
    addButton.addEventListener('click', function() {
        updateTask(taskElement);
    });
}

// Função para atualizar a tarefa editada
function updateTask(taskElement) {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Por favor, insira um texto para a tarefa.");
        return;
    }

    // Atualiza o texto da tarefa
    taskElement.querySelector('span').textContent = taskText;

    // Limpa o campo de input e restaura o botão para "Adicionar"
    taskInput.value = "";
    document.getElementById('addButton').textContent = "Adicionar";

    // Volta a função para adicionar tarefas
    document.getElementById('addButton').removeEventListener('click', updateTask);
    document.getElementById('addButton').addEventListener('click', addTask);

    // Limpa a referência de tarefa a ser editada
    taskToEdit = null;
}