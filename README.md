<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>var vs let vs const</title>
</head>
<body>

<h1>JavaScript: var vs let vs const</h1>

<p>This document explains the difference between <code>var</code>, <code>let</code>, and <code>const</code> in JavaScript with line-by-line examples.</p>

<hr>

<h2>1. Variable Naming</h2>

<pre><code>var $123 = "Hello";
var _123 = "Hello";
var a = "temp";

b = 24; // ❌ never use (becomes global)</code></pre>

<p><strong>Note:</strong> Variables should always be declared using <code>var</code>, <code>let</code>, or <code>const</code>.</p>

<hr>

<h2>2. let and const</h2>

<pre><code>let temp = "abc";
const temp_const = "Hello World !!";</code></pre>

<ul>
    <li><code>let</code> → value can change</li>
    <li><code>const</code> → value cannot change</li>
</ul>

<hr>

<h2>3. Declaration & Initialization</h2>

<pre><code>var d;          // declaration
var d = 12;     // initialization
d = 24;         // reassignment
var d = "Hello" // redeclaration</code></pre>

<p><code>var</code> allows redeclaration and reassignment.</p>

<hr>

<h2>4. Scope</h2>

<h3>var Scope</h3>

<pre><code>var e = 23;
{
    var e = 25;
    console.log(e); // 25
}

function abc() {
    var e = 30;
    console.log(e); // 30
}

console.log(e); // 25</code></pre>

<p><code>var</code> is <strong>function-scoped</strong>, not block-scoped.</p>

<h3>let Scope</h3>

<pre><code>let f = 23;
{
    let f = 25;
    console.log(f); // 25
}

function abc() {
    let f = 30;
    console.log(f); // 30
}

console.log(f); // 23</code></pre>

<p><code>let</code> is <strong>block-scoped</strong>.</p>

<hr>

<h2>5. Temporal Dead Zone (TDZ)</h2>

<pre><code>console.log(temp_b);
var temp_b = 24; // undefined</code></pre>

<pre><code>console.log(j);
let j = 12; // ❌ ReferenceError (TDZ)</code></pre>

<p><strong>TDZ applies to <code>let</code> and <code>const</code>, not <code>var</code>.</strong></p>

<hr>

<h2>6. Hoisting</h2>

<pre><code>console.log(x);
var x = 12; // undefined</code></pre>

<pre><code>console.log(y);
let y = 24; // ❌ ReferenceError</code></pre>

<hr>
  <h1>JavaScript Data Types</h1>

    <p>This document explains JavaScript data types and how they behave when copied or assigned.</p>

    <h2>Two Types of Data Types</h2>
    <ul>
        <li>Primitive Data Types</li>
        <li>Non-Primitive (Reference) Data Types</li>
    </ul>

    <h2>1. Primitive Data Types</h2>
    <p>Primitive data types store real values. When copied, a new value is created.</p>

    <h3>Example</h3>
    <pre><code>
let a = 12;
let b = a;
a = a + 3;
    </code></pre>

    <h3>Types of Primitive Data Types</h3>

    <h4>String</h4>
    <pre><code>
let d = "name";
d = 'username';
d = `firstname`;
    </code></pre>

    <h4>Number</h4>
    <pre><code>
let e = 12;
e = 12.25;
    </code></pre>

    <h4>Boolean</h4>
    <pre><code>
let f = true;
f = false;
    </code></pre>

    <h4>Null</h4>
    <pre><code>
let g = null;
    </code></pre>

    <h4>Undefined</h4>
    <pre><code>
let h;
    </code></pre>

    <h4>Symbol</h4>
    <pre><code>
let u1 = Symbol("uid");
let u2 = Symbol("uid");

console.log(u1 === u2); // false

let obj = { uid: 1, name: "test", email: "test@test.com" };
let u3 = Symbol("uid");
obj[u3] = "001";
    </code></pre>

    <h4>BigInt</h4>
    <pre><code>
let number = 9007199254740991;
number = number + 6;

let num2 = 9007199254740991n;
num2 + 3n;
    </code></pre>

    <h2>2. Non-Primitive Data Types (Reference Data Types)</h2>
    <p>Non-primitive data types store references to memory locations.</p>

    <h3>Example</h3>
    <pre><code>
let temp_a = [1, 2, 3];
let temp_b = temp_a;

