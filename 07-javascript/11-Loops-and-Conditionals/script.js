// I SOLVED ALL QUESTIONS

// const { use } = require("react");

// Level 1 - Pure Beginner Practice

// 1. Print numbers from 1 to 10
// Loop from 1 to 10 and print each number.

// Sol:
// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// 2. Print only even numbers from 1 to 10
// Use a loop and condition to print only even ones.

// Sol:
// for(let i = 1; i <= 10; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }

// 3. Print the word "Yes" 5 Times
// Reverse using a loop

// Sol:
// for (let i = 1; i <= 5; i++){
//     console.log(`${i} = "Yes"`)
// }

// for (let i = 5; i >= 1; i--){
//     console.log(`${i} = "Yes"`)
// }

// 4. Print wether numbers from 1 to 10 are even or odd
// For each number, check: even -> "Even", else -> "odd"

// Sol:
// for (let i = 1; i <= 10; i++){
//     if(i % 2 === 0){
//         console.log(`${i} is even`);
//     }
//     else{
//         console.log(`${i} is odd`);
//     }
// }

// 5. Ask user for a number and say if it's positive or negative
// Use prompt() and a conditional.

// Sol:
// let userInp = prompt("Enter a number");
// if(userInp >= 0){
//     console.log(`${userInp} is positive`);
// } else{
//     console.log(`${userInp} is negative`);
// }

// 6. Ask user for a number and say if it's positive or negative
// Use prompt() and a conditional.

// Sol:
// Already Done on 5th

// 7. Ask user's age and check if eligible to vote
// If age >= 18 -> "Eligible", else -> "Not eligible"

// Sol:
// let userAge = prompt("Enter your age");
// if (userAge >= 18){
//     console.log(`Your age is ${userAge}, It's >/=18, You're Eligible`);
// } else{
//     console.log(`Your age is ${userAge}, It's <18, You're Not Eligble`);
// }

// 8. Print multiplication table of 5
// Use loop to print 5 x 1 to 5 x 10.

// Sol:
// let tableOf = 5;
// for (let i = 1; i <= 10; i++){
//     console.log(`${tableOf} x ${i} = ${tableOf * i}`);
// }

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally

// Sol:
// let counter = 0;
// for (let i = 1; i <= 15; i++){
//     if (i > 8){
//         counter++;
//         console.log(`${i} is greater than 8`);
//     }
// }
// console.log(`Total number greater than 8 between 1 - 15 are '${counter}'`);

// 10. Ask user for password and print access status
// Hardcoded correct password, Compare with user input.

// Sol:
// let userPass = prompt("Enter your password");
// let correctPass = "abhi@123";
// if(userPass === correctPass){
//     console.log("Access Granted");
// } else{
//     console.log("Wrong Password !");
// }

// Level 2 - Slightly Tougher but Logical

// 11. Allow only 3 attemps to enter correct password
// If user gets it right early, stop. If not -> "Account Loacked"

// Sol:
// let correctPass = "abhi@123";
// let attemp = 0;
// let isLoggedIn = false;

// for (let i = 1; i <= 3; i++) {
//   let userPass = prompt("Enter your password");

//   if (userPass === correctPass) {
//     console.log("Access Granted");
//     isLoggedIn = true;
//     break;
//   } else {
//     console.log("Wrong Password !");
//     attemp++;
//   }
// }
// if (!isLoggedIn) {
//   console.log("Account Locked !");
// }

// 12. Ask user for words until they type "stop". Count how many times they types "yes"
// Loop until "stop" is typed. Count "yes".

// let isStopped = false;
// let counter = 0;

// while (isStopped !== true){
//     let userInp =  prompt("Enter yes or stop").toLowerCase();

//     if (userInp === "stop"){
//         console.log(`You said ${userInp}. So it STOPPED`);
//         console.log(`User said yes: ${counter} times`);
//         break;
//     }
//     else if (userInp === "yes"){
//         counter++;
//     }
//     else{
//         console.log("Say yes or stop only !");
//         break;
//     }

// }

// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// for (let i = 1; i <= 50; i++){
//     if(i % 7 === 0){
//         console.log(i);
//     }
// }

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

// let totalOdd = 0;
// for (let i = 1; i <= 30; i++){
//     if(i % 2 !== 0){
//         totalOdd += i;
//     }
// }
// console.log(totalOdd);

// 15. Keep asking number until user enters an even number.
// Use while loop. Stop only if input is even

// let isEven = false;
// while(isEven !== true){
//     let userInp = prompt("enter a number");
//     if(userInp % 2 === 0){
//         console.log(`Entered ${userInp}, It's Even. STOPPED`);
//         isEven = true;
//         break;
//     }
// }

// 16. Print numbers between two user inputs
// Input starts and end using prompt() -> print all between.

// let firstNum = prompt("enter number");
// let secondNum = prompt("enter number");

// if(firstNum < secondNum){
//     for(let i = firstNum; i <= secondNum; i++){
//         console.log(`Current Num: ${i}`);
//     }
//     console.log(`Your first number: ${firstNum}`)
//     console.log(`Your second number: ${secondNum}`)
// }

// if(firstNum > secondNum){
//     for(let i = firstNum; i >= secondNum; i--){
//         console.log(`Current Num: ${i}`);
//     }
//     console.log(`Your first number: ${firstNum}`)
//     console.log(`Your second number: ${secondNum}`)
// }

// if(firstNum === secondNum){
//     console.log("Both are equal !");
// }
