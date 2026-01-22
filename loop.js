// loops -- repeating code blocks
// 1 1 1 1 1 1
// 1 2 3 4 5 6

// for loop
// why use for loop? when you know how many time you want to repeat a block.
// print 1 to  10 --> console.log(1); console.log(2);....console.log(10);
// Kaya thi javnu chhe --> kaya sudhi javnu chhe
// for (ex.1 -> 50 -> increment by 1)
// (start; end; change)
for (let i = 1; i <= 10; i++){
    console.log(i);
}
for (let i = 20; i >= 10; i--){
    console.log(i);
}

// while loop -- do while loop
// kaya thi javanu chhe --> Kaya rokavanu chhe --> kevi rite javanu chhe
// while (ex. 1 -> Hello World -> stop when condition false)
// start
// while(end){
// code
// change
// }
let j = 10;
while (j <= 20) {
    console.log("j :", j);
    j++;
}

let k = 20;
while (k >= 10) {
    console.log("k :", k);
    k--;
}
// loop
let a = 50;
while (a >= 20) {
    console.log(a);
    a--;
}

let b = 60;
while (b <= 20) {
    console.log("b :", b);
    b++;
}

let c = 30;
while (c >= 20) {
    console.log("c :", c);
    c--;
}

let d = 0;
while (d < 5) {
    console.log("Hello");
    d++;
}

let f = 50;
while (f <= 60) {
    console.log("f", f);
    f++;
}

let q = 50;
while (q <= 60) {
    console.log("q :", q);
    q++;
}

// do while loop
// do {} while (end);
// start
// do{
// code
// change
// }
// while (end);
let g = 10;
do {
    console.log("do while : ", g);
    g++;
} while (g <= 20);

let h = 10;
do {
    console.log("do while : ", h);
    h--;
} while (h >= 1);