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

function Harry(name){
  this.name = name;
}
const dog = new Harry("Bubby");
console.log(dog instanceof Harry)
// Ans: true

const al = [1, 2, 3, 4, 5];
al.length = 3;
console.log(al)
// Ans: (3) [1, 2, 3]0: 11: 22: 3length: 3[[Prototype]]: Array(0)

// var fun = "500";
// function fun(fun){
//   console.log(fun);
// }
// fun(1313);
// Ans: Error

const a1 = "world";
console.log(`Hello ${a1}`);
// Ans: Hello world

let a11 = 3;
let b = a11 ** 2;
console.log(b);
// Ans: 9

let nums1 = [4, 9, 16, 25];
let sqrt = nums1.map(num => Math.sqrt(num));
console.log(sqrt); 
// Ans: 2,3,4,5

var xt = true + false;
console.log(xt)
//Ans: 1

const fruits = ["Banana", "Orange", "Apple", "Mango"]
//Ans: Array.isArray(fruits)

const xty = 10;
const yty = 8;
const zty = (xty > yty)? xty : yty;
console.log(zty);
//Ans: 10

console.log(typeof(NaN));
//Ans: Number

console.log(1);
setTimeout(function(){
  console.log(2);
}, 0);
console.log(3);
//Ans: 132

function age(...args){
  console.log(typeof args);    
};
age(10);
//Ans: Object

const fruit_s = ['apple', 'banana', 'orage'];
fruit_s[3] = 'grape';
console.log(fruit_s.length);
//

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

function palindrome(str)
  {
    var flag=0;
     for(var i=0,j=str.length-1;i<(str.length/2)&&j>0; i++,j--)
     {
     if(str[i]!=str[j])
    flag=1;
    
  }
  if(flag==1) {
     console.log("string "+str+" is not a palindrome");
         } else {
            console.log("string "+str+" is a palindrome"); 
         }
  }

  palindrome("malayalam"); //string malayalam is a palindrome
  palindrome("malaam"); //string malaam is not a palindrome

//   function returnMissingNumber(arr) {
//     let n=arr.length+1;
//     let sum=0;
//     for(let item of arr) {
//       sum+=item;
//     }
//     x=(n*(n+1)/2)-sum;
//     return x;
//    }

//    let arr=[1,2,3,5];
//    console.log(returnMissingNumber(arr));  //4

function arrangeNumber(arr) {  
  let zeroCount =0;
  for(let i=0;i < arr.length;i++) {
    if(arr[i]==0) {
      zeroCount += 1;
    }
  }
  
  for(let i=0;i < zeroCount;i++) {
      arr[i] = 0;
  }
  
  for(let i=zeroCount;i < arr.length;i++) {
   arr[i] = 1;
  }
  
  return arr;
}

const nums = [1,0,0,1,0,1,1];
const finalres= arrangeNumber(nums);
console.log('final result', finalres); // output : [0,0,0,1,1,1,1]

function checkPalindromeForAnagram(str) {
    const exists={};
    let oddCount=0;
    for(let i=0;i<str.length;i++) {
      if(exists[str[i]]) {
        exists[str[i]]++;
      }
      else {
        exists[str[i]]=1;
      }
    }
    for(let key in exists) {
       if(exists[key]%2!==0) {
         oddCount++;
       }
    }
    if((str.length%2==0 && oddCount ==0) || (str.length%2!==0 && oddCount == 1)) {
      return true;
    }
    else {
      return false;
    }
  }
  
  let str = 'adamm';
  let str2= 'caat';
  let result01= checkPalindromeForAnagram(str);
  let result2 = checkPalindromeForAnagram(str2)
  console.log('result', result01); //result will be true as rearranging string 'adamm' can be made as madam which is a palindrome
  console.log('result2', result2); //result will be false as rearranging string 'caat' cant be made as palindrome
  
   function reverse(str) {
 let result="";
 for(let i=str.length-1;i>=0;i--) {
   result+=str[i];
 }
 return result;
}

