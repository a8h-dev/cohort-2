let btnQ = document.querySelector("#btnQ");
let btnW = document.querySelector("#btnW");
let btnE = document.querySelector("#btnE");
let btnR = document.querySelector("#btnR");
let btnT = document.querySelector("#btnT");
let btnA = document.querySelector("#btnA");
let btnS = document.querySelector("#btnS");
let btnD = document.querySelector("#btnD");
let btnF = document.querySelector("#btnF");
let btnG = document.querySelector("#btnG");
let btnH = document.querySelector("#btnH");
let btnJ = document.querySelector("#btnJ");
let btnK = document.querySelector("#btnK");
let btnL = document.querySelector("#btnL");
let btnZ = document.querySelector("#btnZ");
let btnX = document.querySelector("#btnX");
let btnC = document.querySelector("#btnC");
let btnV = document.querySelector("#btnV");
let btnB = document.querySelector("#btnB");
let btnN = document.querySelector("#btnN");
let btnM = document.querySelector("#btnM");

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");
let btn9 = document.querySelector("#btn9");
let btn0 = document.querySelector("#btn0");
let btnY = document.querySelector("#btnY");
let btnU = document.querySelector("#btnU");
let btnI = document.querySelector("#btnI");
let btnO = document.querySelector("#btnO");
let btnP = document.querySelector("#btnP");

btn1.addEventListener("click", function () {
  new Audio("./28.mp3").play();
});
btn2.addEventListener("click", function () {
  new Audio("./29.mp3").play();
});
btn3.addEventListener("click", function () {
  new Audio("./30.mp3").play();
});
btn4.addEventListener("click", function () {
  new Audio("./31.mp3").play();
});
btn5.addEventListener("click", function () {
  new Audio("./32.mp3").play();
});
btn6.addEventListener("click", function () {
  new Audio("./33.mp3").play();
});
btn7.addEventListener("click", function () {
  new Audio("./34.mp3").play();
});
btn8.addEventListener("click", function () {
  new Audio("./35.mp3").play();
});
btn9.addEventListener("click", function () {
  new Audio("./36.mp3").play();
});
btn0.addEventListener("click", function () {
  new Audio("./37.mp3").play();
});
btnY.addEventListener("click", function () {
  new Audio("./38.mp3").play();
});
btnU.addEventListener("click", function () {
  new Audio("./39.mp3").play();
});
btnI.addEventListener("click", function () {
  new Audio("./40.mp3").play();
});
btnO.addEventListener("click", function () {
  new Audio("./41.mp3").play();
});
btnP.addEventListener("click", function () {
  new Audio("./42.mp3").play();
});

btnQ.addEventListener("click", function () {
  new Audio("./43.mp3").play();
});
btnW.addEventListener("click", function () {
  new Audio("./44.mp3").play();
});
btnE.addEventListener("click", function () {
  new Audio("./45.mp3").play();
});
btnR.addEventListener("click", function () {
  new Audio("./46.mp3").play();
});
btnT.addEventListener("click", function () {
  new Audio("./47.mp3").play();
});
btnA.addEventListener("click", function () {
  new Audio("./48.mp3").play();
});
btnS.addEventListener("click", function () {
  new Audio("./49.mp3").play();
});
btnD.addEventListener("click", function () {
  new Audio("./50.mp3").play();
});
btnF.addEventListener("click", function () {
  new Audio("./51.mp3").play();
});
btnG.addEventListener("click", function () {
  new Audio("./52.mp3").play();
});
btnH.addEventListener("click", function () {
  new Audio("./53.mp3").play();
});
btnJ.addEventListener("click", function () {
  new Audio("./54.mp3").play();
});
btnK.addEventListener("click", function () {
  new Audio("./55.mp3").play();
});
btnL.addEventListener("click", function () {
  new Audio("./56.mp3").play();
});
btnZ.addEventListener("click", function () {
  new Audio("./57.mp3").play();
});
btnX.addEventListener("click", function () {
  new Audio("./58.mp3").play();
});
btnC.addEventListener("click", function () {
  new Audio("./59.mp3").play();
});
btnV.addEventListener("click", function () {
  new Audio("./60.mp3").play();
});
btnB.addEventListener("click", function () {
  new Audio("./61.mp3").play();
});
btnN.addEventListener("click", function () {
  new Audio("./62.mp3").play();
});
btnM.addEventListener("click", function () {
  new Audio("./63.mp3").play();
});

