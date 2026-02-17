let h1 = document.querySelector("h1");

window.addEventListener("keydown", (dets) => {
    // console.log(dets.key);  
    if(dets.key === " "){
        h1.textContent = "Space Bar";
    }           
    else {
        h1.textContent = dets.key;
    }
    console.log(dets);
});


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
