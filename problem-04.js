/*
Create function that takes in one argument that is passed through a conditional statement. 
Return the result as an alert or console.log. 
Test all of your conditions to make sure you can receive all of your results back. 
*/

// Function definition
function myConditional(arg) {
	if (arg >= 90 && arg <= 100) {
		return "A";
	} else if (arg >= 80 && arg < 90) {
		return "B";
	} else if (arg >= 70 && arg < 80) {
		return "C";
	} else if (arg >= 60 && arg < 70) {
		return "D";
	} else if (arg >= 0 && arg < 60) {
		return "F";
	}
	return grade + " is not a valid grade";
}

// valid grade from 0 to 100 inclusive
let grade = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(0) + 1)) + Math.ceil(0);

// invalid grades
// let grade = -1;
// let grade = "hello";

// String indicating invalid argument to myConditional
let failStr = grade + " is not a valid grade";

// Function call & storing return
let myReturn = myConditional(grade);

// Diplaying function return
if (myReturn == failStr) {
	console.log(myReturn);
} else {
	console.log(grade + " gives you a grade of: " + myReturn);
}