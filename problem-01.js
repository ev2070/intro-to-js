/*
Create a conditional statement that checks if two strings are equal. 
Include an if and else statement. 
Create an alert that gives your user feedback based on the strings defined. 
Test your statement with different strings to make sure both alerts work.
*/

// will run the then clause
let str1 = "Hello";
let str2 = "Hello";

// will run the else clause
// let str1 = "Hello";
// let str2 = "World";

// check if str1 and str2 are equivalent
if (str1 == str2) {
	alert("\"" + str1 + "\"" + " and " + "\"" + str2 + "\"" + " are equivalent");
} else {
	alert("\"" + str1 + "\"" + " and " + "\"" + str2 + "\"" + " are not equivalent");
}