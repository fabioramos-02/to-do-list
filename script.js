document.getElementById('addButton').addEventListener('click', addTask);

// Referência aos elementos do modal
const modal = document.getElementById("confirmModal");
const confirmButton = document.getElementById("confirmDelete");
const cancelButton = document.getElementById("cancelDelete");

let taskToDelete = null;  // Variável para armazenar a tarefa a ser excluída

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
    li.innerHTML = `<span>${taskText}</span><button class="delete-btn">Excluir</button>`;

    // Adiciona o item à lista
    taskList.appendChild(li);

    // Adiciona o evento de exclusão
    li.querySelector('.delete-btn').addEventListener('click', function() {
        taskToDelete = li;  // Armazena a referência da tarefa que será excluída
        openModal();  // Abre o modal de confirmação
    });

    // Limpa o campo de input
    taskInput.value = "";
}

// Função para abrir o modal de confirmação
function openModal() {
    modal.style.display = "block";

    // Confirmar exclusão
    confirmButton.onclick = function() {
        taskToDelete.remove();  // Remove a tarefa da lista
        modal.style.display = "none";  // Fecha o modal
    };

    // Cancelar exclusão
    cancelButton.onclick = function() {
        modal.style.display = "none";  // Apenas fecha o modal sem excluir
    };
}

// Função para fechar o modal se clicar fora dele
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";  // Fecha o modal se clicar fora
    }
};