const div = document.querySelector(".div");
const btnClick = document.querySelector(".btn__click");
const input = document.querySelector(".input");
const btnDel = document.querySelector(".btn__del");
const selectLevel = document.querySelector(".select__level");
const tasksArr = [];

document.addEventListener("DOMContentLoaded", function () {
  if (tasksArr.length === 0) {
    div.innerHTML = "Нет добавленных задач";
  }
  renderTasks();
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
    renderTasks();
    input.value = "";
    // console.log(tasksArr);
  }
});

btnDel.addEventListener("click", function () {
  div.innerHTML = "";
  // tasks.length = 0 первый вариант очистить массив
  tasksArr.splice(0, tasksArr.length); //второй способ
});

