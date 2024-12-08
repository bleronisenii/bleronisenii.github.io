
function calculator (a,b,op)
{
    switch(op)
    {
        case  '+':
             console.log("Sum = ",a+b);
             break;
             //return a+b;
        case '-':
             console.log("Sub = ",a-b);
             break;
             //return a-b;
        case '/':
            console.log("Div = ",a/b);
            break;
            //return a/b;
        case '*':
             console.log("Mult = ",a*b);
             break;
             //return a*b;
        default:
            console.log("Please insert valid operator!");
            break;
    }
}
let num1=parseInt(prompt("Enter first number: "));
if(isNaN(num1))
{
    alert(`Please insert a number!`);
   // process.exit(1);
   //how to stop the program here?????
}
let num2=parseInt(prompt("Enter second number: "));
if(isNaN(num2))
{
    alert(`Please insert a number!`);
    //process.exit(1);
    //how to stop the program here?????
}
let operator = prompt("Enter operator: ");
calculator(num1,num2,operator);
