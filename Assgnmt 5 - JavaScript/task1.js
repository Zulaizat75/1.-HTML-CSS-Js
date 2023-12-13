// Declare and assign values to variables
let num1 = 50;
let num2 = 20;

// Display current values in the browser
document.getElementById('num1').textContent = num1;
document.getElementById('num2').textContent = num2;

// Perform basic arithmetic operations
let additionResult = num1 + num2;
let subtractionResult = num1 - num2;
let multiplicationResult = num1 * num2;
let divisionResult = num1 / num2;

// Display results in the browser
document.write(`<p>Addition: ${num1} + ${num2} = ${additionResult}</p>`);
document.write(`<p>Subtraction: ${num1} - ${num2} = ${subtractionResult}</p>`);
document.write(`<p>Multiplication: ${num1} * ${num2} = ${multiplicationResult}</p>`);
document.write(`<p>Division: ${num1} / ${num2} = ${divisionResult}</p>`);

// Display result in console
console.log(`Addition: ${num1} + ${num2} = ${additionResult}`);
console.log(`Subtraction: ${num1} - ${num2} = ${subtractionResult}`);
console.log(`Multiplication: ${num1} * ${num2} = ${multiplicationResult}`);
console.log(`Division: ${num1} / ${num2} = ${divisionResult}`);