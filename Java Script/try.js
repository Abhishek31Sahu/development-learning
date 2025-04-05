let newp = document.createElement("p");
newp.innerText = "Hey I am red";
newp.classList.add("red");
// newp.style.color = "red";
// let body = document.querySelector("body");
document.body.appendChild(newp);
let h3 = document.createElement("h3");
h3.innerText = "I am a blue h3";
h3.classList.add("blue");
// h3.style.color = "blue";
document.body.appendChild(h3);

let div = document.createElement("div");
div.classList.add("blackborder");
div.classList.add("pinkbackground");
div.innerHTML = "<h1>I'm in a div</h1> <p>Me too!</p>";
document.body.append(div);

let input = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Click me";
document.body.appendChild(input);
document.body.appendChild(btn);

input.setAttribute("placeholder", "Username");
btn.setAttribute("id", "btn");

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
h1.classList.add("unline");
document.body.appendChild(h1);

let secpara = document.createElement("p");
secpara.innerHTML = "Apna College<b> Delta </b>Practice";
document.body.appendChild(secpara);
