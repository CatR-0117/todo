function addTask() {
  const input = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  if (input.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }
  const li = document.createElement("li");
  li.innerHTML = `
        <div class="label"><input type="checkbox" class="checkBox">
        <span class="taskText">${input.value}</span></div>
        <span class="deleteButton" onclick="this.parentElement.remove()">Delete</span>
    `;
  const checkbox = li.querySelector(".checkBox");
  checkbox.addEventListener("change", function () {
    const taskText = li.querySelector(".taskText");
    if (this.checked) {
      taskText.classList.add("completed");
    } else {
      taskText.classList.remove("completed");
    }
  });
  taskList.appendChild(li);
  input.value = "";
}
function filterTasks(filter) {
  var tasks = document.querySelectorAll("#taskList li");
  tasks.forEach(function(task) {
    var isCompleted = task.querySelector(".checkBox").checked;
    if (filter === "all") {
      task.style.display = "flex";
      return;
    }
    if (filter === "active" && isCompleted) {
      task.style.display = "none";
      return;
    }
    if (filter === "completed" && !isCompleted) {
      task.style.display = "none";
      return;
    }
    task.style.display = "flex";
  });
}
function setActiveButton(buttonId) {
  document.querySelectorAll(".buttons button").forEach(function (btn) {
    btn.classList.remove("active");
  });
  document.getElementById(buttonId).classList.add("active");
}
document.getElementById("allButton").addEventListener("click", function () {
  filterTasks("all");
  setActiveButton("allButton");
});
document.getElementById("activeButton").addEventListener("click", function () {
  filterTasks("active");
  setActiveButton("activeButton");
});
document
  .getElementById("completedButton")
  .addEventListener("click", function () {
    filterTasks("completed");
    setActiveButton("completedButton");
  });
filterTasks("all");
setActiveButton("allButton");
