let img = document.querySelector("img");
let love = document.querySelector("#love");

img.addEventListener("dblclick", function(){
    love.style.opacity = "1";

    let x = Math.floor(Math.random()*100);
    let y = Math.floor(Math.random()*100);

    love.style.transform = `translate(-${x}%, -${y}%) scale(1) rotate(0deg)`;
    setTimeout(() => {
        love.style.transform = `translate(-${x}%, -350%) scale(0) rotate(66deg)`;
        love.style.opacity = "0";
    }, 800);
    setTimeout(() => {
        love.style.transform = `translate(-${x}%, -${y}%) scale(0) rotate(66deg)`;
        love.style.opacity = "0";
    }, 1000);
})