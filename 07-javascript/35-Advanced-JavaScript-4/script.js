// - Introduction to Asynchrony in JavaScript
// - Introduction to `callbacks` and Problems in Callbacks
// - Understanding `promises` - `pending` , `resolved` , `rejected`
// - How to prevent callback hell using `async` & `await`
// - `setInterval` & `setTimeout` in JavaScript

// - Introduction to Asynchrony in JavaScript
// js -> single threaded
// ek kaam ek baar me kar payegi
// synchronous approach
// asynchronous approach

// - Introduction to `callbacks` and Problems in Callbacks
// `callback` -> ek function jo turant nhi chalega jab aapka koi kaam complete hoga tab ye function chlta hai
// `callback` -> function me pass karte ho, any function passed into any function that is callback

// setTimeout(() => {
//     console.log("hey");
// }, 2000);

// getDataFromInstagram("a8h.dev", function(){
//     // callback
// })

// function abcd(fn){
//     fn(function(fn2){
//         fn2(function(){
//             console.log("hey");
//         });
//     });
// }
// abcd(function(fn){
//     fn(function(fn3){
//         fn3();
//     })
// })


// concept:
// function abcd(fn){
//     fn(function(fn3){
//         fn3(function(fn5){
//             fn5();
//         })
//     });
// }

// abcd(function(fn2){
//     fn2(function(fn4){
//         fn4(function(){
//             console.log("Callbacks");
//         })
//     })
// })

// real use:

//--
// Callbacks
// jab koi kaam ho jayega tab chalega usko kehte hain callbacks

// situation -> github se reporitory data laao

// getUserDetails(username, cb)
// getAllRepos(userid, cb)
// getRepoDetail(repos[0], cb)

// amitSeDetailsLaao(address, cb)
// dukaanKoDhundho(details, cb)
// samaanLelo(samaanlist, cb)
// ghatAaaKJaao(address, cb)

function amitSeDetailsLaao(address, cb){
    console.log("fetching details...")
    setTimeout(() => {
        cb({lat: 23.36, lng: 76.5});
    }, 3000);
}

amitSeDetailsLaao("Ranchi", function(details){
    console.log(details);
})