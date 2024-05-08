const x = 9;
if(true){
    const x = 5;
}
console.log(x);
// Ans: 9

console.log(0.1 + 0.2 === 0.3);
// Ans: false

const arr = [1, 2, 3];
arr.length = 0;
console.log(arr);
// Ans : []

const person = {
    name: "Arun",
    age: 23,
    area: "city"
};
console.log(person.city);
// Ans: undefined

// let rF = 10;
// function check() {
//     console.log(rF);
//     let rF = 20;
// }
// check();
// Ans : ReferenceError

let xa = 10;
if(xa === "10") {
    console.log("Equal");
}else{
    console.log("Not Equal");
}
// Ans: Not Equal

console.log(2 ** 3);
// Ans: 8

let x1 = 5;
let y1 = 0;
let result;
if (y1 != 0){
    result = x1 / y1;
    console.log(result);
}else{
    console.log("Error: Division by zero");
} 
// Ans: Error: Division by zero

console.log(2 + "2" - 1);
// Ans: 21

console.log(0 == "");
// Ans: true

// function myFunction(){
//     var x2 = 10;
// }
// console.log(x2);
// Ans: ReferenceError
