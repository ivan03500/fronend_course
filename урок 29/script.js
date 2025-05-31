console.log("hello, world");
console.log(5);

//this iis coment
//примеры создания переменных
//var старый способ объявления переменных
var myName = "Jhon Doe";// строка
console.log(myName);// Jhon doe

//let новый способ объявления переменых
let myAge = 30;// число
console.log(myAge);// 30
myAge = 31;// изменение значения переменной
console.log(myAge);// 31

// const Константа значение которе не может быть изменено
const myBirthYear = 1990;// число
console.log(myBirthYear);//1990
//myBirthYear = 1991;// ошибка занчения констаны не может быть изменено
//console.log(myBirthYear);// Uncaught TypeErrore: Argument to constante varible.

// Примеры типов данных
let myString = "Hello, World!"; // строка
let miInteger = 42; // целое число
let myFloat = 3.14; // число с плавающей точкой
let myBoolean = true; // логический тип (true/false)
let myNull = null; // null (отсутствие значения)
let myUndefined; // undefined (переменная объявлена, но не инициализирована)
let myObject = { name: "John", age: 30 }; // объект
console.log(myObject); // { name: 'John', age: 30 }
console.log(myObject.name); // John
console.log(myObject["age"]); // 30
let myArray = [1, 2, 3, 4, 5, "Hello"]; // массив
console.log(myArray); // [ 1, 2, 3, 4, 5 ]
console.log(myArray[0]); // 1
console.log(myArray[2]);
console.log(myArray.length); // 5
console.log(myArray[myArray.length - 1]); // 5  