console.log(document.getElementById("title"));
console.log(document.getElementById("title").innerText);

let title = document.getElementById("title");
console.log(title);
console.log(title.innerText);

let description = document.getElementsByClassName("description");
console.log(description);
console.log(description[0]);
console.log(description[0].innerText);

let i_teg = document.getElementsByTagName("i");
console.log(i_teg);
console.log(i_teg[0]);
console.log(i_teg[0].innerText);

let italic = document.querySelector(".description")
console.log(italic)
console.log(italic.innerText)

let italic2 = document.querySelectorAll(".description")
console.log(italic2)
console.log(italic2[0])

let tag_p = document.getElementById("tag_p")
console.log(tag_p)
console.log(tag_p.innerHTML)
console.log(tag_p.innerText)

tag_p.innerHTML = "<b>new</b> content";
console.log(tag_p.innerHTML)
console.log(tag_p.innerText)

title.style.color = 'red'
title.style.fontSize = '50px'
title.style.fontFamily = 'Arial'
title.style.textAlign = 'center'

document.body.style.backgroundColor = 'lightblue'

let newElement = document.createElement("p")
newElement.innerText = 'this is a new paragraph.'
document.body.appendChild(newElement)
newElement.style.color = 'green'
newElement.style.fontWeight = 'bold'

tag_p.remove();
description[1].remove();