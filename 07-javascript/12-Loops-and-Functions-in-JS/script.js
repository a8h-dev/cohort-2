// More Questions:

// const { use } = require("react");

// 17. Print only first 3 odd numbers from 1 to 20 Use loop. Stop with break after 3 odd prints.

// let counter = 0;
// for (let i = 1; i <= 20; i++){
//     if(i % 2 !== 0){
//         counter++;
//         console.log(i);
//     }
//     if(counter === 3){
//         break;
//     }
// }

// 18. Ask user 5 numbers. Count how many are positive. 
// Use loop + condition + counter

// let counter = 0;
// for (let i = 1; i <= 5; i++){
//     let userInp = prompt("Enter number");
//     if(userInp >= 0){
//         console.log(`${userInp} is positive`);
//         counter++;
//     } else{
//         console.log(`${userInp} is negative`);
//     }
// }
// console.log(`Total positive num: ${counter}`);

// 19. ATM Simulator - Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance - deduct
// Else -> print "Insufficient Balance"

// let totalBal = 1000;

// for(let i = 1; i <= 3; i++){
//     userInp = prompt("enter withdrawal amount");
//     if (userInp <= totalBal){
//         totalBal -= userInp;
//         console.log(`Amout deducted ${userInp} || Current balance: ${totalBal}`);
//     } else{
//         console.log(`${totalBal} Insufficient Balance`);
//     }
// }



// - `do...while` in JavaScript
// - Recursion in JavaScript
// - Loop control statements - [`break`, `continue`]

// Functions in JavaScript
// - Understanding Function in JavaScript and why its widely used - [parameters, arguments, rest parameters, hoisting, variable hoisting, function hoisting];