let sum = 5 + 3;
console.log("сумма:", sum);
let difference = 5 - 3;
console.log("разность:", difference);
let product = 5 * 3;
console.log("произведение:", product);
let quotient = 5 / 3;
console.log("разность:", quotient);
let remainder = 5 % 3;
console.log("остаток от деления:", remainder);
let exponentiation = 5 ** 3;
console.log("возведение в степень:", exponentiation);

let isEqual = (5 == 5);
console.log("равенство:", isEqual);
let isNotEqual = (5 != 3);
console.log("неравенство:", isNotEqual);
let isStrictEqual = (5 === 5);
console.log("строгое равенство:", isStrictEqual);
let isStrictNotEqual = (5 !== 3);
let isStrictNotEqual2 = (5 !== '5');
console.log("строгое неравенство:", isStrictNotEqual);
console.log("строгое неравенство:", isStrictNotEqual2);

let isGeater = (5 > 3);
console.log("больше:", isGeater);
let isLess = (5 < 3);
console.log("меньше:", isLess);
isGeaterOrEqual = (5 >= 3);
console.log("больше или равно:", isGeaterOrEqual);
let isLessOrEqual = (5 <= 3);
console.log("меньше или равно:", isLessOrEqual);

let age = 16;
if (age >= 18){
    console.log("вы совершенно летний");
} else{
    console.log("вы несовершенно летний");
}
let number = 10;
if ( number > 0){
    console.log("число положительное");
} else if ( number < 0){
    console.log("число отрицательное");
} else if ( number = 0){
    console.log("число равно нулю");
} else{
    console.log("неизвестное число");
}