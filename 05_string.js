const name = "Hitesh";
const repoCount = 50;

console.log(name + repoCount + "Value"); // Hitesh50Value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc');
console.log(gameName[0]); // h
console.log(gameName.__proto__); // shows all string methods

console.log(gameName.length); // 9
console.log(gameName.toUpperCase()); // HITESH-HC
console.log(gameName.charAt(2)); // t
console.log(gameName.indexOf('t')); // 2

const newString = gameName.substring(0,4);
console.log(newString); // hite

// Use slice(0,4) to match substring(0,4) and the expected output
const anotherString = gameName.slice(0,4);
console.log(anotherString); // hite

const newStringOne = "     hitesh     ";
console.log(newStringOne.trim()); // "hitesh"

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20","-")); // https://hitesh.com/hitesh-choudhary