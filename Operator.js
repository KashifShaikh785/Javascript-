// Variables
let a = 37, b = 69;

// Arithmetic Operators
console.log("Arithmetic Operators:");
console.log(`a + b = ${a + b}`); // Addition
console.log(`a - b = ${a - b}`); // Subtraction
console.log(`a * b = ${a * b}`); // Multiplication
console.log(`a / b = ${a / b}`); // Division
console.log(`a % b = ${a % b}`); // Modulus

// Comparison Operators
console.log("\nComparison Operators:");
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is not greater than b");
}

// Switch Statement
console.log("\nSwitch Statement:");
switch (a) {
  case 10:
    console.log("a is 10");
    break;
  default:
    console.log("a is not 10");
}

// Loops

// For Loop
console.log("\nFor Loop:");
for (let i = 0; i < 5; i++) {
  console.log(`i = ${i}`);
}

// While Loop
console.log("\nWhile Loop:");
let j = 0;
while (j < 5) {
  console.log(`j = ${j}`);
  j++;
}

// Do-While Loop
console.log("\nDo-While Loop:");
let k = 0;
do {
  console.log(`k = ${k}`);
  k++;
} while (k < 5);

// Logical Operators
console.log("\nLogical Operators:");
console.log(`a > b && b < 30: ${a > b && b < 30}`); // Logical AND
console.log(`a > b || b < 30: ${a > b || b < 30}`); // Logical OR
console.log(`!true: ${!true}`); // Logical NOT
