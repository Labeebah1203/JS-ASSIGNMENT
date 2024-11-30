// QUESTION 1:
// ● Use toUpperCase() on a string variable.
// ● Parse a number from a string using parseInt().
// ● Create an array and use push() to add an item, then pop() to remove it.

console.log(
  "hello i am labeebah and am excited to learn javascript".toUpperCase()
);
console.log(parseInt("300"));

let Places = [];
Places.push("Lekki");
Places.push("Ajah");
Places.push("maryland");
console.log(Places);

// QUESTION 2:
// ● Create a string variable greeting with the value "Hello!".
// ● Create a number variable age with a realistic value.
// ● Create a boolean variable isStudent and set it to true or false.
// ● Print each variable type using typeof to check its data type.

let greeting = "Hello";
let age = "12";
let isStudent = true;

// print variable types
console.log(typeof greeting);
console.log(typeof age);
console.log(typeof isStudent);

// QUESTION 3:
// ● Perform addition, subtraction, multiplication, and division with two numbers.
// ● Use comparison operators to check if a number is greater than or equal to another.
// ● Use logical operators to combine two boolean values and print the result.

// Perform arithmetic operations
let num1 = 20;
let num2 = 5;

console.log("Addition: ", num1 + num2);
console.log("Subtraction: ", num1 - num2);
console.log("Multiplication: ", num1 * num2);
console.log("Division: ", num1 / num2);

// Comparison operators
console.log("Is num1 greater than num2? ", num1 > num2);
console.log("Is num1 greater than or equal to num2? ", num1 >= num2);

// Logical operators
let bool1 = true;
let bool2 = false;

console.log("Logical AND: ", bool1 && bool2);
console.log("Logical OR: ", bool1 || bool2);
console.log("Logical NOT: ", !bool1);

// QUESTION 4:
// ● Create a variable heightInMeters and convert it to centimeters.
// ● Concatenate strings and variables to form a message.

// Convert height from meters to centimeters
let heightInMeters = 1.75;
let heightInCentimeters = heightInMeters * 100;

console.log("Height in centimeters: ", heightInCentimeters);

// Concatenate strings and variables
let name = "Ayomide";
let message =
  "Hello, my name is " + name + " and I am " + heightInMeters + " meters tall.";

console.log(message);

// QUESTION 5: Calculate Age from Birth Year
// ● Declare a constant birthYear and set it to your birth year.
// ● Create a variable currentYear and set it to the current year.
// ● Calculate and print your age using these two variables.

// Calculate age from birth year
const birthYear = 2006;
let currentYear = new Date().getFullYear();
let Age = currentYear - birthYear;

console.log("Your age is:" + "18");

// QUESTION 6: Full Name Formatter
// ● Declare two variables, firstName and lastName, and assign your first and last names.
// ● Create a new variable fullName that combines both names with a space in between.
// ● Print a greeting that includes your full name.

// Declare variables
let firstName = "Labeebah";
let lastName = "Oke";

// Create fullName variable
let fullName = firstName + "Ayomide" + lastName;

// Print greeting
console.log("Hello, my name is " + fullName + ".");

// QUESTION 7: Average Score Calculator
// ● Declare three variables, score1, score2, and score3, and assign them random test scores.
// ● Calculate the average score by adding all three scores and dividing by 3.
// ● Print the average with a "The average score is: " + averageScore.

// Declare score variables
let score1 = 85;
let score2 = 90;
let score3 = 78;

// Calculate average score
let averageScore = (score1 + score2 + score3) / 3;

// Print average score
console.log("The average score is: " + averageScore);

// QUESTION 8: Convert Minutes to Hours and Minutes
// ● Declare a variable totalMinutes and assign it a random number of minutes (e.g., 135).
// ● Calculate how many hours and remaining minutes this total equals.
// ● Print the result in the format: "X hours and Y minutes."

// Declare totalMinutes variable
let totalMinutes = 135;

// Calculate hours and remaining minutes
let hours = Math.floor(totalMinutes / 60);
let remainingMinutes = totalMinutes % 60;

// Print result
console.log(hours + " hours and " + remainingMinutes + "minutes.");

// QUESTION 9: Price Calculator with Tax
// ● Declare a variable itemPrice and set it to any amount (e.g., 50).
// ● Declare a variable taxRate and set it to a percentage (e.g., 0.07 for 7%).
// ● Calculate the total price by adding the tax to the itemPrice.
// ● Print the total price.

// Declare variables
let itemPrice = 50;
let taxRate = 0.07; // 7% tax rate

// Calculate tax amount
let taxAmount = itemPrice * taxRate;

// Calculate total price
let totalPrice = itemPrice + taxAmount;

// Print total price
console.log("Total price: $" + totalPrice.toFixed(2));

// QUESTION 10: Sentence Builder with User Input (Prompt)
// ● Use prompt() to ask the user for their favorite color and food.
// ● Store these in variable color and food.
// ● Build a sentence that says, "Your favorite color is [color] and you love [food]."
// ● Print the sentence.

// Ask user for their favorite color and food
let color = prompt("What is your favorite color?");
let food = prompt("What is your favorite food?");

// Build the sentence
let sentence =
  "Your favorite color is " + color + " and you love " + food + ".";

// Print the sentence
console.log(sentence);
alert(sentence); // Optional: Show the sentence in an alert box
