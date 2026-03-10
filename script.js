const div = document.querySelector(".div");
const btnClick = document.querySelector(".btn__click");
const input = document.querySelector(".input");
const hiddenBlock = document.querySelector(".form");
const btnAddTask = document.querySelector(".add__task");
const btnDel = document.querySelector(".btn__del");
const selectLevel = document.querySelector(".select__level");
const search = document.querySelector(".search");
const tasksArr = [];

document.addEventListener("DOMContentLoaded", function () {
  if (tasksArr.length === 0) {
    div.innerHTML = "Нет добавленных задач";
  }
  renderTasks(tasksArr);
});

btnAddTask.addEventListener("click", () => {
  hiddenBlock.classList.toggle("hidden__tasks");
});

btnClick.addEventListener("click", function () {
  if (input.value != "") {
    const newTask = {
      text: input.value,
      id: Date.now(),
      level: selectLevel.value,
      done: true,
    };
    tasksArr.push(newTask);
    div.innerHTML = "";
    renderTasks(tasksArr);
    input.value = "";
  }
  hiddenBlock.classList.add("hidden__tasks");
});

btnDel.addEventListener("click", function () {
  div.innerHTML = "";
  // tasks.length = 0 первый вариант очистить массив
  tasksArr.splice(0, tasksArr.length); //второй способ
  hiddenBlock.classList.add("hidden__tasks");
  div.innerHTML = "Нет новых задач";
});

search.addEventListener("input", (event) => {
  // console.log(event.target.value);
  const searchTasksArr = [];

  for (let taskArr of tasksArr) {
    if (taskArr.text.includes(search.value)) {
      searchTasksArr.push(taskArr);
    }
  }
  renderTasks(searchTasksArr)
});

