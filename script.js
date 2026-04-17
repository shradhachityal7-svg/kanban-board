
function addTask(columnId) {
  const taskText = prompt("Enter task:");
  if (!taskText) return;

  const task = document.createElement("div");
  task.className = "task";
  task.innerText = taskText;

  document.querySelector(`#${columnId} .task-list`).appendChild(task);
}
