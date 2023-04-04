/*
Create a conditional statement that compares two numbers. 
You can choose if those numbers will be equal, less than, greater than, less than or equal to, or greater than or equal to each other. 
Include an if, else if, and else statement. Create an alert that gives your user feedback based on the number. 
Test your statement with different numbers to make sure all alerts work.
*/

// runs then clause
let num1 = 10;
let num2 = 10;

// runs else if clause
// let num1 = 10;
// let num2 = 19;

// runs else clause
// let num1 = 19;
// let num2 = 10;

if (num1 == num2) {
	alert(num1 + " = " + num2);
} else if (num1 < num2) {
	alert(num1 + " < " + num2 + "\n(And technically... " + num1 + " <= " + num2 + ")");
} else { //  if (num1 > num2)
	alert(num1 + " > " + num2 + "\n(And technically... " + num1 + " >= " + num2 + ")");
}