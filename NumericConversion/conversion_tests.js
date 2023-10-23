"strict"

// Description: This script tests various numeric conversion techniquues
// Author: Jordan Q. Newprogammer 

// //Define the variables 

var a = " 101.1 "; // parseFloat()

var b = "55";  // parseint()

var c = "402 Stevens"; // parseFloat()

var d = "Number 5"; // NAN


var a = " 101.1 ";
a = parseInt(a);

console.log(a);

a = parseFloat(101.1);

console.log(a);

a = Number(5);

console.log(a);

var b = "55";

b = parseInt(55);
b = parseFloat(55);
b = Number(55);

console.log(b);
console.log(b);
console.log(b);

var c = "402 Stevens";

c = parseInt("402 Stevens");
c = parseFloat( "402 Stevens" );
c = Number("402 Stevens" );

console.log(c);
console.log(c);
console.log(c);

var d = "Number 5";

d = parseInt("Number 5");
d = parseFloat("Number 5");
d = Number("Number 5");

console.log(d);
console.log(d);
console.log(d);






