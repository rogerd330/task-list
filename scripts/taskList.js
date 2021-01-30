import { Task } from "./task.js"

export class TaskList {
    tasks = [];

    constructor() {

    }

    addTask(name) {
        // console.log('can\'t add task yet');
        let task = new Task(this.tasks.length, name);
        this.tasks.push(task);
        console.log("Added: " + task.getInfo());
        console.log(this.tasks);

        this.listTasks();
    }

    removeTask(event) {
        console.log("Removing Task ID # " + event.target.dataset.id);

        this.tasks = this.tasks.filter(function(task) {
            if (task.id == event.target.dataset.id) {
                return false;
            }
            else {
                return true;
            }
        });

        this.listTasks();
    }

    clear() {
        this.tasks = [];
        this.listTasks();
        console.log("Cleared the list!");
    }

    listTasks() {
        let taskList = document.getElementById('task-list');
        let removeHandler = this.removeTask.bind(this);

        taskList.innerHTML = '';

        this.tasks.forEach(function(task) {

            let newTask = document.createElement('li');

            let taskDone = document.createElement('input');
            taskDone.type = 'checkbox';
            taskDone.addEventListener('change', function(event) {
                task.toggleStatus();

                if (event.target.checked) {
                    event.target.nextSibling.classList.add('done');
                }
                else {
                    event.target.nextSibling.classList.remove('done');
                }
            });

            let taskText = document.createElement('span');
            taskText.classList.add('task-item');
            if (task.status == true) {
                taskText.classList.add('done');
                taskDone.checked = true;
            }
            taskText.innerText = task.getInfo();

            let taskRemove = document.createElement('button');
            taskRemove.dataset.id = task.id;
            taskRemove.innerText = 'Remove';
            taskRemove.classList.add('btn');
            taskRemove.classList.add('btn-danger');
            // taskRemove.innerHTML = '<i class="fas fa-trash-can"></i>';
            taskRemove.addEventListener('click', removeHandler);

            newTask.appendChild(taskDone);
            newTask.appendChild(taskText);
            newTask.appendChild(taskRemove);

            taskList.appendChild(newTask);

        });
    }
}