function reverseAllWords(str) {
 let result="";
 let start=0,end; 
 for (let i=0;i<str.length;i++) {
   if(str[i]==" ") {
     result+=reverse(str.slice(start,i))+str[i];
     start=result.length;
   }
   else if(i==str.length-1){
     result+=reverse(str.slice(start,i+1));
   }
 }
 return result;
}

console.log(reverseAllWords('how are you')) // woh era uoy

// 5. How to segregate 0s and 1s in an array in Javascript ?
// Steps to get the solution:
// Count the number of 0’s using ‘for’ loop and store it in a variable e.g zeroCount.
// Now we know that remaining items will be 1’s.
// Run ‘for’ loop till zeroCount, and replace the array items with 0. 4) Run one more ‘for’ loop to fill the remaining items with 1.
// Below is the code to segregate 0s and 1s in an array:
 function arrangeNumber(arr) {  
  let zeroCount =0;
  for(let i=0;i < arr.length;i++) {
    if(arr[i]==0) {
      zeroCount += 1;
    }
  }
  
  for(let i=0;i < zeroCount;i++) {
      arr[i] = 0;
  }
  
  for(let i=zeroCount;i < arr.length;i++) {
   arr[i] = 1;
  }
  
  return arr;
}

const nums01 = [1,0,0,1,0,1,1];
const finalres01= arrangeNumber(nums01);
console.log('final result', finalres01); // output : [0,0,0,1,1,1,1]

function checkPalindromeForAnagram(str) {
  const exists={};
  let oddCount=0;
  for(let i=0;i<str.length;i++) {
    if(exists[str[i]]) {
      exists[str[i]]++;
    }
    else {
      exists[str[i]]=1;
    }
  }
  for(let key in exists) {
     if(exists[key]%2!==0) {
       oddCount++;
     }
  }
  if((str.length%2==0 && oddCount ==0) || (str.length%2!==0 && oddCount == 1)) {
    return true;
  }
  else {
    return false;
  }
}

// let str = 'adamm';
// let str2= 'caat';
// let result = checkPalindromeForAnagram(str);
// let result2 = checkPalindromeForAnagram(str2)
// console.log('result', result); //result will be true as rearranging string 'adamm' can be made as madam which is a palindrome
// console.log('result2', result2); //result will be false as rearranging string 'caat' cant be made as palindrome


// ////////////////////////Pattern of numbers???????????????????????????

// let rows = 10;
// let pattern = "";
// for(let n = 1; n <= rows; n++){
//   for(let num = 1; num <= n; num++){
//     pattern += num;
//   }
//   pattern += "\n"
// }
// console.log(pattern)

// let rows1 = 8;
// let pattern1 = "";
// for(let n = 1; n <= rows1; n++){
//   for(let num = 1; num <= n; num++){
//     pattern1 += n;
//   }
//   pattern1 += "\n"
// }
// console.log(pattern1)
// ------

// 1. The function fizzBuzz applies the FizzBuzz logic to an input number and returns a specific output based on the conditions
//  Given a random number as input, what wilthe function return, and why?
//  Hints:
// The function first checks whether the input is a number If not, it returns NaN
//  It then checks if the input is divisible by both 3 and 5. If true, it returns fizzBuzz,
//  If the input is divisible by only 3, it returns 'Fizz" If the input is divisible by only 5, it returns 'Buzz" If none of the above conditions apply, it returs the input number itself.
// javaScript code

// 2/3

// ChatGPT
// The FizzBuzz function in JavaScript returns different outputs based on the input number according to the given conditions. Here is the JavaScript code for the FizzBuzz function along with explanations for each step:

// javascript
// Copy code
function fizzBuzz(input) {
    if (typeof input !== 'number') {
        return 'NaN';
    }

    if (input % 3 === 0 && input % 5 === 0) {
        return 'fizzBuzz';
    }

    if (input % 3 === 0) {
        return 'Fizz';
    }

    if (input % 5 === 0) {
        return 'Buzz';
    }

    return input;
}
Explanation:
// Check if input is a number:

// javascript
// Copy code
// if (typeof input !== 'number') {
//     return 'NaN';
// }
// If the input is not a number, the function returns 'NaN'.
// Check if input is divisible by both 3 and 5:

