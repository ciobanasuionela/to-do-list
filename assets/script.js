let input = document.querySelector(".to-do-input");
let button = document.querySelector(".add-button");
let taskContainer = document.querySelector(".tasks-container");
let taskCounter = 1;

function handleClick() {
  let taskContent = input.value;
  if (taskContent.trim() !== "") {
    taskBuilder(taskContent);
  }
  input.value = "";
}


function taskBuilder(title) {  
  const taskBox = document.createElement("my-component");
  taskBox.title = title;
  taskBox.order = taskCounter;
  taskContainer.append(taskBox);
  taskCounter++;
}