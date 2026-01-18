// Math.random();
// Math.floor();
// Web APIs

// GLSL -> asked by student

let box = document.querySelector(".box");
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
});

// TASK : 
// Make a IPL 2026 winner guessing game
// team
// primary
// secondary
// fullName
// trophies
// caption