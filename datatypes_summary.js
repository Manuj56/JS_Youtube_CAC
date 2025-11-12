// Primitive

// 7 types : String, Number, BigInt, Boolean, Undefined, Symbol, Null
// Primitve types are Call by Value
/* Call By Value : When a primitive data type (like a number, string, boolean, null, undefined, or symbol) is passed to a function, 
a copy of its value is created and assigned to the function's parameter. */



// Reference (Non-Primitive)

// Primitive

// 7 types : String, Number, BigInt, Boolean, Undefined, Symbol, Null
// Primitive types are call-by-value
/* Call By Value : When a primitive data type (like a number, string, boolean, null, undefined, or symbol) is passed to a function,
a copy of its value is created and assigned to the function's parameter. */


// Reference (Non-Primitive)

// Object, Array, Function
// Reference types are call-by-reference
/* Call By Reference : When a reference data type (like an object, array, or function) is passed to a function,
the function receives a reference (or pointer) to the original data in memory, rather than a copy of its value. */

// JavaScript is a dynamically typed language.
/* This means that type checking, or the process of verifying the data types of values in a program,
occurs at runtime rather than at compile time. */

/* JavaScript is a case-sensitive language. This means that identifiers like variable names,
function names, and keywords must be used with consistent capitalization throughout the code. */


const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined

// const id = symbol('123');
// const anotherId = symbol('123'); ---> giving error as symbol should be with capital S

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false

const bigNumber = 3456789012345678901234567890n; // BigInt
console.log("Type of bigNumber is: ", typeof bigNumber); // "bigint"

const heros = ["shaktiman", "naagraj", "doga"]; // Array
let myobj = {
  name: "hitesh",
  age: 22,
}; // Object

const myFunction = function () {
  console.log("Hello World");
}

console.log(typeof outsideTemp); // "object" (this is a known quirk in JavaScript; null is considered an object type)
console.log(typeof scoreValue); // "number"
console.log(typeof isLoggedIn); // "boolean"
console.log(typeof userEmail); // "undefined"
console.log(typeof heros); // "object"
console.log(typeof myFunction); // "function"
console.log(typeof myobj); // "object"

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) and Heap (Reference) Memory

let myYoutubeName = "CodeWithHitesh"; // stored in stack memory
let anotherName = myYoutubeName;
anotherName = "CodeWithHarry"; // stored in stack memory

console.log(myYoutubeName);
console.log(anotherName);

let userone = {
  name: "Hitesh",
  age: 22,
}; // stored in heap memory

let usertwo = userone;
usertwo.name = "Harry";

console.log(userone);
console.log(usertwo);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
