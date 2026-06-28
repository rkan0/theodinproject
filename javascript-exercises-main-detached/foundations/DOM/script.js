const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);


const red = document.createElement("p");
red.textContent = "Hey I'm red!";
red.setAttribute("style", "color: red")
container.appendChild(red);

const blue = document.createElement("h3");
blue.textContent = "I'm a blueh3!";
blue.setAttribute("style", "color: blue");
container.appendChild(blue);

const divtwo = document.createElement("div");
divtwo.setAttribute("style", "background-color: pink; border-style: solid; border-with: 1px; border-color: black")

const childone = document.createElement("h1");
childone.textContent = "I'm in a div";
divtwo.appendChild(childone);

const childtwo = document.createElement("p");
childtwo.textContent = "me too"
divtwo.appendChild(childtwo);

container.appendChild(divtwo)

/**

an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, 
append the <h1> and <p> to it before adding it to the container. */