temp_b.pop();
    </code></pre>

    <h3>Types of Non-Primitive Data Types</h3>

    <h4>Arrays</h4>
    <pre><code>
let temp_array = ["name", "age", "phone_number"];
    </code></pre>

    <h4>Objects</h4>
    <pre><code>
let obj = {
    name: "test",
    age: 9,
    phone_number: 558998554
};
    </code></pre>

    <h4>Functions</h4>
    <pre><code>
function name(params) {
    // function body
}
    </code></pre>

    <h2>Key Differences</h2>
    <table>
        <tr>
            <th>Primitive</th>
            <th>Non-Primitive</th>
        </tr>
        <tr>
            <td>Copy by value</td>
            <td>Copy by reference</td>
        </tr>
        <tr>
            <td>Immutable</td>
            <td>Mutable</td>
        </tr>
        <tr>
            <td>Stores actual value</td>
            <td>Stores memory reference</td>
        </tr>
    </table>

    <h2>Conclusion</h2>
    <p>
        Primitive data types create independent copies, while non-primitive data types share the same reference.
        Understanding this concept is essential for writing bug-free JavaScript code.
    </p>

<h1>JavaScript Operators</h1>
<p>This document explains JavaScript operators with simple definitions and examples.</p>

<hr>

<h2>1. Arithmetic Operators</h2>
<ul>
    <li><code>+</code> Addition & Concatenation</li>
    <li><code>-</code> Subtraction</li>
    <li><code>*</code> Multiplication</li>
    <li><code>/</code> Division</li>
    <li><code>%</code> Modulus (Remainder)</li>
    <li><code>**</code> Exponentiation</li>
</ul>

<pre>
1 + 2        // 3
"user" + "name" // username
12 % 4       // 0
9 % 2        // 1
2 ** 3       // 8
</pre>

<hr>

<h2>2. Comparison Operators</h2>
<p>Comparison operators return <strong>true</strong> or <strong>false</strong>.</p>

<ul>
    <li><code>==</code> Equal (value only)</li>
    <li><code>===</code> Strict Equal (value + type)</li>
    <li><code>!=</code> Not Equal</li>
    <li><code>!==</code> Strict Not Equal</li>
    <li><code>&gt;</code> Greater Than</li>
    <li><code>&lt;</code> Less Than</li>
    <li><code>&gt;=</code> Greater Than or Equal</li>
    <li><code>&lt;=</code> Less Than or Equal</li>
</ul>

<pre>
12 == "12"    // true
12 === "12"   // false
12 !== "12"   // true
</pre>

<hr>

<h2>3. Assignment Operators</h2>

<pre>
let a = 10;
a += 5;   // 15
a -= 3;   // 12
a *= 2;   // 24
a /= 4;   // 6
a %= 5;   // 1
</pre>

<hr>

<h2>4. Logical Operators</h2>

<ul>
    <li><code>&&</code> AND</li>
    <li><code>||</code> OR</li>
    <li><code>!</code> NOT</li>
</ul>

<pre>
true && true   // true
true && false  // false
true || false  // true
!true          // false
!!12           // true
</pre>

<hr>

<h2>5. Unary Operators</h2>

<ul>
    <li><code>+</code> Convert string to number</li>
    <li><code>-</code> Negation</li>
    <li><code>!</code> Logical NOT</li>
    <li><code>typeof</code> Check data type</li>
    <li><code>++</code> Increment</li>
    <li><code>--</code> Decrement</li>
</ul>

<pre>
+"5"          // 5
+"Name"       // NaN
typeof "JS"   // string
typeof NaN    // number
typeof null   // object
</pre>

<hr>

<h2>6. Ternary Operator</h2>

<pre>
condition ? valueIfTrue : valueIfFalse
</pre>

<pre>
let score = 78;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" : "D";
</pre>

<hr>

<h2>7. Truthy & Falsy Example</h2>

<pre>
let a = 0;

if (a) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
// Output: Falsy
</pre>

<hr>

<h2>8. Increment & Decrement Examples</h2>

<pre>
let j = 4;
let k = j++;
// j = 5, k = 4

let n = 10;
console.log(n--); // 10
console.log(n);   // 9
</pre>

<hr>

<h2>9. Function Example</h2>

<pre>
let likes = 100;

function likePost() {
    ++likes;
}

console.log(likePost()); // undefined
console.log(likes);      // 101
</pre>

<hr>

