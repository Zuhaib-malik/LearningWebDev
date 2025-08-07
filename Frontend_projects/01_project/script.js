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
    input.value = "";
  });
  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute('data-id', task.id);
    li.innerHTML = `
    <span>${task.text}</span>
    <button>Delete</button>
    `
    todolist.appendChild(li);
  }
  

  function savetasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});






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
//     renderTask(newtask); // <-- Add this line
//     input.value = "";
//   });

//   function renderTask(task) {
//     const li = document.createElement("li");
//     li.textContent = task.text;
//     li.setAttribute("data-id", task.id);
//     li.style.textDecoration = task.completed ? "line-through" : "none";

//     // Optional: toggle complete on click
//     li.addEventListener("click", () => {
//       task.completed = !task.completed;
//       li.style.textDecoration = task.completed ? "line-through" : "none";
//       savetasks();
//     });

//     todolist.appendChild(li);
//   }

//   function savetasks() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }
// });

