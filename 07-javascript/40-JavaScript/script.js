// debouncing

// khud bhi padhna kyu, kya wagera wagera. Make it hobby.

// ChatGPT prompt:
// js code for applying debouncing to search bar in html with id of search.

function debounce(fn, delay){
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(fn, delay);
    }
}

document.querySelector("#search")
.addEventListener("input", 
    debounce(function(){
    console.log("chala");
}, 400));


// throttling

function throttle(fn, delay){
    let last = 0;
    return function(){
        const now = Date.now();
        if(now - last >= delay){
            last = now;
            fn();
        }
    }
}

window.addEventListener("mousemove", throttle(function(){
    console.log("chal rha");
}, 2000))


// json parse -> json se object banaate ho

JSON.stringify({name: "Abhishek", age: 19})

// json stringify -> json banate ho

JSON.parse('{"name":"Abhishek","age":19}');



// JavaScript SECTION ENDS HERE 

// FINAL WORDS FOR JavaScript by Harsh Bhaiya

// JavaScript kabhi khtm nhi hoti sabkuch nhi aata kabhi.
// But ek din aisa aata hai wo aaj bhi ho sakta hai ki bhai tum mujhe kuch task doge aur main smart hu main uper niche krte krte bana lunga wo. -> Aur isi ko developer kehte hain.