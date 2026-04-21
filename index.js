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
  checkbox.addEventListener("change", function() {
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
