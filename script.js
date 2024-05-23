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
Ans: 2,3,4,5



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

