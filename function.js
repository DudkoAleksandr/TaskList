const renderTasks = (arr) => {
  div.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let textTask = arr[i].text;
    let colorClass = "";
    if (arr[i].level === "level__low") {
      colorClass = "green";
    } else if (arr[i].level === "level__medium") {
      colorClass = "yellow";
    } else {
      colorClass = "red";
    }

    const html = `
  <li class="li__task"><span class="circle ${colorClass}"></span>  
 ${textTask}
  <button data-id="${arr[i].id}" class="btn__del-task">Удалить</button>
          <div>
          <input class="checkbox" type="checkbox" />
          <span class="check__span"></span>
        </div>

  </li>
    `;

    div.insertAdjacentHTML("beforeend", html);
    const checkbox = document.querySelector(".checkbox");

    checkbox.addEventListener("change", () => {
      const checkSpan = document.querySelector(".check__span");
      if (checkbox.checked === true) {
        textTask.check = "true";
        checkSpan.innerHTML = "Выполнено";
      } else if (checkbox.checked === false) {
        checkSpan.innerHTML = "";
      }
    });
  }
  delTask();
  if (arr.length === 0) {
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
      localStorage.setItem("Tasks", JSON.stringify(tasksArr));

      renderTasks(tasksArr);
    });
  }
}
