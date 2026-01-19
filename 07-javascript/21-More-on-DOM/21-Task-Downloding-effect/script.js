let btn = document.querySelector("button");
let inner = document.querySelector(".inner");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let timeShow = document.querySelector(".time-show");

btn.addEventListener("click", function(){
    btn.style.pointerEvents = "none";
    let num = 10 + Math.floor(Math.random()*50);
    let a = 0;
    let int =setInterval(() => {
        a++;
        h2.innerHTML = a+"%";
        inner.style.width = a+"%";
    }, num * 10);
    setTimeout(() => {
        clearInterval(int);
        btn.innerHTML = "Downloaded";
        btn.style.opacity = 66+"%";
        h3.innerHTML = `Your file has been downloaded.`;
    }, (num * 10) * 100);

    h3.style.display = "initial";
    timeShow.innerHTML = `${num * 10 / 10} seconds`
})