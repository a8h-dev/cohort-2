// promises
// async await
// settimeout and setinterval

// promises -> ek kaam jaake kro
// pending state
// ho jayega --> resolved
// nhi hoga --> reject

// facebook ke pass jao -> mera data lao
// pending
// resolve
// reject

// const prm = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve();
//     }, 3000);
// })

// prm.then(function(){
//     console.log("resolved");
// })

// prm.catch(function(){
//     console.log("rejected");
// })

// meta pe jaana async1234 -> koi data nhi aya -> reject -> aa gya toh resolved -> jabtak nhi aaya kuch tabtak pending

// let prm = new Promise((resolve, reject) => {
//     // logic to go to meta and get data
//     // if data aaya -> resolved
//     // else -> reject
// })

// prm.then(function(){
//     // resolved
// })
// prm.catch(function(){
//     // rejected
// })

// fetch se ksi bhi URL par ja sakte hain
// fetch(`https://randomuser.me/api/`)
// .then(function(data){
//     return data.json();
// })
// .then(function(realData){
//     console.log(realData);
// })

// fetch ka data readable nhi hota
// usey json banaake readable karte hain
// iske baad jo data milta hai wo readable hota hai

// fetch(`https://randomuser.me/api/`)
// .then((raw) => raw.json())
// .then(data => {
//     console.log(data.results[0].name.first);
// })
// .catch((err) => {
//     console.log(err);
// })

// fetch(`https://randomuser.me/api/`)
// .then(function(notReadableData){
//     return notReadableData.json();
// })
// .then(function(asliData){
//     console.log(asliData.results[0].name);
// })

// -----------------------
// async await
// async await promise pe kaam krta hai

// function getNum() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10);
//       if (num < 5) {
//         resolve("resolved");
//       } else reject("rejected");
//     }, 3000);
//   });
// }

// async function abcd(){
//     let v = await getNum();
//     console.log(v);
// }

// abcd();

// async function abcd(){
//     let raw = await fetch(`https://randomuser.me/api/`);
//     let data = await raw.json();
//     console.log(data);
// }
// abcd();


// ---------------------
// settimeout and setinterval
// already padhaya hua hai