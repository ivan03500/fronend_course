let age = 18;
if (age >= 18){
    console.log("вы совершенно летний");
} else if (age < 18 && age > 0 ){
    console.log("вы несовершенно летний");
} else {
    console.log("некоретное значение")
}
let day = 3; 
switch (day){
    case 1:
        console.log("понедельник")
        break
    case 2:
        console.log("вторник")
        break
    case 3:
        console.log("среда")
        break    
    case 4:
        console.log("четверг")
        break
    case 5:
        console.log("пятница")
        break    
    case 6:
        console.log("субота")
         break
    case 7:
        console.log("воскресенье")
        break 
    default:
        console.log("некорректный ввод")               
}
for (let i = 0; i < 10000; i++){
    console.log(i)
}

let names = ["Иван", "Петр", "Сидор"]
for (let name of names){
    console.log(name)
}

// Цикл while
let i = 0
while (i < 50000){
    console.log(i)
    i++
}

let start = true
let number = 0
while (start){
    console.log(number)
    number++
    if (number > 50000){
        start = false
    }
}  
let j = 6;
do {
    console.log("do while:" j)
    j++
} while (j < 5)