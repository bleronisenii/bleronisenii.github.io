console.log("========== CONTROL STRUCTURES ==========");
// 1) Conditional Statements
// 2) Switch Statement
// 3) Looping structures

// Purpose: Control the flow of a program


console.log();
console.log("======= CONDITIONAL STATEMENTS =======");


let num = 10;





console.log("======= IF and ELSE Statement =======");


// Base Syntax
// if(boolean statement)
// {
//     // code ...
// }

if(num > 0)
{
    console.log(`The number  ${num} is positive`);
}
else
{
    console.log(`The number ${num} isn\'t positive`);   
}



console.log("======= ELSE IF Statement =======");

num = 101;

if(num>100)
{
    console.log(`The number  ${num} is larger than 100`);
}
else if(num>0)
{
    console.log(`The number  ${num} is positive`);
}
else if(num < 0)
{
    console.log(`The number ${num} is negative`);   
}
else 
{
    console.log(`The number ${num} isn\'t positive nor negative`);   
}




console.log("======================   GETTING AN INPUT =============");


// ALWAYS OUTPUT IS A STRING 

// let input = prompt("Enter a number: ");
// console.log(input);
// console.log(typeof(input));


// CONVERTING FROM STRING TO A NUMBER
// console.log("After parsing the input into integer");

// let parsed_number = parseInt(input);
// console.log(parsed_number);
// console.log(typeof parsed_number);


// if(Number.isNaN(parsed_number))
// {
//     alert("You have entered an invalid number!");
// }
// else
// {
//     alert(`The parsed number value is: ${parsed_number}`);
// }


let input1 = prompt('How much money do you have:');
parseInt(input1);

if(input1 > 100 )
{
    alert(`you are rich `);
}
else if(input1<100)
{
    alert("buddy you are broke");
}
else
{
    alert("you're not supposed to be here")
}

