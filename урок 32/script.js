function greet(){
    console.log("hello, world");
}

greet();

function greetUser(name){
    console.log("hello ", name);
} 

greetUser("max");
greetUser("ivan");
greetUser("misha");

function sumnumber(a, b){
    let result = a + b;
    console.log(result)
}

sumnumber(4, 5);

function sum(a, b){
    let result = a + b;
    return result;
}

let resultfunction = sum(4, 8); 
console.log(resultfunction);
console.log(resultfunction + 5);

let num_a = parseInt(prompt("Введите первое число: "));
let num_b = parseInt(prompt("Введите второе число: "));

let resultProgasum = sum(num_a, num_b);
console.log(resultProgasum);
alert(resultProgasum)