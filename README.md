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

</body>
</html>
