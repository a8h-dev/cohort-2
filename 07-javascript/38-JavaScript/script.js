// - Introduction to Error Handling
// - Common types of errors in JavaScript - [`Syntax errors`, `Runtime errors`, `Logical errors`]
// - Understanding the Error object - [`message`, `name`, `stack`]
// - Handling exceptions using `try-catch`, `try-catch-finally`
// - How to Throw Errors in JavaScript
// - Error Handling in Asynchronous Code

// `syntax error` -> aapne code me likhte waqt galti kardi
// leht a = 12;
// format me galti

// `runtime error` -> code likhte waqt error nhi hai chalte waqt error hai
// function abcd(){
//     let a = 12;
//     console.log(a.name.first);
// }
// abcd();

// `logical errors` -> apke code ko kuch krna chahiye tha par wo kar kuch aur rha hai.
// function add(a, b){
//     return a - b;
// }
// console.log(add(3, 5));


// - Understanding the Error object - [`message`, `name`, `stack`]
// try {
//     let a = 12;
//     console.log(a.name.age);
// } catch (err) {
//     console.log(err.message);
//     console.log(err.name);
//     console.log(err.stack);
// }
// console.log("huihui");


// - Handling exceptions using `try-catch`, `try-catch-finally`

// chahe aapke code me diqqt ho ya na ho par kuch karna hai toh wo finally ke andar likha jata hai, ex.. loader
try {
    let a = 12;
    console.log(a.name.address);
} catch (err) {
    throw new Error("Something went wrong from our side, please wait for sometime.")
} finally {
    console.log("main toh chalunga");
}