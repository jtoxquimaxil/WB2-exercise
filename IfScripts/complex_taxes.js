"use script";

//Calculate federal Tax bades on annual gross income and a 
// filing status

var annualIncomeRange = 12.50;

var taxRate = 20;

var overTime = 40 - hoursWorked

var incomeTax = (hoursWorked * payRate) + (overTime * payRate * 1.5 );

if (annualIncomeRange > 12000 ) {
    incomeTax = 0.05 * hoursWorked;  
}
else 
{
    overTime = 0;
}

console.log("grosspay is " + grossPay );
console.log("The amount of overtime hours worked were " + overTime);