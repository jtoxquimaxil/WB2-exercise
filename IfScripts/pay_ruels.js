"strict"
//Example 
// var numKids = 12;
// var price;
// price = numKids * 9.95; // price is $9.95/kid
// if (numKids >= 6) {
//  price = price * .9; // a 10% discount
// }
// console.log(price)

//Exercise 1

var payRate = 12.50;

var hoursWorked = 20;

var overTime = 40 - hoursWorked

var grossPay = (payRate * hoursWorked) + (overTime * payRate * 1.5);

if (hoursWorked > 40 ) {
    overTime = 40 - hoursWorked;  
}
else 
{
    overTime = 0;
}

console.log("grosspay is " + grossPay );
console.log("The amount of overtime hours worked were " + overTime);

////////////////////////////////////////////

var payRate = 25.00;

var hoursWorked = 20;

var overTime = hoursWorked - 40 

var grossPay = (payRate * hoursWorked)

if (hoursWorked <= 40 ) {
    overTime = hoursWorked - 40;  
}
else 
{
    overTime = 0;
}

console.log("grosspay is " + grossPay );
console.log("The amount of overtime hours worked were " + overTime);

////////////////////////////////////////////////

var payRate = 17.30;

var hoursWorked = 45;

var overTime = hoursWorked - 40 

var grossPay = (payRate * hoursWorked);

if (hoursWorked > 40 ) {
    overTime = hoursWorked - 40;  
}
else 
{
    overTime = 0;
}

var basePay = 40 * payRate;
var overTimeRate = 

console.log("grosspay is " + grossPay );
console.log("The amount of overtime hours worked were " + overTime);



