document.getElementById('addButton').addEventListener('click', addTask);

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
    li.innerHTML = `<span>${taskText}</span><button class="delete-btn">Excluir</button>`;

    // Adiciona o item à lista
    taskList.appendChild(li);

    // Adiciona o evento de exclusão
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });

    // Limpa o campo de input
    taskInput.value = "";
}
