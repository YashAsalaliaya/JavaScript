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
</body>
</html>
