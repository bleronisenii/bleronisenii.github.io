// 1) ==================== OPTION WITH GIVEN BALANCE ============

function atm(balance, withdraw_amount)
{
    if(withdraw_amount > balance)
    {
        return 'Not enough money !';
    }
    else if(withdraw_amount > 0 && withdraw_amount <= balance)
    {
        return 'Amount remained in your balance is: ' + (balance - withdraw_amount); 
    }
    else if(withdraw_amount <= 0)
    {
        return `Please insert a valid amount!`;
    }

}

let withdraw_amount = parseInt(prompt("Please insert the amount you want to cash out: "));
prompt(atm(10000,withdraw_amount));



// 2) ============== OPTION TO GIVE YOUR BALANCE ===============

// function atm(balance, withdraw)
// {
//     if(withdraw > balance)
//     {
//         return "Not enough money!";
//     }
//     else if(withdraw > 0 && withdraw <= balance)
//     {
//         return 'Amount remained in your balance is: ' + (balance - withdraw);
//     }
//     else if(withdraw <= 0)
//     {
//         return `Please insert a valid amount!`;
//     }
// }

// let balance = parseInt(prompt("Please give your balance: "));
// let withdraw_amount = parseInt(prompt("Please insert the amount of moeny you want to withdraw: "));

// prompt(atm(balance, withdraw_amount));

