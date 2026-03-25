const renderTasks = (arr) => {
  div.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let textTask = arr[i].text;
    let themeTask = arr[i].theme;
    let colorClass = "";
    if (arr[i].level === "level__low") {
      colorClass = "green";
    } else if (arr[i].level === "level__medium") {
      colorClass = "yellow";
    } else if (arr[i].level === "level__high") {
      colorClass = "red";
    } else {
      colorClass = "gray";
    }

    let resultCheck = "";
    let resultWin = "";
    if (arr[i].check === true) {
      resultCheck = "checked";
      resultWin = "Выполнено";
    }

    const html = `
<li class="li__task">
  <div class="tasks">
    <span class="circle ${colorClass}"></span>
    <div>
      <p>Тема: ${themeTask}</p>
      <p>Задача: ${textTask}</p>
    </div>
    <button data-id="${arr[i].id}" class="btn__del-task">Удалить</button>
    <div>
      <input class="checkbox" type="checkbox" ${resultCheck} />
      <span class="check__span">${resultWin}</span>
    </div>
  </div>
</li>
    `;

    div.insertAdjacentHTML("beforeend", html);
  }
  checkTask();
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

function checkTask() {
  const checkbox = document.querySelectorAll(".checkbox");
  const checkSpan = document.querySelectorAll(".check__span");

  checkbox.forEach((el, i) => {
    el.addEventListener("change", () => {
      if (el.checked === true) {
        tasksArr[i].check = true;
        localStorage.setItem("Tasks", JSON.stringify(tasksArr));
        checkSpan[i].innerHTML = "Выполнено";
      } else if (el.checked === false) {
        tasksArr[i].check = false;
        localStorage.setItem("Tasks", JSON.stringify(tasksArr));
        checkSpan[i].innerHTML = "";
      }
    });
  });
}

selectShow.addEventListener("change", (event) => {
// const filterTasks = []
  // if (event.target.value === "win__task") {
  //   for (let obj of tasksArr) {
  //     if (obj.check === true) {
  //       filterTasks.push(obj);
  //     }
  //   }
  // } else if (event.target.value === "all-win__task") {
  //   for (let obj of tasksArr) {
  //       filterTasks.push(obj);
  //   }
  // }

  //   renderTasks(filterTasks);

  if (event.target.value === "win__task") {
    filterTasks = tasksArr.filter((task) => {
      return task.check === true;
    });
  } else if (event.target.value === "all-win__task") {
    filterTasks = tasksArr;
  }
  // if (event.target.value === "win__task") {
  //   for (let obj of tasksArr) {
  //     if (obj.check === true) {
  //       filterTasks.push(obj);
  //     }
  //   }
  // } else if (event.target.value === "all-win__task") {
  //   for (let obj of tasksArr) {
  //     filterTasks.push(obj);
  //   }
  // }
  renderTasks(filterTasks);
});
