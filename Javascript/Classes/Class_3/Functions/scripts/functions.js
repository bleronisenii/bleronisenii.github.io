console.log("============= FUNCTIONS =============");


// ============ Function declaration =============

function say_hello()
{
    console.log("Hello there!");
}

// =========== Calling a function to be executed ===========
say_hello();
say_hello();

function say_goodbye()
{
    console.log("Goodbye! See you next week!");
}
say_goodbye();
say_goodbye();



function add_two_numbers()
{
    let first_num = 22;
    let second_num = 324;
    let result = first_num + second_num;
    console.log(result);
}
add_two_numbers();
add_two_numbers();




// function sum_two_numbers()
// {
//     let first_num = parseInt(prompt("Please enter first number: "));
//     let second_num = parseInt(prompt("Please enter first number: "));
//     let result = first_num + second_num;
//     console.log("sum of two given numbers is: ", result);
// }
// sum_two_numbers();



// =================== FUNCTIONS WITH ARGUMENTS =================

function rectangle_area(a,b)
{
    let result = a * b;
    console.log("Area of rectangle is: ", result);
}
rectangle_area(2,4);
rectangle_area(5,6);




function say_my_full_name(first_name,last_name)
{
    document.write(`${first_name} ${last_name}`);
}
say_my_full_name("Bleron", "Iseni");
say_my_full_name("Arian", "Ibrahimi");



// ================ EXERCISE ===================
function greetPerson(personName)
{
    console.log(`Hello there ${personName}`);
}
greetPerson("Martin");
greetPerson("Kingi");

10




// =========== FUNCTION THAT RETURN VALUES ================
function returnValue(value)
{
    return value;
}

console.log(returnValue("Bleron"));
//alert(returnValue("Fisnik"));
document.write(returnValue("Arian"));




function greetSomeone(person_name)
{
    let greeting = `Hello thereeeee ${person_name}`;
    return greeting;
}
console.log(greetSomeone("blerooo"));
let message = greetSomeone(`ardian`);
console.log(message);



//  ================== EXERCISE  IN CLASS =================

function Sum_Of_Two_Numbers(a,b)
{
    console.log("Sum = ",a+b);
}
function Substraction_Of_Two_Numbers(a,b)
{
    console.log("Sub = ",a-b);
}
function Division_Of_Two_Numbers(a,b)
{
    console.log("Div = ",a/b);
}
function Multiplication_Of_Two_Numbers(a,b)
{
    console.log("Mult = ",a*b);
}

Sum_Of_Two_Numbers(2,3);
Substraction_Of_Two_Numbers(2,3);
Division_Of_Two_Numbers(2,3);
Multiplication_Of_Two_Numbers(2,3);






///  ====================== Homework ===========================
// // Write a function that will be called calculator
// it should take 3 parameters, firstNum, secondNum, Operator
// "+", "-","/","*"
// dependig of the operator, return the approperiate result 



function calculator (a,b,op)
{
    switch(op)
    {
        case  '+':
            return a+b;
             //console.log("Sum = ",a+b);
             break;
        case '-':
             //console.log("Sub = ",a-b);
             return a-b;
             break;
        case '/':
            return a/b;
            // console.log("Div = ",a/b);
             break;
        case '*':
             //console.log("Mult = ",a*b);
             return a*b;
             break;
        default:
            console.log("Please insert valid operator!");
            break;
    }
}

let num1=parseInt(prompt("Enter first number: "));
let num2=parseInt(prompt("Enter second number: "));
let operator = prompt("Enter operator: ");
//calculator(num1,num2,operator);
console.log("Result = ", calculator(num1,num2,operator));


// =========================================================







