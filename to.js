function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    const taskList = document.getElementById('task-list');
    const listItem = document.createElement('li');

    listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(listItem);
    taskInput.value = '';
}
function deleteTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
}
