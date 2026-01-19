let main = document.querySelector("main");
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let div = document.createElement("div");

    let num = Math.floor(Math.random()*100)
    let rotation = Math.floor(Math.random()*360)
    let borderRadius = Math.floor(Math.random()*100)
    let border = Math.floor(Math.random()*10)

    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)
    let bc1 = Math.floor(Math.random()*256)
    let bc2 = Math.floor(Math.random()*256)
    let bc3 = Math.floor(Math.random()*256)

    let x = Math.floor(Math.random()*100)
    let y = Math.floor(Math.random()*100)

    div.style.width = num+"px";
    div.style.height = num+"px";
    div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
    btn.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
    div.style.rotate = rotation+"deg";
    div.style.borderRadius = borderRadius+"px";
    div.style.border = `${border}px solid rgb(${bc1}, ${bc2}, ${bc3})`;
    div.style.position = "absolute";
    div.style.left = x+"%";
    div.style.top = y+"%";

    btn.style.position = "relative";
    btn.style.zIndex = "1";
    
    main.appendChild(div);
})