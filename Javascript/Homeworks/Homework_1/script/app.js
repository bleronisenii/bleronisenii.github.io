let phones = 30;
let price = 119.95;
let tax = 5;

let price_phones = phones * price;

let total = ( price_phones * (tax / 100) ) + price_phones;

console.log("Total : ", total);