let body = document.querySelector("body");

body.addEventListener("keydown", function (dets) {
  if (dets.repeat) return;

  switch (dets.key.toLowerCase()) {
    case "1":
      btn1.style.boxShadow = "none";
      btn1.style.marginTop = "10px";
      btn1.click();
      break;

    case "2":
      btn2.style.boxShadow = "none";
      btn2.style.marginTop = "10px";
      btn2.click();
      break;

    case "3":
      btn3.style.boxShadow = "none";
      btn3.style.marginTop = "10px";
      btn3.click();
      break;
    case "4":
      btn4.style.boxShadow = "none";
      btn4.style.marginTop = "10px";
      btn4.click();
      break;
    case "5":
      btn5.style.boxShadow = "none";
      btn5.style.marginTop = "10px";
      btn5.click();
      break;
    case "6":
      btn6.style.boxShadow = "none";
      btn6.style.marginTop = "10px";
      btn6.click();
      break;
    case "7":
      btn7.style.boxShadow = "none";
      btn7.style.marginTop = "10px";
      btn7.click();
      break;
    case "8":
      btn8.style.boxShadow = "none";
      btn8.style.marginTop = "10px";
      btn8.click();
      break;
    case "9":
      btn9.style.boxShadow = "none";
      btn9.style.marginTop = "10px";
      btn9.click();
      break;
    case "0":
      btn0.style.boxShadow = "none";
      btn0.style.marginTop = "10px";
      btn0.click();
      break;
    case "y":
      console.log("Hello");
      btnY.style.boxShadow = "none";
      btnY.style.marginTop = "10px";
      btnY.click();
      break;
    case "u":
      btnU.style.boxShadow = "none";
      btnU.style.marginTop = "10px";
      btnU.click();
      break;
    case "i":
      btnI.style.boxShadow = "none";
      btnI.style.marginTop = "10px";
      btnI.click();
      break;
    case "o":
      btnO.style.boxShadow = "none";
      btnO.style.marginTop = "10px";
      btnO.click();
      break;
    case "p":
      btnP.style.boxShadow = "none";
      btnP.style.marginTop = "10px";
      btnP.click();
      break;

    case "q":
      btnQ.style.boxShadow = "none";
      btnQ.style.marginTop = "10px";
      btnQ.click();
      break;
    case "w":
      btnW.style.boxShadow = "none";
      btnW.style.marginTop = "10px";
      btnW.click();
      break;
    case "e":
      btnE.style.boxShadow = "none";
      btnE.style.marginTop = "10px";
      btnE.click();
      break;
    case "r":
      btnR.style.boxShadow = "none";
      btnR.style.marginTop = "10px";
      btnR.click();
      break;
    case "t":
      btnT.style.boxShadow = "none";
      btnT.style.marginTop = "10px";
      btnT.click();
      break;
    case "a":
      btnA.style.boxShadow = "none";
      btnA.style.marginTop = "10px";
      btnA.click();
      break;
    case "s":
      btnS.style.boxShadow = "none";
      btnS.style.marginTop = "10px";
      btnS.click();
      break;
    case "d":
      btnD.style.boxShadow = "none";
      btnD.style.marginTop = "10px";
      btnD.click();
      break;
    case "f":
      btnF.style.boxShadow = "none";
      btnF.style.marginTop = "10px";
      btnF.click();
      break;
    case "g":
      btnG.style.boxShadow = "none";
      btnG.style.marginTop = "10px";
      btnG.click();
      break;
    case "h":
      btnH.style.boxShadow = "none";
      btnH.style.marginTop = "10px";
      btnH.click();
      break;
    case "j":
      btnJ.style.boxShadow = "none";
      btnJ.style.marginTop = "10px";
      btnJ.click();
      break;
    case "k":
      btnK.style.boxShadow = "none";
      btnK.style.marginTop = "10px";
      btnK.click();
      break;
    case "l":
      btnL.style.boxShadow = "none";
      btnL.style.marginTop = "10px";
      btnL.click();
      break;
    case "z":
      btnZ.style.boxShadow = "none";
      btnZ.style.marginTop = "10px";
      btnZ.click();
      break;
    case "x":
      btnX.style.boxShadow = "none";
      btnX.style.marginTop = "10px";
      btnX.click();
      break;
    case "c":
      btnC.style.boxShadow = "none";
      btnC.style.marginTop = "10px";
      btnC.click();
      break;
    case "v":
      btnV.style.boxShadow = "none";
      btnV.style.marginTop = "10px";
      btnV.click();
      break;
    case "b":
      btnB.style.boxShadow = "none";
      btnB.style.marginTop = "10px";
      btnB.click();
      break;
    case "n":
      btnN.style.boxShadow = "none";
      btnN.style.marginTop = "10px";
      btnN.click();
      break;
    case "m":
      btnM.style.boxShadow = "none";
      btnM.style.marginTop = "10px";
      btnM.click();
      break;

    default:
      console.log("what?");
  }
});

