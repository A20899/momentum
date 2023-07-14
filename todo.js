let tasks = [];

function addTask(event) {
  if (event.keyCode === 13) {
    let taskInput = document.getElementById("taskInput");
    let taskDescription = taskInput.value.trim();

    if (taskDescription === "") {
      taskInput.value = "";
      taskInput.focus();
      return;
    }

    let newTask = {
      id: Date.now(),
      description: taskDescription,
      completed: false,
    };

    tasks.push(newTask);
    renderTask(newTask);

    taskInput.value = "";
  }
}

function renderTask(task) {
  let taskList = document.getElementById("taskList");
  let li = document.createElement("li");
  li.dataset.id = task.id;

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;

  checkbox.onchange = function () {
    task.completed = checkbox.checked;
    li.classList.toggle("task-completed", task.completed);
  };

  let descriptionSpan = document.createElement("span");
  descriptionSpan.innerHTML = task.description;

  let buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons-container");

  let optionsButton = document.createElement("button");
  optionsButton.innerHTML = "...";
  optionsButton.classList.add("options-button");

  let editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.classList.add("edit-button");
  editButton.onclick = function (event) {
    event.stopPropagation();
    editTask(task);
  };

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add("delete-button");
  deleteButton.onclick = function (event) {
    event.stopPropagation();
    deleteTask(task);
  };

  optionsButton.onclick = function (event) {
    event.stopPropagation();
    buttonsContainer.classList.toggle("show-buttons");
  };

  buttonsContainer.appendChild(optionsButton);
  buttonsContainer.appendChild(editButton);
  buttonsContainer.appendChild(deleteButton);

  li.appendChild(checkbox);
  li.appendChild(descriptionSpan);
  li.appendChild(buttonsContainer);
  taskList.appendChild(li);
}

function editTask(task) {
  let newDescription = prompt("Enter a new description", task.description);

  if (newDescription !== null && newDescription.trim() !== "") {
    task.description = newDescription.trim();
    let li = document.querySelector(`li[data-id="${task.id}"]`);
    let descriptionSpan = li.querySelector("span");
    descriptionSpan.innerHTML = task.description;
  }
}

function deleteTask(task) {
  let confirmDelete = confirm("Are you sure you want to delete this task?");

  if (confirmDelete) {
    tasks = tasks.filter(function (item) {
      return item.id !== task.id;
    });

    let li = document.querySelector(`li[data-id="${task.id}"]`);
    li.parentNode.removeChild(li);
  }
}

function openModal() {
  let modal = document.getElementById("modal");
  modal.style.display = "block";
}

function closeModal() {
  let modal = document.getElementById("modal");
  modal.style.display = "none";
}

tasks.forEach(function (task) {
  renderTask(task);
});

window.onclick = function (event) {
  let modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};