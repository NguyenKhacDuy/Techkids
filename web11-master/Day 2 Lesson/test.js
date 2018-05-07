// //new function for ES6
// var print= (callback) => {
//     console.log("Start print");
//     setTimeout(() =>{
//         console.log("Count done");
//         callback();
//     }, 1000);
// };

// var callbackFunction = () => {
//     console.log("End");
// };
// console.log("Start");
// print(callbackFunction);

// var a = 5;

// var print = () => {
//     console.log(a);
//     var b = 3;
//     console.log(b);
// }

// print();
// console.log(window.a);
// console.log(b);

// var countDown = (time) => {
//     for (let i = time; i >= 0; i--) {
//         setTimeout(() => {
//             console.log(i);
//         }, (time - i) * 1000);
//     }
// }

// countDown(5);

//let = scope only
//var = global