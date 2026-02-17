// Select
let inp = document.querySelectorAll("input");
let form = document.querySelector("form");

form.addEventListener("submit", (dets) => {
    dets.preventDefault();
    console.log(
        inp[0].vlaue, // img link
        inp[1].vlaue, // name
        inp[2].vlaue, // bio
        inp[3].vlaue, // email
        inp[4].vlaue, // phone number
    );
 
// create card
let card = document.createElement("div");
let dp_img = document.createElement("div");
let img = document.createElement("img");
let h3 = document.createElement("h3");
let h4 = document.createElement("h4");
let h5 = document.createElement("h5");
let h6 = document.createElement("h6");

// add class
card.classList.add("card");
dp_img.classList.add("dp_img");

// add html - append
document.body.append(card);

// child add
card.appendChild(dp_img);
dp_img.appendChild(img);
card.appendChild(h3);
card.appendChild(h4);
card.appendChild(h5);
card.appendChild(h6);
console.log(card);

// add form data
img.setAttribute("src", inp[0].value ? inp[0].value: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVMb2wND4a-koXz4TxaPDUex63G01dOev3u4MMNm-dnOzc3yYnrSnN9Jk&s");
h3.textContent = inp[1].value ? inp[1].vlaue: "username";
h4.textContent = inp[2].value ? inp[2].vlaue: "bio";
h5.textContent = inp[3].value ? inp[3].vlaue: "email@gmail.com";
h6.textContent = inp[4].value ? inp[4].vlaue: "+9187586955";

inp.forEach((inp) => {
    if(inp.value !== "submit") {
        inp.value = "";
    }
});
});
