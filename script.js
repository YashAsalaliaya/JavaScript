// var , let and const --- line by line comparsion.
//var(ES5)
var $123 = "Hello";

var _123 = "Hello";

var a = "temp";

b = 24; //never use

//let
let temp = "abc";

//
// const temp_const = "Hello World  !!";

//declarations and initialization
var d; //declare
var d = 12; //declare and initialization for first time
// var add value into window
// var is function scoped
// var can be redeclared and reassigned
d =24; //reassign
var d = "Hello" //redeclar
// temp_const = "Hello";

// scope (global,block functional)

//var
var e = 23; //global scope
{
    var e = 25;  //block scope
    console.log("block scope" + e);
}
function abc (){
    var e = 30; //functional scope
    console.log("functional scope" + e);
}
abc();
console.log(e);

//let
let f = 23; //global scope
{
    let f = 25;  //block scope
    console.log("block scope" + f);
}
function abc (){
    let f = 30; //functional scope
    console.log("functional scope" + f);
}
abc();
console.log(f);

// Temporal Dead Zone (TDZ)
//TDZ not working on var
console.log(temp_b)
var temp_b = 24; // on var there is no TDZ
// console.log(j);
// let j = 12;


//Hoisting Imapact
//Hoisting --> when your create a variable into js that braek into two part first is declare part that go to up and ther initialization part that go down
var temp_d = 12;
//var temp_d; --> undefined; --> that go to up
// temp_d = 12; --> that go to down(means stuck into line 69)
//if you use cnsole.log before initialization that give you undefined;
let temp_d_let = 24;
// let variable not use before initialization
// if you use console.log before initialization that give you error;
// Hoisting Impace on var , let ,const
/* 
var --> hoist -->undefined
let --> hoist -->error
const --> hoist -->error
*/

// Example 1:
    // console.log(nm);
    // let nm = "name";
// Answer or Error:Cannot access 'nm' before initialization
// Why:first declare the variable after the log. 

// Example 2:
    // console.log(k);
    // var k = "username";
// Answer or Error:undefined
// Why:Declaration hoisted to the top

// Example 3:
var x = 1;
{
    var x =2;
}
// Answer or Error:2
// Why:var is not block-scoped.

// Example 4:
let c = 10;
{
    let c = 20;
    console.log("inside:",c);
}
 console.log("outside:",c);

// Answer or Error:inside: 20
// outside: 10
// Why:There are functional scope.

// Example 5:
const person = {name : "demo"};
console.log(person);
person.name = "user";
person = {}
// Answer or Error:Assignment to constant variable.
// Why:const variable not change the value
