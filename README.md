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
</body>
</html>
