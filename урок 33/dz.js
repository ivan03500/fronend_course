let main= document.getElementById('main-text');
main.style.color = 'blue';

let highlights = document.getElementsByClassName("highlight")
for (let highlight of highlights){
    highlight.style.fontSize = "24px"
}


let nE = document.createElement("p")
nE.innerText = "Привет из JS"
document.body.appendChild(nE)
