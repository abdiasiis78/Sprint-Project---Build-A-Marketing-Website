// Add your Javascript work here

// Task 1: Create a basic Calculator

/* 

 Start creating three prompts, the first two for the two numbers and the second one for the operation
 Also declare another variable for the result.
Using conditional statement, check if the operation is addition, 
subtraction, division or multipilcation
 Add the output to the result variable you created.
 Console.log the result.

*/

// Declare the variables for the two numbers and the operation
let num1 = 5;
let num2 = 7;
let operation = "+";

// Declare a variable for the result
let result;

// Check the value of the operation variable and perform the corresponding operation
if (operation === "+") {
  result = num1 + num2;
} else if (operation === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  result = num1 / num2;
}

// Print the result to the console
console.log(result);

