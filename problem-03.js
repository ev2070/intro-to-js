/*
Create a function that takes in two arguments and returns a concatenated string either as a console.log or alert.
*/

// Function definition
function concatTwoArgs(arg1, arg2) {
	return "Concatenated string:\n\t" + arg1 + " and " + arg2;
}

// My arguments (ints)
let myArg1 = 123;
let myArg2 = 456;

// My arguments (strings)
// let myArg1 = "Tom";
// let myArg2 = "Jerry";

// Function call
let myReturn = concatTwoArgs(myArg1, myArg2);
console.log(myReturn);
