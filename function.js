const renderTasks = () => {
  div.innerHTML = "";
  for (let i = 0; i < tasksArr.length; i++) {
    let textTask = tasksArr[i].text;
    let colorClass = "";
    if (tasksArr[i].level === "level__low") {
      colorClass = "green";
    } else if (tasksArr[i].level === "level__medium") {
      colorClass = "yellow";
    } else {
      colorClass = "red";
    }

    const html = `
  <li class="li__task"><span class="circle ${colorClass}"></span>  
 ${textTask}
  <button data-id="${tasksArr[i].id}" class="btn__del-task">Удалить</button>
  </li>
    `;
    div.insertAdjacentHTML("beforeend", html);
  }
  delTask();
  if (tasksArr.length === 0) {
    div.innerHTML = "Нет новых задач";
  }
};

function delTask() {
  const btnsDelTask = document.querySelectorAll(".btn__del-task");

  for (let i = 0; i < btnsDelTask.length; i++) {
    btnsDelTask[i].addEventListener("click", () => {
      // console.log(btnsDelTask[i].dataset.id);
      // for (let arr of tasksArr) {
      //   if(Number(btnsDelTask[i].dataset.id) === arr.id){
      //   }
      // }

      const deltask = tasksArr.findIndex((task) => {
        if (task.id === Number(btnsDelTask[i].dataset.id)) {
          return task;
        }
      });
      tasksArr.splice(deltask, 1);

      renderTasks();
      console.log(tasksArr);
    });
  }
}