body.addEventListener("keyup", function (dets) {
  if (dets.key.toLowerCase() === "1") {
    btn1.style.boxShadow = "";
    btn1.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "2") {
    btn2.style.boxShadow = "";
    btn2.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "3") {
    btn3.style.boxShadow = "";
    btn3.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "4") {
    btn4.style.boxShadow = "";
    btn4.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "5") {
    btn5.style.boxShadow = "";
    btn5.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "6") {
    btn6.style.boxShadow = "";
    btn6.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "7") {
    btn7.style.boxShadow = "";
    btn7.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "8") {
    btn8.style.boxShadow = "";
    btn8.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "9") {
    btn9.style.boxShadow = "";
    btn9.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "0") {
    btn0.style.boxShadow = "";
    btn0.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "y") {
    btnY.style.boxShadow = "";
    btnY.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "u") {
    btnU.style.boxShadow = "";
    btnU.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "i") {
    btnI.style.boxShadow = "";
    btnI.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "o") {
    btnO.style.boxShadow = "";
    btnO.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "p") {
    btnP.style.boxShadow = "";
    btnP.style.marginTop = "";
  }

  if (dets.key.toLowerCase() === "q") {
    btnQ.style.boxShadow = "";
    btnQ.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "w") {
    btnW.style.boxShadow = "";
    btnW.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "e") {
    btnE.style.boxShadow = "";
    btnE.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "r") {
    btnR.style.boxShadow = "";
    btnR.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "t") {
    btnT.style.boxShadow = "";
    btnT.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "a") {
    btnA.style.boxShadow = "";
    btnA.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "s") {
    btnS.style.boxShadow = "";
    btnS.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "d") {
    btnD.style.boxShadow = "";
    btnD.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "f") {
    btnF.style.boxShadow = "";
    btnF.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "g") {
    btnG.style.boxShadow = "";
    btnG.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "h") {
    btnH.style.boxShadow = "";
    btnH.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "j") {
    btnJ.style.boxShadow = "";
    btnJ.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "k") {
    btnK.style.boxShadow = "";
    btnK.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "l") {
    btnL.style.boxShadow = "";
    btnL.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "z") {
    btnZ.style.boxShadow = "";
    btnZ.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "x") {
    btnX.style.boxShadow = "";
    btnX.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "c") {
    btnC.style.boxShadow = "";
    btnC.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "v") {
    btnV.style.boxShadow = "";
    btnV.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "b") {
    btnB.style.boxShadow = "";
    btnB.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "n") {
    btnN.style.boxShadow = "";
    btnN.style.marginTop = "";
  }
  if (dets.key.toLowerCase() === "m") {
    btnM.style.boxShadow = "";
    btnM.style.marginTop = "";
  }
});
