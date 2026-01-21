// Data Types:
//Two Type of Data Types:
// 1. Primitive Data Types
// copy --> real value
let a = 12;
let b = a; // a-->12
a =a+3;
//types: string, number, boolean, null, undefined, symbol, bigint


// 2. Non-primitive Data Types(Reference Data Types)
// copy --> give reference of parent
let temp_a = [1,2,3];
let temp_b = temp_a;
temp_b.pop() //remove value

//types: arrays [], objects {}, functions ()

//types: string, number, boolean, null, undefined, symbol, bigint
//string:
// '' - single quotes
// "" - double quotes
// `` - backticks
let d = "name";
d = 'username';
d = `fistname`;

// number:
let e =12;
e = 12.25;

// boolean:
let f =true;
 f = false;

// null:
// you give a value
 let g = null;

// undefined:
// you don't give a value, by defaualt value
 let h;

// symbol:

// unique immutable value
let u1 = Symbol("uid");
let u2 = Symbol("uid");
// check u1===u2
let obj = {uid: 1, name: "test", email: "test@test.com"};
let u3 = Symbol("uid")
obj[u3] = "001"
 // bigint:
// cheak range of number ,Number.Max SAFE_INTEGER
// ex. let a = 900719925470991n; a +3n
let number  = 9007199254740991;
number = number +6;
let num2 = 9007199254740991n;
num2 + 3n

// <---------Non -Primitive Data Tyeps--------->
// types: arrays [], objects {}, functions ()
let temp_array = ["name", "age", "phone_number"];
let obj = {name:"test", age: 9, phone_number:558998554}
function name(params) {
    
}
// Dyanmic Typing
let temp_d = "name";
temp_d = 123;
temp_d = {};
javascript  --> typescript
typeof quirks
typeof 12
// check type of variable use --> ex. typeof NaN, typeof null , 1 + "1", 1 == "1", 1 ==="1"
// why typeof NaN --> number
// Nan is a failed number operations that why that type is number
// ex. "hello" - 5 --> NaN

// type coeration
// "5" + 1
// "5" - 1

// Truthy Vs Falsy Values
// 0 false "" null undefined NaN document.all -->false
// ex. !!0 -- check value is true and false
// ex. if(null){}, js convert it into false
// ex. if(-1){}, js convert it into true
//all --> true

// Example 1 :
console.log(true + false)
// output: 1

// Example 2 :
console.log(null + 1)
// output: 1

// Example 3 :
console.log("12" + 12)
// output: 1212

// Example 4 :
console.log(!!undefined)
// output: false

// Example 5 :
console.log("12" - 1)
//output: 11

// Example 6 :
// why typeof NaN --> number
// NaN is a failed number oprations that why that type is number
console.log("hello" + 5)
// output: hello5

// Example 7 :
// Undefined vs Null
let x;
console.log(x);
let y = null;
console.log(y);
// Output: x = undefined , y = null