<h2>10. Key Notes</h2>
<ul>
    <li><code>typeof</code> → Use for primitive data types</li>
    <li><code>instanceof</code> → Use for reference data types</li>
    <li><code>Array instanceof Array</code> → true</li>
</ul>

<hr>
<h2>Example 1: Logical AND (&&)</h2>
<pre>
let x = 10;
let y = 20;

if (x > 5 && y > 5) {
    console.log("Both are greater than 5");
} else {
    console.log("One or both are not greater than 5");
}
</pre>
<p><b>Output:</b> Both are greater than 5</p>

<hr>

<h2>Example 2: Logical OR (||)</h2>
<pre>
let isAdmin = true;
let isLoggedIn = false;

if (isAdmin || isLoggedIn) {
    console.log("Access granted");
} else {
    console.log("Access Denied");
}
</pre>
<p><b>Output:</b> Access granted</p>

<hr>

<h2>Example 3: Logical NOT (!)</h2>
<pre>
let temp = 35;

if (!(temp > 30)) {
    console.log("Hot day");
} else {
    console.log("Pleasant day");
}
</pre>
<p><b>Output:</b> Pleasant day</p>

<hr>

<h2>Example 4: Falsy Value</h2>
<pre>
let a = 0;

if (a) {
    console.log("Truthy value");
} else {
    console.log("Falsy value");
}
</pre>
<p><b>Output:</b> Falsy value</p>

<hr>

<h2>Example 5: Ternary Operator (Grades)</h2>
<pre>
let score = 78;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" : "D";

console.log("Grade:", grade);
</pre>
<p><b>Output:</b> Grade: C</p>

<hr>

<h2>Example 6: Ternary Operator (Status)</h2>
<pre>
let points = 120;
let status = points >= 100 ? "Gold" :
             points >= 50 ? "Silver" : "Bronze";

console.log("Status:", status);
</pre>
<p><b>Output:</b> Status: Gold</p>

<hr>

<h2>Example 7: AND with Ternary</h2>
<pre>
let loggedIn = true;
let hasToken = false;

let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log("Access:", access);
</pre>
<p><b>Output:</b> Access: Deny</p>

<hr>

<h2>Example 8 & 9: Increment Operator</h2>
<pre>
let b = 5;
b++;
console.log(b); // 6

let c = 8;
++c;
console.log(c); // 9
</pre>

<hr>

<h2>Example 10: Post Increment</h2>
<pre>
let j = 4;
let k = j++;
console.log(j, k);
</pre>
<p><b>Output:</b> 5 4</p>

<hr>

<h2>Example 11: Pre Increment</h2>
<pre>
let l = 4;
let m = ++b;
console.log(l, m);
</pre>
<p><b>Output:</b> 4 5</p>

<hr>

<h2>Example 12: Post Decrement</h2>
<pre>
let n = 10;
console.log(n--);
console.log(n);
</pre>
<p><b>Output:</b> 10<br>9</p>

<hr>

<h2>Example 13: Mixed Increment</h2>
<pre>
let o = 5;
let result = o++ + ++o;
console.log(result);
</pre>
<p><b>Output:</b> 12</p>

<hr>

<h2>Example 14: Function without Return</h2>
<pre>
let likes = 100;

function likePost() {
    ++likes;
}

console.log(likePost());
console.log(likes);
</pre>
<p><b>Output:</b> undefined<br>101</p>

<hr>

<h2>Example 15: Comparison with Post Decrement</h2>
<pre>
let count = 5;

if (count-- === 5) {
    console.log("Matched");
} else {
    console.log("Not Matched");
}
</pre>
<p><b>Output:</b> Matched</p>
<h1>Control Flow Statements in JavaScript</h1>

<p>This project demonstrates the usage of JavaScript control flow statements such as
<b>if</b>, <b>if-else</b>, <b>else-if</b>, <b>switch-case</b>, and <b>early return patterns</b>,
along with practical examples.</p>

<hr>

<h2>1. If Statement</h2>
<p>The <code>if</code> statement executes code only when the condition is true.</p>

<pre>
if (12 < 13) {
    console.log(true);
}
</pre>

<p>If the condition is false, the code inside the block will not run.</p>

<hr>

<h2>2. If-Else Statement</h2>
<p>The <code>if-else</code> statement executes one block if the condition is true,
otherwise the <code>else</code> block runs.</p>

<pre>
if (12 < 13) {
    console.log(true);
} else {
    console.log(false);
}
</pre>

