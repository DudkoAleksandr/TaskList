const renderTasks = () => {
  for (let i = 0; i < tasksArr.length; i++) {
    let textTask = i + 1 + "." + tasksArr[i].text;
    const taskContainer = document.createElement("div");
    const liTask = document.createElement("li");
    liTask.classList.add("li__task");
    const btnDelTask = document.createElement("button");
    btnDelTask.classList.add("btn__del-task");
    btnDelTask.innerHTML = "Удалить задачу";
    liTask.innerHTML = textTask;
    liTask.append(btnDelTask);
    div.appendChild(liTask);

    if (tasksArr[i].level === "level__low") {
      liTask.classList.add("green");
    } else if (tasksArr[i].level === "level__medium") {
      liTask.classList.add("yellow");
    } else {
      liTask.classList.add("red");
    }
  }
};
