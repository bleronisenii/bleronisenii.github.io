console.log("===== LOGICAL OPERATORS =====");

console.log(30 > 50); // false
console.log(30 < 50); // true

console.log();



console.log("===== Logical -  AND && =====");

console.log(true && true); // true
console.log(true && false); // false

let num1 = 50;
let num2 = 100;

console.log(num1 < num2 && num2===150); // true && false = false

console.log(num1<num2 && num2 + 50 === 150); // true + true = true

let expression = num1 < num2 && num2 <= 100 && num1 + 10 !== 60
console.log(typeof expression);
console.log(expression); // false


console.log("===== Logical -  OR || =====");

console.log(true || false); // true 
console.log(false || true); // true
console.log(false || false); // false
console.log(true || true); // true



let number1 = 3;
let number2 = 13;

console.log(number1 > number2 || number2 >= 10); // true


console.log(5 > 0 && (5 + 6 <10) || 10 > 5); // true

// breakdown:
// 5 > 0 = true
// (5 + 6 < 10) = false
// 10 > 5 = true
// true && false || true
// false || true => true


console.log("===== Logical - NOT ! =====");

console.log(!true); // false
console.log(!false); // true

let isValid = false;
console.log(isValid); // false
console.log(!isValid); // true

let num_one = 100;
let num_two = 1000;
console.log(!(num_one > num_two) && "Bob" == "Bob"); // true



console.log();
console.log("===== EQUALITIES =====");

// console.log(3 = "3"); // error

// === ------------------------- sporeduva i tipot i vrednost
// ==  ------------------------- sporeduva samo vrednost 

console.log(3 == "3"); // true
console.log(3 === "3"); // false




console.log();
console.log("===== TRUTHY / FALSY VALUES =====");

let number_One = -1000;
let number_Two = 0;

console.log(Boolean (number_One)); // true
console.log(Boolean (number_Two)); // false
// console.log(!!number_Two); // false ----------- same like writing console.log(Boolean (number_Two));


console.log(Boolean("")); // false 
console.log(Boolean(" ")); // true


console.log(Boolean(null)); // false
console.log(Boolean(!null)); // true

