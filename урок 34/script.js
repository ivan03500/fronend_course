let button = document.getElementById("btn")
button.addEventListener("click", function(){
    alert('knopka nazata')
    let message = document.getElementById("message")
    message.innerText = "knopka nazata"
})

function handleClick(){
        alert('knopka nazata')
}

let dark = document.getElementById("darkTheme")
let light = document.getElementById("lightTheme")

dark.addEventListener("click", function(){
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
})

light.addEventListener("click", function(){
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
})

let knopka = document.getElementById("knopka")
knopka.addEventListener("click", function(){
    let nE = document.createElement("p")
    nE.innerText = "добро пожаловать"
    document.body.appendChild(nE)
})

let neknopka = document.getElementById("neknopka")
let input = document.getElementsByTagName("input").value
console.log(input)
neknopka.addEventListener("click", function(){
    alert("привет,", input)
})

let red = document.getElementById("red")
let green = document.getElementById("green")
let blue = document.getElementById("blue")

red.addEventListener("click", function(){
    document.body.style.backgroundColor = 'red'

})
green.addEventListener("click", function(){
    document.body.style.backgroundColor = 'green'

})
blue.addEventListener("click", function(){
    document.body.style.backgroundColor = 'blue'

})