<hr>

<h2>3. If – Else If – Else Statement</h2>
<p>Used when multiple conditions need to be checked.</p>

<pre>
if (loggedin && admin) {
    console.log("welcome admin");
} else if (loggedin) {
    console.log("welcome user");
} else {
    console.log("go to login page");
}
</pre>

<hr>

<h2>4. Switch Case Statement</h2>
<p>The <code>switch</code> statement compares a value against multiple cases.</p>

<pre>
switch ('First50') {
    case 'First50':
        console.log("50% off on First Order");
        break;
    case 'BoGo':
        console.log("Buy one get one");
        break;
    case 'BlackFriday':
        console.log("It's Black Friday Sale");
        break;
    default:
        console.log("Offer Not Valid");
}
</pre>

<hr>

<h2>5. Early Return Pattern</h2>
<p>Early return improves readability by returning results as soon as a condition is met.</p>

<pre>
function score2(value) {
    if (value < 60) return "Value is less than 60";
    else if (value < 70) return "Value is less than 70";
    else if (value < 80) return "Value is less than 80";
    else if (value < 90) return "Value is less than 90";
    else return "Value is more than 90";
}
</pre>

<hr>

<h2>6. Example 1: Switch Case without Break</h2>
<p>Demonstrates fall-through behavior when <code>break</code> is missing.</p>

<pre>
let A = 2;
switch ('A') {
    case '2':
        console.log("Two");
    case '3':
        console.log("Three");
}
</pre>

<hr>

<h2>7. Example 2: Student Grade Calculator</h2>
<p>Returns grades based on student marks.</p>

<pre>
function getGrade(score) {
    if (score >= 90 && score <= 100) return "A+";
    else if (score >= 80) return "A";
    else if (score >= 70) return "B";
    else if (score >= 60) return "C";
    else if (score >= 33) return "D";
    else if (score >= 0) return "Fail";
    else return "Invalid Marks";
}
</pre>

<hr>

<h2>8. Example 3: Rock Paper Scissors Game</h2>
<p>A simple game logic using conditional statements.</p>

<pre>
function rps2(user, computer) {
    if (user === computer) return "it's a tie.";
    if (user === "rock" && computer === "scissor") return "user wins";
    if (user === "scissor" && computer === "paper") return "user wins";
    if (user === "paper" && computer === "rock") return "user wins";
    return "computer wins";
}
</pre>

<hr>

<h1>Loops in JavaScript</h1>

<p>This document explains different types of loops in JavaScript and demonstrates
how to use them with practical examples.</p>

<hr>

<h2>What are Loops?</h2>
<p>Loops are used to <b>repeat a block of code</b> until a specified condition becomes false.</p>

<p>Examples:</p>
<ul>
    <li>Printing numbers from 1 to 10</li>
    <li>Repeating a message multiple times</li>
</ul>

<hr>

<h2>1. For Loop</h2>
<p>The <code>for</code> loop is used when you know <b>how many times</b> you want to repeat the code.</p>

<h3>Syntax</h3>
<pre>
for (start; condition; change) {
    // code
}
</pre>

<h3>Example: Print 1 to 10</h3>
<pre>
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
</pre>

<h3>Example: Print 20 to 10</h3>
<pre>
for (let i = 20; i >= 10; i--) {
    console.log(i);
}
</pre>

<hr>

<h2>2. While Loop</h2>
<p>The <code>while</code> loop runs as long as the condition is true.</p>

<h3>Syntax</h3>
<pre>
start;
while (condition) {
    // code
    change;
}
</pre>

<h3>Example: Print 10 to 20</h3>
<pre>
let j = 10;
while (j <= 20) {
    console.log("j :", j);
    j++;
}
</pre>

<h3>Example: Print 20 to 10</h3>
<pre>
let k = 20;
while (k >= 10) {
    console.log("k :", k);
    k--;
}
</pre>

<h3>Example: Print 50 to 20</h3>
<pre>
let a = 50;
while (a >= 20) {
    console.log(a);
    a--;
}
</pre>

<h3>Example: Condition False (Loop Will Not Run)</h3>
<pre>
let b = 60;
while (b <= 20) {
    console.log("b :", b);
    b++;
}
</pre>

<h3>Example: Print Message Multiple Times</h3>
<pre>
let d = 0;
while (d < 5) {
    console.log("Hello");
    d++;
}
</pre>

