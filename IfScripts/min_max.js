"use script";

var a = 25;

var b = 29;

var c = 30;

var smallest;

if (a <= b && a <= c) {
    smallest = a;
} else if (b <= a && b <= c) {
    smallest = b;
} else {
    smallest = c;
}

console.log("smallest number is:" + smallest);

var largest;

if (a >= b && a >= c) {
    largest = a;
} else if (b >= a && b >= c) {
    largest = b;
} else {
    largest = c;
}

console.log("largest number is:" + largest);