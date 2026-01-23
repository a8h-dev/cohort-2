// Object Oriented Concepts in JavaScript

// - Introduction to OOPS in JavaScript
// - Understanding `classes` and `objects` in JavaScript
// - Understanding `Constructor` and `Prototypes` - [`this keyword`, `call`, `apply`, `bind`]

// - More Topics in OOPS - [`class expression`, `hoisting`, `inheritence`, `getter & setter`]


// -----------------------------------

// OOP
// modular, maintainable, scalable, easy to manage

// class Bottle{
//     constructor(){
//         this.color = "blue";
//         this.material = "plastic";
//         this.price = 132;
//     }
//     fill(){}
//     drink(){}
// }
// let bottle1 = new Bottle();
// let bottle2 = new Bottle();


// - Understanding `Constructor` and `Prototypes` - [`this keyword`, `call`, `apply`, `bind`]

class Sketch{
    constructor(){
        this.character = "doraemon";
        this.color = "blue";
        this.somefnc = function (){};
    }
    // constructor ke bahar kuch bhi add krenge wo apne aap prototype pe chala jata hai.
    speak(){};
    walk(){};
}
// ya aise bhi kar sakte hain prototype pe add
// Sketch.prototype.speak = function(){};
// Sketch.prototype.walk = function(){};

let c1 = new Sketch();


// object mechanism in back
// let obj = new Object();
// check it's prototype


// ----------- "this keyword"
// "this" ek special keyword hota hai.
// kyuki iski value badal jati hai.
// like kiske respect me baat kr rhe ho.

// global -> window
// console.log(this);

// function -> window
// function checkThis(){
//     console.log(this);
// }
// checkThis();

// es5 function inside object -> object
// let obj = {
//     name: "abhishek",
//     fnc: function(){
//         console.log(this);
//     }
// }
// obj.fnc();

// es6 function inside object -> window
// let obj = {
//     name: "abhishek",
//     fnc: () => {
//         console.log(this);
//     }
// }
// obj.fnc();

// es5 function inside es5 function inside object -> window
// let obj = {
//     name: "abhishek",
//     fnc: function(){
//         function abc(){
//             console.log(this);
//         }
//         abc();
//     }
// }
// obj.fnc();

// es6 function inside es5 function inside object -> object
// let obj = {
//     name: "abhishek",
//     fnc: function(){
//         let abc = () => {
//             console.log(this);
//         }
//         abc();
//     }
// }
// obj.fnc();

// arrow function this ki value apne parent se leta hai.


// -------`call`, `apply`, `bind`

// ek function me this ki value window hoti hai, agar aap cahte ho ki wo value window naa ho par koi aur object ho tab aap use kar sakte ho call apply bind ka.

let obj = {
    name: "Abhishek"
}

// call -> fnc chalata hai and this ki value set karta hai
// function abcd(a, b, c){
//     console.log(this);
// }
// abcd.call(obj, 1, 2, 3);

// apply -> wahi karta hai jo call karta hai and arguments mein pehli value this ki and dusri value array hoti hai.
// function abcd(a, b, c){
//     console.log(this);
//     console.log(a, b, c);
// }
// abcd.apply(obj, [1, 2, 3]);

// bind -> wahi karta hai jo call karta hai and aapko naya function deta hai.
// function abcd(a, b, c){
//     console.log(this);
//     console.log(a, b, c);
// }
// let newfnc = abcd.bind(obj, 1, 2, 3);
// newfnc();