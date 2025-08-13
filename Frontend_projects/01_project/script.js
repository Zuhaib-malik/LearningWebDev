// document.addEventListener("DOMContentLoaded", () => {
//   const input = document.getElementById("input");
//   const taskbtn = document.getElementById("add-task-btn");
//   const todolist = document.getElementById("todo-list");

//   let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//   tasks.forEach(task => renderTask(task));

//   taskbtn.addEventListener("click", () => {
//     const tasktext = input.value.trim();
//     if (tasktext === "") return;
//     const newtask = {
//       id: Date.now(),
//       text: tasktext,
//       completed: false,
//     };
//     tasks.push(newtask);
//     savetasks();
//     input.value = "";
//   });
//   function renderTask(task) {
//     const li = document.createElement("li");
//     li.setAttribute('data-id', task.id);
//     li.innerHTML = `
//     <span>${task.text}</span>
//     <button>Delete</button>
//     `
//     todolist.appendChild(li);
//   }
  

//   function savetasks() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }
// });




document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  const taskbtn = document.getElementById("add-task-btn");
  const todolist = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => renderTask(task));

  taskbtn.addEventListener("click", () => {
    const tasktext = input.value.trim();
    if (tasktext === "") return;

    const newtask = {
      id: Date.now(),
      text: tasktext,
      completed: false,
    };

    tasks.push(newtask);
    savetasks();
    renderTask(newtask);
    input.value = "";
  });

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);

    const span = document.createElement("span");
    span.textContent = task.text;
    span.style.cursor = "pointer";
    span.style.textDecoration = task.completed ? "line-through" : "none";

    span.addEventListener("click", () => {
      task.completed = !task.completed;
      span.style.textDecoration = task.completed ? "line-through" : "none";
      savetasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // stop triggering span click
      tasks = tasks.filter(t => t.id !== task.id);
      savetasks();
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todolist.appendChild(li);
  }

  function savetasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
