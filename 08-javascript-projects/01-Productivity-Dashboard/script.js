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
openFeatures();

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
todoList();

function dailyPlanner() {
  let dayPlanData = JSON.parse(localStorage.getItem("dayPlanData")) || {};
  let dayPlanner = document.querySelector(".day-planner");
  let hours = Array.from(
    { length: 18 },
    (elem, idx) => `${6 + idx}:00 - ${7 + idx}:00`,
  );

  let wholeDaySum = "";

  hours.forEach(function (elem, idx) {
    let savedData = dayPlanData[idx] || "";

    wholeDaySum += `<div class="day-planner-time">
            <p>${elem}</p>
            <input id=${idx} type="text" placeholder="..." value=${savedData}>
          </div>`;
  });

  dayPlanner.innerHTML = wholeDaySum;

  let dayPlannerInput = document.querySelectorAll(".day-planner input");

  dayPlannerInput.forEach(function (elem) {
    elem.addEventListener("input", function () {
      dayPlanData[elem.id] = elem.value;

      localStorage.setItem("dayPlanData", JSON.stringify(dayPlanData));
    });
  });
}
dailyPlanner();

function motivationQuote() {
  let motivationQuote = document.querySelector(".motivation2 h1");
  let motivationAuthor = document.querySelector(".motivation3 h2 span");

  async function fetchQuote() {
    let response = await fetch("https://api.quotable.io/random");
    let data = await response.json();
    motivationQuote.innerHTML = data.content;
    motivationAuthor.innerHTML = data.author;
  }
  fetchQuote();
}
motivationQuote();

function pomoTimer() {
  let totalSeconds = 25 * 60;
  let timer = document.querySelector(".pomo-timer h1");
  let startBtn = document.querySelector(".pomo-timer .start-timer");
  let pauseBtn = document.querySelector(".pomo-timer .pause-timer");
  let resetBtn = document.querySelector(".pomo-timer .reset-timer");
  let workSession = document.querySelector(".pomodoro-timer-fullpage .session");
  let isWorkSession = true;

  let timerInterval = null;

  function updateTime() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    timer.innerHTML = `${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;
  }

  function startTimer() {
    clearInterval(timerInterval);

    if (isWorkSession) {
      timerInterval = setInterval(() => {
        if (totalSeconds > 0) {
          totalSeconds--;
          updateTime();
        } else {
          isWorkSession = false;
          clearInterval(timerInterval);
          totalSeconds = 5 * 60;
          timer.innerHTML = `05:00`;
          workSession.innerHTML = "Take a Break";
          workSession.style.backgroundColor = "var(--blue)";
        }
      }, 1000);
    } else {
      timerInterval = setInterval(() => {
        if (totalSeconds > 0) {
          totalSeconds--;
          updateTime();
        } else {
          isWorkSession = true;
          clearInterval(timerInterval);
          totalSeconds = 25 * 60;
          timer.innerHTML = `25:00`;
          workSession.innerHTML = "Work Session";
          workSession.style.backgroundColor = "var(--green)";
        }
      }, 1000);
    }
  }

  function pauseTimer() {
    clearInterval(timerInterval);
  }
  function resetTimer() {
    clearInterval(timerInterval);
    totalSeconds = 25 * 60;
  }

  startBtn.addEventListener("click", function () {
    startTimer();
  });
  pauseBtn.addEventListener("click", function () {
    pauseTimer();
  });
  resetBtn.addEventListener("click", function () {
    resetTimer();
    updateTime();
  });
}
pomoTimer();

function weatherFunctionality() {
  let apiKey = ``;
  let city = `bhopal`;

  let data = null;
  var header1Time = document.querySelector(".header1 h1");
  var header1Date = document.querySelector(".header1 h2");
  var header2Temp = document.querySelector(".header2 h2");
  var header2Condition = document.querySelector(".header2 h4");
  var header2Precipitation = document.querySelector(".header2 .precipitation");
  var header2Humidity = document.querySelector(".header2 .humidity");
  var header2Wind = document.querySelector(".header2 .wind");

  async function weatherAPICall() {
    var response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`,
    );
    data = await response.json();

    header2Temp.innerHTML = `${data.current.temp_c} °C`;
    header2Condition.innerHTML = `${data.current.condition.text}`;
    header2Precipitation.innerHTML = `Precipitation: ${data.current.precip_in}%`;
    header2Humidity.innerHTML = `Humidity: ${data.current.humidity}%`;
    header2Wind.innerHTML = `Wind: ${data.current.wind_kph} km/h`;
  }
  weatherAPICall();

  var date = null;
  function timeDate() {
    const TotalDaysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const TotalMonthsOfYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    date = new Date();
    var dayOfWeek = TotalDaysOfWeek[date.getDay()];
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var tarik = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    header1Date.innerHTML = `${tarik} ${TotalMonthsOfYear[month]}, ${year}`;

    if (hours > 12) {
      header1Time.innerHTML = `${dayOfWeek}, ${String(hours - 12).padStart("2", "0")}:${String(minutes).padStart("2", "0")}:${String(seconds).padStart("2", "0")} PM`;
    } else {
      header1Time.innerHTML = `${dayOfWeek}, ${String(hours).padStart("2", "0")}:${String(minutes).padStart("2", "0")}:${String(seconds).padStart("2", "0")} AM`;
    }
  }
  setInterval(() => {
    timeDate();
  }, 1000);
}
weatherFunctionality();
