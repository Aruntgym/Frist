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

console.log(1 == true);
// Ans: true

console.log(8 + + "10");
// Ans: 18

console.log(0 === null);
// Ans: false

const mynum = () => {
    return;
    return 9;
};
console.log(mynum() < 10);
// Ans: false

let result1 = ((x)=> {
    return x * 2;
})(10);
console.log(result1);
// Ans: 20

const x3 = [1, , 3];
console.log(x3.length); 
// Ans: 3

const obj = {
    num: 20
}
delete obj.num;
console.log(obj.num);
// Ans: undefined

const num = [1, 2, 3];
const num_2 = num.fill(0);
console.log(num_2)
// Ans: [0,0,0]
// Ans: (3) [0, 0, 0]0: 01: 02: 0length: 3[[Prototype]]: Array(0)

const x0 = !!0;
console.log(x0)
// Ans: false

const  a = [null, ,null];
console.log(a[1]);
// Ans: undefined

var xx = 10;
function myfun(){
    console.log(xx);
    var xx = 5
}
myfun();
// Ans: undefined

const num1 = 9;
if(true){
    const num1 = 5;
}
console.log(num1);
// Ans: 9

let num_1 = 10;
let num_02 = num_1 >> 1;
console.log(num_02);
// Ans: 5

var n = 11;
function myfun(n){
    if (n <= 1){
        return n;
    }
    return console.log(n);
}
myfun(15);
// Ans: 15

const x4 = undefined;
console.log(x4 == null);
// Ans: True

const x5 = null;
if(x5 == undefined) {
    function x111(y){
        console.log(y);
    }
    x111(10);
}
// Ans: 10

const allname = ["James", "Jess", "Lily", "Sevi"];
    for (let x = 0; x < allname.length; x++){
        if(x == 3){
            break;
        }
        console.log(allname[x]);
    }
    // Ans: James
    // script.js:161 Jess
    // script.js:161 Lily

    const sum = [1, 2, 3, 4];
     for (let i = 0; i < sum.length; i++) {
        if( i == 2) {
            continue;
        }
        console.log(sum[i]);
     }
// Ans: 1 2 4

const x4x = "web devs!";
console.log(x4x.startsWith("web"));
console.log(x4x.endsWith("devs"));
// Ans: true, false

//Write a code to display which character is coming how many times in a given string ?
// Code:
 const countOccurences=(str)=> {
  let exists={}
  for (let i= 0; i < str.length; i++) {
     if(exists[str[i]]) {
         exists[str[i]]+=1;
     }
     else {
       exists[str[i]]=1;
     }
  }
  for(let item in exists) {
     console.log("occurences of "+item+" is :"+exists[item])
  }
}
countOccurences('malayalam')

// output
// occurences of m is :2
// occurences of a is :4
// occurences of l is :2
// occurences of y is :1
