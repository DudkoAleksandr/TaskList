const div = document.querySelector(".div");
const btnClick = document.querySelector(".btn__click");
const themeTask = document.querySelector(".theme__task");
const input = document.querySelector(".input");
const hiddenBlock = document.querySelector(".form");
const btnAddTask = document.querySelector(".add__task");
const btnDel = document.querySelector(".btn__del");
const selectLevel = document.querySelector(".select__level");
const search = document.querySelector(".search");
const sortTasks = document.querySelector(".select__sort-tasks");
const modalClose = document.querySelector(".modal__close");
const tasksArr = JSON.parse(localStorage.getItem("Tasks")) || [];
const selectShow = document.querySelector(".select__show-tasks");

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
      theme: themeTask.value,
      text: input.value,
      id: Date.now(),
      level: selectLevel.value,
      check: '',
    };
    tasksArr.push(newTask);
    localStorage.setItem("Tasks", JSON.stringify(tasksArr));
    console.log(JSON.parse(localStorage.getItem("Tasks")));
    div.innerHTML = "";
    renderTasks(tasksArr);
    themeTask.value = "";
    input.value = "";
  }
  hiddenBlock.classList.add("hidden__tasks");
});

btnDel.addEventListener("click", function () {
  div.innerHTML = "";
  // tasks.length = 0 первый вариант очистить массив
  tasksArr.splice(0, tasksArr.length); //второй способ
  localStorage.setItem("Tasks", JSON.stringify(tasksArr));
  hiddenBlock.classList.add("hidden__tasks");
  div.innerHTML = "Нет новых задач";
});

modalClose.addEventListener("click", () => {
  hiddenBlock.classList.add("hidden__tasks");
  input.value = "";
});

search.addEventListener("input", (event) => {
  // console.log(event.target.value);
  const searchTasksArr = [];

  for (let taskArr of tasksArr) {
    if (taskArr.text.includes(search.value)) {
      searchTasksArr.push(taskArr);
    }
  }
  renderTasks(searchTasksArr);
});

sortTasks.addEventListener("change", () => {
  if (sortTasks.value === "name__task") {
    tasksArr.sort((a, b) => a.theme.localeCompare(b.theme));
    renderTasks(tasksArr);
  } else if (sortTasks.value === "main__task") {
    tasksArr.sort((a, b) => a.text.localeCompare(b.text));
    renderTasks(tasksArr);
  }
});

