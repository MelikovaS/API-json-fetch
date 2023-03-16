let container = document.querySelector(".container");
let button = document.createElement("button");
button.textContent="ADD";
// let body = document.getElementById("body");
button.classList.add("btn");
button.classList.add("btn-primary");
button.classList.add("mx-3");

let colorInput= document.createElement("input");
colorInput.setAttribute("type", "color");
let newDiv = document.createElement("div");
newDiv.append(button, colorInput);
container.prepend("newDiv");

let row = document.querySelector(".row");

// body.append(box,button,colorInput);
button.addEventListener("click", function(){
    let box = document.createElement("div")
    box.classList.add("box");

    let column = document.createElement("div");
    column.append(box);
    row.append(column);

    // let color = colorInput.value;
    // box.style.backgroundColor = `${color}`;

    // if (!box.classList.contains("active")) {
    //     box.classList.add("active");
    // } else {
    //     box.classList.remove("active");
    // }

    //box.classList.toggle("active");
})
