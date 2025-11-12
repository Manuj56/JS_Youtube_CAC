// let score = null; // null means empty value
let score = undefined; // undefined means value not assigned yet

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score); // conversion operation
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

// 0, "", null, undefined, NaN => false
// rest all are true

// 1 => true; 0 => false
// "" => false; "hitesh" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// **************************** OPERATIONS **********************************

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(2 / 3);
console.log(2 % 3);

let str1 = "hello ";
let str2 = "world";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1, num2, num3);

let gameCounter = 100;
+gameCounter; // increment operator
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion