const renderTasks = () => {
  for (let i = 0; i < tasksArr.length; i++) {
    let textTask = i + 1 + "." + tasksArr[i].text;
    // const liTask = document.createElement("li");
    // liTask.classList.add("li__task");
    // const btnDelTask = document.createElement("button");
    // btnDelTask.classList.add("btn__del-task");
    // btnDelTask.innerHTML = "Удалить задачу";
    // liTask.innerHTML = textTask;
    // liTask.append(btnDelTask);
    // div.appendChild(liTask);
    let colorClass = "";
    if (tasksArr[i].level === "level__low") {
      colorClass = "green";
    } else if (tasksArr[i].level === "level__medium") {
      colorClass = "yellow";
    } else {
      colorClass = "red";
    }
    const html = `
  <li class="li__task ${colorClass}"> ${textTask}
    <button data-id="${tasksArr[i].id}" class="btn__del-task">Удалить задачу</button>
  </li>
    `;
    div.insertAdjacentHTML("beforeend", html);

    // const liTask = document.querySelectorAll(".li__task");
    // console.log(liTask);
  }
  const btnsDelTask = document.querySelectorAll(".btn__del-task");
  for(let i = 0; i < btnsDelTask.length; i++){
    console.log(btnsDelTask[i])
  }
};

let time = Date.now();
// console.log(time)
