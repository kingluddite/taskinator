var formEl = document.querySelector("#task-form");
var taskInput = document.querySelector('.text-input');
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
  console.log('yo');
  event.preventDefault();
  var listItemEl = document.createElement("li");
  listItemEl.textContent = taskInput.value;
  listItemEl.className = "task-item";
  tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", createTaskHandler);
