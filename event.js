// Event - page par koi pan action karo tene ek event rise karshe, page par click, hover, typing all are events
// Event Listener - event nu reaction -- give reaction when click, dblclick, hover, typing

// Add Event Listener
// select --> event --> function --> what you change
// element.addEventListener("event_name", function(){})

//=======================================================================
// Common Events : click, input, change, submit, mouseover, keyup
// Click
let btn = document.querySelector("button");
console.dir(btn);

btn.addEventListener("click", function () {
    document.body.classList.toggle("bg-body");
    if(btn.textContent === "Dark Mode"){
        btn.textContent = "Light Mode";
    } else {
        btn.textContent = "Dark Mode";
    }
})

// Input
let inp = document.querySelector("input");
inp.addEventListener("input", function (dets) {
  if (dets.data !== null) {
    console.log(dets.data);
  }
});

// Change -- when you change elements state
let sel = document.querySelector("select");
sel.addEventListener("change", (dets) => {
  console.log(dets.target.value);
  document.body.style.backgroundColor = dets.target.value;
});

let up_btn = document.querySelector(".upload");
let cs_btn = document.querySelector("#btn1");

cs_btn.addEventListener("click", () => {
  up_btn.click();
//   cs_btn.textContent = "Upload File";
});
up_btn.addEventListener("change", (dets) => {
  console.log(dets);
  console.log(dets.target.files[0].name);
  cs_btn.textContent = dets.target.files[0].name;
});

let up_btn1 = document.querySelector(".color-box");
let cs_btn1 = document.querySelector("#clr");

cs_btn1.addEventListener("input", (dets) => {
  up_btn1.style.backgroundColor = dets.target.value;
});
up_btn1.addEventListener("change", () => {
  console.log(dets);
   up_btn1.style.backgroundColor = "red";
});

// submit

let form = document.querySelector("form");
form.addEventListener("submit", () => {
  document.body.style.backgroundColor = "black";
});

// moussemove and mouseout
let card = document.querySelector(".card");

card.addEventListener("mousemove", (dets) =>{
  card.classList.add("card-hover");
  console.log(dets);
});

card.addEventListener("mouseout", (dets) =>{
  card.classList.remove("card-hover");
  console.log(dets);
});

// mouse move -- effect

// keyup - self

// =====================================================================================
// Event Object:
// sel.addEventListener("change", (dets) => {
// console.log(dets); ==> dets -- that called event object
//});

// target, type, preventDefault
// target --> that show element
// type --> show Event Type
// preventDefault --> use for html-form --> prevent form to refresh and clean details.

// ===========================
// event delegation ==> darek child par event listener na lagavata only parent par event listner lagavvu
// Event Bubbling and Capturing
// Event Bubbling --> jena par event aave tena par listener na hoy to aapdu event tena parent par listener gotase ane aavu karta karta upar traf move karshe 

// let inner_box = document.querySelector(".inner_box");
// let outer_box = document.querySelector(".outer_box");
// let btn1 = document.querySelector(".btn1");

// inner_box.addEventListener("click", () => {
//   console.log("inner Div clicked");
//   outer_box.style.backgroundColor = "red";
// });

// outer_box.addEventListener("click", () => {
//   console.log("outer Div clicked");
// });

// btn1.addEventListener("click", () => {
//   console.log("Button clicked");
// });

// use case: make it to do list thing
// when you click on text that show strike using bubbuling
// create list that show shopping things -- use css (text decoration -> line-through)

let list = document.querySelector(".list");
let check = document.querySelectorAll(".check");
let sub_list = document.querySelectorAll("li");

list.addEventListener("click", (dets) => {
  console.dir(dets.target);
  check.forEach((e) => {
    if(e === dets.target) {
      if(dets.target.checked) {
        e.parentElement.classList.add("line");
      }
      else{
        e.parentElement.classList.remove("line");
      }
    }
  });
});


// make it reverve too
// Issue:if you child have event listener that can run and also run your parent event listener beacuse of event bubbling
// show it with example

// event Capturing ==> revece of event bubbling
// when you raise event then your event flow(propogation) ==> can run into two phase
// first phase ==> event can run to top level element to bottom level element
// second phase ==> event can run to raised element to parent element

// First --> first phase then second phase ==> but phase 1 is default off, you have to on that setting
// first phase --> capture phase
// second phase --> event bubbling

let inner_box = document.querySelector(".inner_box");
let outer_box = document.querySelector(".outer_box");
let btn1 = document.querySelector(".btn1");

inner_box.addEventListener("click", () => {
  console.log("inner Div clicked");
  outer_box.style.backgroundColor = "red";
}, true); // true -- event capturing on

outer_box.addEventListener("click", () => {
  console.log("outer Div clicked");
});

btn1.addEventListener("click", () => {
  console.log("Button clicked");
});

// use case:
// 1. security layer
// 2. check when event bubbling mis fail

// event and event lister and lister
// capture vs bubbling

//live character counter
let counter  = document.querySelector("#counter");
let count = document.querySelector("#count");

counter.addEventListener("input", (dets) => {
  console.log(dets.target.value.length);
  let cl = dets.target.value.length;
  let limit = count.textContent = 10 - cl;
  if(limit <= 0){
    alert("Limit Reached");
    counter.disabled = true;
  }
});