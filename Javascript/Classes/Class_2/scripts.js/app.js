console.log("============= STRINGS =============");

let firstName;
firstName = "Bob";

let lastName = "Bobsky";

// =====> using doublequotes initailizing strings

let doubleQuotes = "This is a string with double quotes";

// ===> initializing string using singlequotes 

let singleQuotes = 'This is a string with single quotes';


// ===> initializing string using backticks (template literals or ``)

let backticksString = `This is a string with backticks (template literals)`;




console.log("========== COMBINING STRINGS ==========");

// ===> using ' + '

let fullName = 'First Name : '+ firstName ;
console.log(fullName);

console.log("Last name : " + " " + lastName);

console.log(firstName + " " + lastName);

let age = 24;
console.log("Age : " + " " + age);

console.log(2 + 2);
console.log(2 + "2");


fullName = `Full name ${firstName} ${lastName}`;
console.log(fullName);



console.log("========== QUOTES WITHIN STRINGS ==========");

// let semtemce = 'This isn't possible'
let sentence1 = "This isn't hard";
let sentence2 = ' He replied: "Hey there"';
// using backslash character it is possible
let sentence3 = 'This isn\'t possible';
let sentence4 = '\' TO BE \' or \'NOT TO BE\'';
let sentence5 = `"${sentence4}, the question is now"`;
console.log(sentence5);






console.log("========== NON-VALUE VALUES ==========");

// undefined
let undefined_variable;
console.log(undefined_variable);


// null
let empty_variable = null;
console.log(empty_variable);

console.log("========== SPECIAL NUMBER ==========");

console.log("========== NaN =========="); // Not a Number
console.log(NaN); /// NaN shows if the result is true or false, not values
console.log(typeof NaN);
let result = 100/"deset" // nevalidna operacija na pr: number / string ---- 
console.log(result); // nevalidna operacija na pr: number / string  result = NaN 

isNaN(result);
console.log(isNaN()); // true

//old versions of JS
console.log(isNaN("tekst")); // true
console.log(Number.isNaN("tekst")); //false




console.log("========== SPECIAL NUMBER ==========");

let infinity = Infinity;
console.log(infinity);
console.log(typeof infinity);

console.log(1 / 0);
console.log(-1 / 0);





