// task tooldog -- biylsen, niit, idevhteig
// task nemhed taskcontainer
// taskcontainer text uurclugddug
// task ustgadag -- 3 turluur 
// section soligddog style uurckugdunu

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const value = taskInput.value.trim();
  if (value === "") return;
  const li = document.createElement("li");
  li.textContent = value;
  taskList.appendChild(li);
  taskInput.value = "";
}