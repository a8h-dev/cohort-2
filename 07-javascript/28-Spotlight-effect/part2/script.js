const para = document.querySelector("p");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = para.innerHTML;

para.addEventListener("mouseenter", function(){
    
    setInterval(() => {

        const str = text.split("").map((char, index)=>{
            return characters.split("")[Math.floor(Math.random() * 53)];
        }).join("");
        para.innerHTML = str;

    }, 100);
})

// TASK:
// Sare topics ko pehle ache se padho aur samjho fir aram se banega.
// split, join, etc