// javascript
// Copy code
// if (input % 3 === 0 && input % 5 === 0) {
//     return 'fizzBuzz';
// }
// If the input is divisible by both 3 and 5, the function returns 'fizzBuzz'.
// Check if input is divisible by only 3:

// javascript
// Copy code
// if (input % 3 === 0) {
//     return 'Fizz';
// }
// If the input is divisible by only 3, the function returns 'Fizz'.
// Check if input is divisible by only 5:

// javascript
// Copy code
// if (input % 5 === 0) {
//     return 'Buzz';
// }
// If the input is divisible by only 5, the function returns 'Buzz'.
// Return the input number if none of the above conditions apply:

// javascript
// Copy code
// return input;
// If the input is not divisible by 3 or 5, the function returns the input number itself.
// Examples:
// For an input of 15, the function returns 'fizzBuzz' because 15 is divisible by both 3 and 5.
// For an input of 9, the function returns 'Fizz' because 9 is divisible by 3.
// For an input of 10, the function returns 'Buzz' because 10 is divisible by 5.
// For an input of 7, the function returns 7 because 7 is not divisible by 3 or 5.
// For an input of 'hello', the function returns 'NaN' because the input is not a number.

// 1. The function fizzBuzz applies the FizzBuzz logic to an input number and returns a specific output based on the conditions
//  Given a random number as input, what wilthe function return, and why?
//  Hints:
// The function first checks whether the input is a number If not, it returns NaN
//  It then checks if the input is divisible by both 3 and 5. If true, it returns fizzBuzz,
//  If the input is divisible by only 3, it returns 'Fizz" If the input is divisible by only 5, it returns 'Buzz" If none of the above conditions apply, it returs the input number itself.
// javaScript code with output 

// 3/3

// ChatGPT
// Here's a JavaScript implementation of the FizzBuzz function based on your description:

// javascript
// Copy code
// function fizzBuzz(input) {
  // Check if the input is a number
  if (typeof input !== 'number') {
    return 'NaN';
  }

  // Check if the input is divisible by both 3 and 5
  if (input % 3 === 0 && input % 5 === 0) {
    return 'fizzBuzz';
  }

  // Check if the input is divisible by only 3
  if (input % 3 === 0) {
    return 'Fizz';
  }

  // Check if the input is divisible by only 5
  if (input % 5 === 0) {
    return 'Buzz';
  }

  // If none of the above conditions apply, return the input number itself
  return input;

// Test cases
console.log(fizzBuzz('test')); // NaN
console.log(fizzBuzz(15)); // fizzBuzz
console.log(fizzBuzz(9)); // Fizz
console.log(fizzBuzz(10)); // Buzz
console.log(fizzBuzz(7)); // 7
// Let's break down the function and its outputs:

// Input: 'test'

// The input is not a number.
// The function returns 'NaN'.
// Input: 15

// The input is divisible by both 3 and 5 (15 % 3 === 0 and 15 % 5 === 0).
// The function returns 'fizzBuzz'.
// Input: 9

// The input is divisible by only 3 (9 % 3 === 0).
// The function returns 'Fizz'.
// Input: 10

// The input is divisible by only 5 (10 % 5 === 0).
// The function returns 'Buzz'.
// Input: 7

// The input is not divisible by 3 or 5.
// The function returns the input number itself (7).
//----------------------

// Describe the functionality of the "Stopwatch class How does the class handle the start, stop, and getDuration methods? What is the expected output when the code snippet is executed?
//  Hints
// The start() method starts the stopwatch if it is not already running.
//  The "stop() method stops the stopwatch if it is running and records the end lime.
//  The getDuration() method calculates the duration in seconds between the start and stop times or between the start time and the current time if the stopwatch is still running.
//  The code snippet demonstrates how the 'Stopwatch class can be used.
//  Analyze the Stopwatch class and answer the question based on the provided hints into javascript code

// 2/3


// Let's first create a Stopwatch class in JavaScript that adheres to the provided hints. Then, I'll describe its functionality and analyze the code snippet.

