"use script";

const currentDate = new Date();
const currentHour = currentDate.getHours();

let greeting;

if (currentHour >= 0 && currentHour < 12) {
    greeting = "Good morning!";
} else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}

console.log(greeting);
