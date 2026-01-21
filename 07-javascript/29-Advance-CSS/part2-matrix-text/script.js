const p = document.querySelector("p");
const text = p.innerText;

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let iteration = 0;

function randomText(){

    const str =  text.split("").map((char, index) => {
        if(index < iteration){
            return char;
        }
        return characters.split("")[Math.floor(Math.floor(Math.random()*53))];
    }).join("");

    p.innerText = str;
    iteration += 0.2;
}

// setIntervall ke andar ko ham callback bhi bolte hain JavaScript ke language me.
setInterval(randomText, 30);