<h3>Example: Print 50 to 60</h3>
<pre>
let f = 50;
while (f <= 60) {
    console.log("f :", f);
    f++;
}
</pre>

<hr>

<h2>3. Do-While Loop</h2>
<p>The <code>do-while</code> loop executes the code <b>at least once</b>,
even if the condition is false.</p>

<h3>Syntax</h3>
<pre>
do {
    // code
    change;
} while (condition);
</pre>

<h3>Example: Print 10 to 20</h3>
<pre>
let g = 10;
do {
    console.log("do while :", g);
    g++;
} while (g <= 20);
</pre>

<h3>Example: Print 10 to 1</h3>
<pre>
let h = 10;
do {
    console.log("do while :", h);
    h--;
} while (h >= 1);
</pre>

<hr>
<h1>JavaScript Loops – Practice Examples</h1>
<p>This file explains basic JavaScript loop examples using <b>for</b>, <b>while</b>, <b>break</b>, and <b>continue</b>.</p>

<hr>

<h2>Example 1: Print numbers from 1 to 10</h2>
<pre>
for (let a = 1; a <= 10; a++) {
    console.log(a);
}
</pre>
<p><b>Output:</b> 1, 2, 3, 4, 5, 6, 7, 8, 9, 10</p>

<hr>

<h2>Example 2: Print numbers from 10 to 1 (while loop)</h2>
<pre>
let b = 10;
while (b >= 1) {
    console.log(b);
    b--;
}
</pre>
<p><b>Why:</b> The value decreases until it reaches 1.</p>

<hr>

<h2>Example 3: Print even numbers from 1 to 20</h2>
<pre>
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
</pre>
<p><b>Output:</b> 2, 4, 6, 8, 10, 12, 14, 16, 18, 20</p>

<hr>

<h2>Example 4: Print odd numbers from 1 to 15</h2>
<pre>
let i = 1;
while (i <= 15) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}
</pre>

<hr>

<h2>Example 5: Multiplication table of 5</h2>
<pre>
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}
</pre>

<hr>

<h2>Example 6: Sum of numbers from 1 to 100</h2>
<pre>
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);
</pre>
<p><b>Output:</b> 5050</p>

<hr>

<h2>Example 7: Numbers divisible by 3 (1 to 50)</h2>
<pre>
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
</pre>

<hr>

<h2>Example 8: Even or Odd (User Input)</h2>
<pre>
let num = prompt("Give a number");

for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}
</pre>

<hr>

<h2>Example 9: Numbers divisible by 3 or 5 (1 to 100)</h2>
<pre>
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }
}
</pre>

<hr>

<h2>Example 10: Stop at first multiple of 7 (break)</h2>
<pre>
for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 7 === 0) {
        break;
    }
}
</pre>

<hr>

<h2>Example 11: Skip multiples of 3 (continue)</h2>
<pre>
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}
</pre>

<hr>

<h2>Example 12: Print first 5 odd numbers</h2>
<pre>
let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
    count++;

    if (count === 5) {
        break;
    }
}
</pre>
<p><b>Output:</b> 1, 3, 5, 7, 9</p>

<hr>

<h1>📌 JavaScript Functions</h1>

<p>
A function is a reusable block of code that performs a specific task.
</p>

<hr>

<h2>❓ What is a Function?</h2>
<ul>
  <li><b>What:</b> A block of code that performs a specific task</li>
  <li><b>Why:</b> Avoid code repetition, improve modularity & reusability</li>
  <li><b>How:</b> <code>function</code> keyword, name, parameters, body, return</li>
</ul>

<hr>

<h2>🔹 Types of Functions</h2>

<h3>1️⃣ Function Declaration</h3>
<pre>
function abc() {}
</pre>

<h3>2️⃣ Function Expression</h3>
<pre>
let fnc = function () {}
</pre>

<h3>3️⃣ Arrow Function</h3>
<pre>
let fnc1 = () => {}
</pre>

<hr>

<h2>🧩 Parameters vs Arguments</h2>

<ul>
  <li><b>Parameters:</b> Variables listed in function definition</li>
  <li><b>Arguments:</b> Actual values passed during function call</li>
</ul>

<pre>
function cart(product) {
  console.log("Adding " + product);
}
cart("Laptop");
</pre>

<hr>

