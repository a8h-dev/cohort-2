// Object Oriented Concepts in JavaScript

// - Introduction to OOPS in JavaScript
// - Understanding `classes` and `objects` in JavaScript
// - Understanding `Constructor` and `Prototypes` - [`this keyword`, `call`, `apply`, `bind`]
// - More Topics in OOPS - [`class expression`, `hoisting`, `inheritence`, `getter & setter`]



// -----------------------------------------------------
// - Introduction to OOPS in JavaScript
// OOPS

// jab code chota hota hai to fir aap kuch bhi kar sakte ho bina koi guideline follow kiye and jab code bada ho jata hai tab role mein aata hai guidelines.

// ek kamra ek banda bana sakta hai
// naksa -> nhi
// architect -> nahi

// Spaghetti code
// jab bhi bada software banta hai waise code nhi likhte jaise poore dom mein aapne dekha hai.

// OOP
// faila hua code -> objects classes and functions

// Why OOP?
// modular
// scalable
// manageable
// reuse 
// easy to fix

// -----------------------------------------------------

// let name = "Abhishek";
// let age = 19;
// let email = "abhi@gmail.com";
// let address = "Bhopal, Madhya Pradesh";

// ek bande ki details ek sath rakhne ke liye aapke pass hai objects

let user1 = {
    name: "Abhishek",
    age: 19,
    email: "abhi@gmail.com",
    address: "Bhopal, Madhya Pradesh"
}
let user2 = {
    name: "Arohi",
    age: 19,
    email: "abhi@gmail.com",
    address: "Ranchi, Madhya Pradesh"
}

// -----------------------------------classes
// blueprint

// class -> saancha
// constructor -> automatic chalne wala function

// class Remote{
//     constructor(product, price, color){
//         this.product = product;
//         this.price = price;
//         this.color = color;
//     }
//     powerOn(){
//         console.log("this machine is on now.");
//     }
//     powerOff(){
//         console.log("this machine is off now.");
//     }
// }
// let remote1 = new Remote("Lenovo", 2300, "grey");
// let remote2 = new Remote("Diakin", 13230, "white");



// --------------------------------classes

// classes banate hain taaki hame har baar ek naya object mil jaaye.
// classes object ki factory hai
// har baar "new" word ke sath class run karoge toh ek naya object milega

// jab bhi class banate ho class ka naam capital letter se suru hona jruri hai.
// class ke andar hamesha pehli chiz constructor banani hai.
// jab constructor chalta hai, "this" ki value ek naya object hota hai

// class BiscuitMaker{
//     constructor(){
//         this.name = "ParleG";
//         this.price = 5
//     }
// }

// // jab kabhi bhi "new" word dikhe, "new" -> Blank Object
// let biscuit1 = new BiscuitMaker();
// let biscuit2 = new BiscuitMaker();
// let biscuit3 = new BiscuitMaker();
// let biscuit4 = new BiscuitMaker();



class Kitaab{
    constructor(name, price, author, color){
        this.name = name,
        this.price = price,
        this.author = author,
        this.color = color
    }
    pannaPalto(){}
    bookmarkLagao(){}
    padhlo(){}
}

class User{
    constructor(){
        this.username = "Abhishek";
        this.age = 27;
        this.email = "abhi@gmail.com" 
    }
    khaanaKhaao(){}
    saansLo(){}
}

let k1 = new Kitaab("moral", 120, "abhishek mahto", "white");
let k2 = new Kitaab("computer science", 890, "gopi bahu", "red");
let k3 = new Kitaab("constitution", 362, "Swatantrata Senanies", "dark blue");


// this
// "this" ki value likhte waqt nhi chalte waqt decide hoti hai

// constructor
// ek function jo automatic chalta hai jaise hi class se new instance banaya jata hai.


// Chat GPT se padha karo thoda khudse.