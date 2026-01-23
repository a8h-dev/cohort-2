// - More Topics in OOPS - [`class expression`, `hoisting`, `inheritence`, `getter & setter`]


// "class expression" -> boht kam hi use hota hai
// farak ye hai ki yeha pe "hoisting" possible nhi hai
// let Animal = class{
//     constructor(){
//         this.name = "Dodo";
//         this.breed = "dog";
//     }
// };

// let ani1 = new Animal();


// "inheritence"
// agar koi class hai jisme kuch kuch likha hai and aap mante ho ek nayi class usi ka extension hai toh aap wo saare features purani class se borrow kar sakte ho and nayi class mein use kar sakte ho and apne naye features bhi bana sakte ho.

// // base class (common)
// class Animal{
//     constructor(){
//         this.hands = 2;
//         this.legs = 2;
//     }
//     eat(){};
//     breathe(){};
// }

// class Kekda extends Animal{
//     constructor(){
//         super();
//         this.legs = 8;
//         this.hands = 0;
//     }
//     susu(){};
// }

// let k1 = new Kekda();


// class Marker{}
// class BlueMarker extends Marker {}


// "getter & setter"
// Problem
// class Animal{
//     constructor(){
//         this._age = 12;
//     }
// }

// let a1 = new Animal();
// a1._age = 27;


// but we have gatekeepers
class Animal{
    constructor(){
        this._age = 12;
    }
    set age(val){
        if(val < 0){
            console.error("not");
            return;
        }
        this._age = val;
        return this._age;
    }
    get age(){
        return this._age;
    }
}

let a1 = new Animal();
a1.age = 37;