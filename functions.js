// functions
// what --> function is a block of code that performs a specific task.
// why --> to avoid code repetition and to make code modular and reusable.
// how --> function keyword, name, parameters, body, return statement

// type of functions:
// function name(params) {} --> function declaration
function abc() {}
// let fnc = function (){} --> function expression
let fnc = function () {}
// let fnc = () => {} --> arrow function --> fat arrow function
let fnc1 = () => {}

 function temp_cart() {
    console.log("adding producat");
 }
 temp_cart("laptop");
 temp_cart("watch");
 temp_cart("mobile");

// parameters vs arguments
// parameters are the names listed inthe function definition(params --> () ni  andar lakheli values)
// arguments are the real values passed to the function(args --> function call karti () ni adar lakheli(pass) kareli values)
function cart(producat) { // producat -- params
    console.log(`Adding ${producat}`)
}
cart("laptop");  // laptop -- args
cart("Mac Book");
cart("S25 ultra");

function cart2(producat, price) { // producat -- params
    console.log(`Adding ${producat} at ${price}`)
}
cart2("laptop", 50000);  // laptop -- args
cart2("Mac Book", 250000);
cart2("S25 ultra", 69000);

function Result(name, marks) {
     console.log(`Adding ${name} at ${marks}`)
}
Result("Ram", 50);  
Result("Rahul", 87);
Result("Bhavesh", 95);

// convert into  arrow function
// let fnc = () => {}
let Result1 = (name, marks) => {
     console.log(`Adding ${name} at ${marks}`)
}
Result1("arrow function -- Ram", 50);   
// convert into  function expression
// let fnc = function (){}
const Result2 = function (name, marks) {
    console.log(`Adding ${name} at ${marks}`)
}
Result2("function expression -- Ram", 50);   

// Default, rest parameters in function
// Default
function abcd(b = 10, price = 0) {
    console.log(price, b)
}
abcd(15);
// Example
function abcde(name, marks = 60) {
    console.log(name, marks)
}
abcd("ram");

// rest
// Jayare function ma multiple arguments pass karva to vadhare params banava pade chhe mate te na karvu pade te mate rest parameter use kariye chhiye (rest ---> ... jo function na parameter ni anadar lakhvama aave chhe)
function  def(a,b,c,d,e,f,g) {
    console.log(a,b,c,d,e,f,g)
}
def(1,2,3,4,5,6,7);

function def1(...number) { // ...number -- rest params
    console.log(number);
}
def1(1,2,3,4,5,6,7,8,9,10);

// Example
function def2(...product) { // ...number -- rest params
    console.log(product);
}
def1("laptop", "T.V.", "Mobile", "A.C.");

// early return --> function mathi jaldi bahar nikalva mate
function getValue1(value) {
    if (value < 25) return "value is less than 25.";
    else if (value < 50) return "value is less than 50.";
    else if (value < 75) return "value is less than 75.";
    return "value is 100 or more.";   
}
let result = getValue1(80);
console.log(result);

// first Class Function and their types:
// function can be treated as variables
// let temp_a = function(){} -first class function
const cart5 = function (product, price) {
    console.log(`Adding ${product} at ${price}`);
} 
cart5 ("function expression - s25 ultra", 69000);

// function can be passed as arguments to othe functions
function temp_b(fnc) {
    fnc();
}
temp_b(function fnc2() {
    console.log("First Class Function");
});

// function can be returned from other functions
function abcde() {
    return function () {
        console.log("function return other function")
    };
}
// abcde();
abcde()(); // call a function that return other function


// higher order function (Hof)
// function that takes another function as an argument or returns a function as a result (eva function je return kare ek function athava acpect kare ek function params ma)

function multiply(x) {
  return function (y) {
    return x * y;
  };
}
const multiply5 = multiply(5);
console.log(multiply5(3));

