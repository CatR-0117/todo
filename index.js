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
        ${input.value}</div>
        <span class="deleteButton" onclick="this.parentElement.remove()">Delete</span>
    `;

  taskList.appendChild(li);
  input.value = "";
}
