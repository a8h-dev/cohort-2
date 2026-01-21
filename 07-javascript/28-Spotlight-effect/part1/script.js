addEventListener("mousemove", function(e){
    console.log(e.clientX, e.clientY);

    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
})

// Task:

// same effect ko any iconic video ke sath create kro, more cool.