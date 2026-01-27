function openFeatures() {
  let allElems = document.querySelectorAll(".elem");
  let fullElemPage = document.querySelectorAll(".fullElem");
  let fullElemPageBackBtn = document.querySelectorAll(".fullElem .back");

  allElems.forEach(function (elem) {
    elem.addEventListener("click", function () {
      fullElemPage[elem.id].style.display = "block";
    });
  });

  fullElemPageBackBtn.forEach(function (back) {
    back.addEventListener("click", function () {
      fullElemPage[back.id].style.display = "none";
    });
  });
}
// openFeatures();

function todoList() {
  let form = document.querySelector(".addTask form");
  let taskInput = document.querySelector(".addTask form #task-input");
  let taskDetailsInput = document.querySelector(".addTask form textarea");
  let taskCheckBox = document.querySelector(".addTask form #check");

  var currentTask = [];

  if (localStorage.getItem("currentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  } else {
    console.log("Task list is empty");
  }

  function renderTask() {
    let allTask = document.querySelector(".allTask");
    let sum = "";

    currentTask.forEach(function (elem, idx) {
      sum += `<div class="task">
        <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
        <button id=${idx}>Mark as Completed</button>
        </div>`;
    });
    allTask.innerHTML = sum;
    localStorage.setItem("currentTask", JSON.stringify(currentTask));

    let markCompletedBtn = document.querySelectorAll(".task button");
    markCompletedBtn.forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentTask.splice(btn.id, 1);
        renderTask();
      });
    });
  }
  renderTask();

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    currentTask.push({
      task: taskInput.value,
      details: taskDetailsInput.value,
      imp: taskCheckBox.checked,
    });

    renderTask();

    taskInput.value = "";
    taskDetailsInput.value = "";
    taskCheckBox.checked = false;
  });
}
// todoList();

let hours = Array.from({length:18},(elem, idx) => `${6+idx}:00 - ${7+idx}:00`)

let wholeDaySum = "";
hours.forEach(function(elem){
  wholeDaySum += `<div class="day-planner-time">
            <p>${elem}</p>
            <input type="text" placeholder="...">
          </div>`;
})

let dayPlanner = document.querySelector('.day-planner');
dayPlanner.innerHTML = wholeDaySum;