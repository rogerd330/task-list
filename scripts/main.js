import { TaskList } from "./taskList.js"

let taskList = new TaskList();

document.getElementById("add-task").addEventListener('click', function() {
    let newTask = document.getElementById('new-task');
    taskList.addTask(newTask.value);
    newTask.value = '';
});

document.getElementById("clear-list").addEventListener('click', function() {
    taskList.clear();
});

// function removeTask(event) {
//     taskList.removeTask(event.target.dataset.id);
// }
