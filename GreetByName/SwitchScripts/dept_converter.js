"use strcit";

let deptCode = 2;
let deptName;

switch (deptCode) {
 case 1:
 deptName = "Marketing";
 break;
 case 5:
 deptName = "Human Resources";
 break;
 case 10:
 deptName = "Accounting";
 break;
 case 12:
 deptName = "Legal";
 break;
 case 18:
 deptName = "IT";
 break;
 case 20:
 deptName = "Customer Relations";
 break; // this break isn't "needed"
 // but is included for style
}

console.log(deptName)