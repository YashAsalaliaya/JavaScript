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
//types: arrays [], objects {}, functions ()
let temp_array = ["name", "age", "phone_number"];
let obj = {name:"test", age: 9, phone_number:558998554}
function name(params) {
    
}
// Dyanmic Typing
let temp_d = "name";
temp_d = 123;
temp_d = {};
// javascript  --> typescript
// typeof quirks
// typeof 12
// check type of variable use --> ex. typeof NaN, typeof null , 1 + "1", 1 == "1", 1 ==="1"
// why typeof NaN --> number
// Nan is a failed number operations that why that type is number
// ex. "hello" - 5 --> NaN

// type coeration
// "5" + 1
// "5" - 1