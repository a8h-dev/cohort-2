// SECTION 1: Objects and OOPS Thinking (Foundation)
// 	1.	Create a user object that stores name and email and has a login method which prints “User logged in”.

// let user = {
//     name: "Abhishek Mahto",
//     email: "abhi@gmail.com",
//     login: function(){
//         console.log("User logged in");
//     }
// }
// user.login();


// 	2.	Imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.

// The goal of this section is to understand why keeping data and behavior together makes code easier to manage.


// without using a class.. Ummm Feels messy and repetitive.
// let user1 = {
//     name: "Abhishek Mahto",
//     email: "abhi@gmail.com",
//     login: function(){
//         console.log("User logged in");
//     }
// }
// user1.login();

// let user2 = {
//     name: "Abhishek Mahto",
//     email: "abhi@gmail.com",
//     login: function(){
//         console.log("User logged in");
//     }
// }
// user2.login();

// let user3 = {
//     name: "Abhishek Mahto",
//     email: "abhi@gmail.com",
//     login: function(){
//         console.log("User logged in");
//     }
// }
// user3.login();

// let user4 = {
//     name: "Abhishek Mahto",
//     email: "abhi@gmail.com",
//     login: function(){
//         console.log("User logged in");
//     }
// }
// user4.login();

// let user5 = {
//     name: "Abhishek Mahto",
//     email: "abhi@gmail.com",
//     login: function(){
//         console.log("User logged in");
//     }
// }
// user5.login();


// same logic using a class, yess it feels clear and not repetitive.
// class User{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }
//     loggedIn(){
//         console.log("User logged in");
//     }
// }
// let user1 = new User("Abhishek", "abhishek@gmail.com");
// let user2 = new User("Arohi", "arohi@gmail.com");
// let user3 = new User("Sakshi", "sakskhi@gmail.com");
// let user4 = new User("Arpita", "arpita@gmail.com");
// let user5 = new User("Megha", "megha@gmail.com");
// console.log(user1, user2, user3, user4, user5);
// console.log(user1.loggedIn())

// 3.	Create a product object that stores name and price and has a method which returns the final price after discount.

// let product = {
//     name: "Macbook",
//     price: 120000,
//     discountedPrice: function(discount){
//         console.log(this.price - discount);
//     }
// }
// product.discountedPrice(30000);

// ⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻

// SECTION 2: Classes and Objects
// 	4.	Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed
// 	5.	Create two different car objects from the same class and verify that their data is different.
// 	6.	Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?

// class Car{
//     constructor(brand, speed){
//         this.brand = brand;
//         this.speed = speed;
//     }
//     drive(){
//         return `${this.brand} - ${this.speed}`;
//     }
// }
// let car1 = new Car("Mercedes", "2cr");
// let car2 = new Car("Fortuner", "60lakhs");
// car1.drive();

// agar classes exists nhi karte toh ham boht repetitive and bada code likhna parta aur jab project bada ho jata hame boht presaani hoti code ko manage krne me

// ⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻

// SECTION 3: Constructor and this keyword
// 	7.	Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.

// class Student{
//     constructor(name, roll){
//         this.name = name;
//         this.roll = roll;
//     }
//     introduce(){
//         return `${this.name} - ${this.roll}`;
//     }
// }
// let s1 = new Student("Kajal", 73);
// let s2 = new Student("Kavya", 70);

// let sn = s1.introduce();

// 	8.	Inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why.

// pura mamla gadbad ho gya
// class Student{
//     constructor(name, roll){
//         name = name;
//         roll = roll;
//     }
//     introduce(){
//         return `${this.name} - ${this.roll}`;
//     }
// }
// let s1 = new Student("Kajal", 73);
// let s2 = new Student("Kavya", 70);

// let sn = s1.introduce();

// 	9.	Create an object with two methods:
// One method using a normal function
// One method using an arrow function

// Inside both, print this and observe the difference.

// The goal is to clearly understand how this works and when it changes.

// let obj = {
//     name: "Abhishek Mahto",
//     idhrAo: function(){
//         console.log(this);
//     },
//     udhrJao: () => {
//         console.log(this);
//     }
// }
// obj.idhrAo();
// obj.udhrJao();

// ⸻

// SECTION 4: Constructor Functions and Prototypes
// 	10.	Create a User constructor function (do not use class syntax).
// 	11.	Add a login method in two ways:
// First, inside the constructor
// Then, move the method to the prototype
// 	12.	Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.

// The purpose here is to understand how prototypes help share behavior efficiently.

// function Socks(name){
//     this.name = name;
//     this.login = function(){
//         console.log("logged in");
//     }
// }
// // Socks.prototype.login = function(){
// //     console.log("logged in");
// // };

// let s1 = new Socks("Moja");
// let s2 = new Socks("Aaja");

// // ans?
// s1.login === s2.login


// ⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻

// SECTION 5: call, apply, bind
// 	13.	Create a function that prints this.name.
// 	14.	Create an object that contains a name property.

// Use call to run the function using the object
// Use apply to run the function using the object
// Use bind to create a new function and then call it

function printName(a, b, c){
    console.log(this.name, a, b, c);
}

let obj = {
    name: "Abhishek"
}
let a = printName.bind(obj, [1, 2, 3]);
a();

// 	15.	Borrow a method from one object and run it for another object using call.

// TRY YOURSELF

// The goal is to understand how this can be manually controlled.