<h2>⚙️ Default Parameters</h2>
<pre>
function abcde(name, marks = 60) {
  console.log(name, marks);
}
</pre>

<hr>

<h2>📦 Rest Parameters (...)</h2>
<p>Used to accept unlimited arguments</p>

<pre>
function def1(...numbers) {
  console.log(numbers);
}
</pre>

<hr>

<h2>⏱ Early Return</h2>
<pre>
function checkAge(age){
  if(age < 18) return "Too Young";
  return "Access Granted";
}
</pre>

<hr>

<h2>🥇 First Class Functions</h2>
<ul>
  <li>Functions can be stored in variables</li>
  <li>Functions can be passed as arguments</li>
  <li>Functions can be returned from other functions</li>
</ul>

<pre>
const cart5 = function(product, price) {
  console.log(product, price);
}
</pre>

<hr>

<h2>🔁 Higher Order Functions (HOF)</h2>
<p>
A function that accepts another function as an argument or returns a function.
</p>

<pre>
function multiply(x) {
  return function(y) {
    return x * y;
  };
}
</pre>

<hr>

<h2>🧼 Pure vs Impure Functions</h2>

<h3>Pure Function</h3>
<ul>
  <li>Same input → Same output</li>
  <li>No external state modification</li>
</ul>

<h3>Impure Function</h3>
<ul>
  <li>Modifies external state</li>
</ul>

<hr>

<h2>🔐 Closures</h2>
<p>
A closure is created when an inner function accesses variables of its outer function even after the outer function has returned.
</p>

<pre>
function outer() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}
</pre>

<hr>

<h2>📚 Lexical Scope</h2>
<p>
Inner functions can access variables from their outer scope.
</p>

<hr>

<h2>⚡ IIFE (Immediately Invoked Function Expression)</h2>
<pre>
(function(){
  console.log("Initialized");
})();
</pre>

<h3>Use Case:</h3>
<ul>
  <li>Data privacy</li>
  <li>Avoid global scope pollution</li>
</ul>

<hr>

<h2>⬆️ Hoisting</h2>

<h3>Function Declaration</h3>
<p>Fully hoisted</p>

<h3>Function Expression</h3>
<p>Hoisted as undefined</p>

<hr>

<h2>🧠 Common Interview Examples</h2>

<ul>
  <li>Functions are first-class citizens</li>
  <li>Rest operator (<code>...</code>) collects multiple arguments</li>
  <li><code>return;</code> returns <code>undefined</code></li>
</ul>

<hr>

<h2>✅ Array HOF Example</h2>
<pre>
let result = [1,2,3].map(x => x * 2);
// [2, 4, 6]
</pre>

<hr>
 <h1>JavaScript Array Methods Practice</h1>
  <p>Open browser console to see output (Right click → Inspect → Console)</p>

  <script>
    // Array Basics
    let arr = [1, 2, 3, 4, 5];
    arr.push(6);
    arr.pop();
    arr.shift();
    arr.unshift(10);
    console.log("Array:", arr);

    // splice vs slice
    let nums = [10, 20, 30, 40, 50];
    nums.splice(2, 1);
    console.log("Splice:", nums);

    let copyNums = nums.slice(1, 3);
    console.log("Slice:", copyNums);

    // map
    let prices = [200, 400, 600];
    let discounted = prices.map(p => p * 0.9);
    console.log("Discounted Prices:", discounted);

    // filter
    let laptopPrices = [15000, 30000, 45000, 9000];
    let expensive = laptopPrices.filter(p => p > 20000);
    console.log("Expensive Laptops:", expensive);

    // reduce
    let cart = [499, 299, 199];
    let total = cart.reduce((sum, price) => sum + price, 0);
    console.log("Total Cart Price:", total);

    // find
    let products = ["Laptop", "Mobile", "Tablet", "Watch"];
    let found = products.find(p => p === "Mobile");
    console.log("Found Product:", found);

    // some
    let marks = [20, 35, 90];
    let hasTopper = marks.some(m => m > 85);
    console.log("Any Topper:", hasTopper);

    // every
    let passCheck = marks.every(m => m >= 40);
    console.log("All Passed:", passCheck);

    // Destructuring
    let data = [1, 2, 3, 4];
    let [a, , b] = data;
    console.log("Destructured:", a, b);

    // Spread Operator
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    let merged = [...arr1, ...arr2];
    console.log("Merged Array:", merged);
  </script>

</body>
</html>