// javascript
// Copy code
class Stopwatch {
    constructor() {
        this.startTime = null;
        this.endTime = null;
        this.running = false;
    }

    start() {
        if (!this.running) {
            this.startTime = new Date();
            this.running = true;
            this.endTime = null;
        }
    }

    stop() {
        if (this.running) {
            this.endTime = new Date();
            this.running = false;
        }
    }

    getDuration() {
        if (this.startTime === null) {
            return 0; // Stopwatch has never been started
        }
        if (this.running) {
            // If running, calculate the duration up to the current time
            return (new Date() - this.startTime) / 1000;
        } else {
            // If stopped, calculate the duration between start and end times
            return (this.endTime - this.startTime) / 1000;
        }
    }
}

// Example usage
const sw = new Stopwatch();
sw.start();
setTimeout(() => {
    sw.stop();
    console.log(`Duration: ${sw.getDuration()} seconds`);
}, 2000);
// Functionality of the Stopwatch Class
Constructor (constructor)

// Initializes startTime, endTime, and running properties.
// startTime and endTime are initially null.
// running is a boolean indicating whether the stopwatch is running or not.
// Start 
// Method (start()):

// Sets the startTime to the current date and time if the stopwatch is not already running.
// Sets running to true and endTime to null.
// Stop Method (stop()):

// Sets the endTime to the current date and time if the stopwatch is running.
// Sets running to false.
// Get Duration Method (getDuration()):

// If startTime is null, returns 0 (the stopwatch has never been started).
// If the stopwatch is still running, calculates the duration from startTime to the current time.
// If the stopwatch is stopped, calculates the duration between startTime and endTime.
// Expected Output When Code Snippet is Executed
// In the provided example, the following steps occur:

// An instance of Stopwatch is created.
// The start method is called, starting the stopwatch.
// A setTimeout function is used to wait for 2000 milliseconds (2 seconds).
// After 2 seconds, the stop method is called, stopping the stopwatch.
// The getDuration method is called to calculate and print the duration in seconds.

class Stopwatch {
  constructor() {
      this.startTime = null;
      this.endTime = null;
      this.running = false;
  }

  start() {
      if (!this.running) {
          this.startTime = Date.now();
          this.running = true;
          this.endTime = null; // reset endTime when the stopwatch is restarted
      }
  }

  stop() {
      if (this.running) {
          this.endTime = Date.now();
          this.running = false;
      }
  }

  getDuration() {
      if (this.running) {
          return (Date.now() - this.startTime) / 1000; // return duration in seconds
      } else if (this.startTime && this.endTime) {
          return (this.endTime - this.startTime) / 1000; // return duration in seconds
      } else {
          return 0; // if the stopwatch was never started
      }
  }
}

// Code snippet demonstrating the usage of Stopwatch class
const stopwatch = new Stopwatch();

stopwatch.start();
setTimeout(() => {
  stopwatch.stop();
  console.log(`Duration: ${stopwatch.getDuration()} seconds`);
}, 2000);











///////////////////////////MT Ds////////////////////////////

let arr = [1, 2, 3, 4, 5];
let size = arr.length;
let pos = 2;  // Assume we want to insert an element at index 2

// Shift elements to the right from position pos to size-1
for(let i = size; i > pos; i--) {
    arr[i] = arr[i-1];
}

// Now insert the new element at index pos
arr[pos] = 99;

console.log(arr);  // Output will be [1, 2, 99, 3, 4, 5]

// function insertElement(arr, element, pos) {
//   let size = arr.length;

//   // Increase the array size by one to accommodate the new element
//   arr[size] = null;

//   // Shift elements to the right from the position to the end of the array
//   for (let i = size; i > pos; i--) {
//     arr[i] = arr[i - 1];
//   }

//   // Insert the new element at the specified position
//   arr[pos] = element;

//   return arr;
// }

// let arr = [1, 2, 3, 4, 5];
// let element = 99;
// let pos = 2;
// let newArr = insertElement(arr, element, pos);
// console.log(newArr);
