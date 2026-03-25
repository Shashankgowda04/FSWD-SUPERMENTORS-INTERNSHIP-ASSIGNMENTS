// --- CALCULATOR OPERATIONS ---

// 1. Addition Function
function add(a, b) {
    return a + b;
}

// 2. Subtraction Function
function subtract(a, b) {
    return a - b;
}

// 3. Multiplication Function
function multiply(a, b) {
    return a * b;
}

// 4. Division Function (with error handling)
function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero!";
    }
    return a / b;
}

// --- EXECUTING THE CHALLENGE ---

console.log("%c--- CALCULATOR CONSOLE CHALLENGE ---", "color: blue; font-size: 16px; font-weight: bold;");

// Testing the functions
let num1 = 20;
let num2 = 5;

console.log(`Numbers used: ${num1} and ${num2}`);
console.log("Addition:", add(num1, num2));
console.log("Subtraction:", subtract(num1, num2));
console.log("Multiplication:", multiply(num1, num2));
console.log("Division:", divide(num1, num2));

console.log("%cTry it yourself! Type 'add(10, 5)' in the console below.", "color: green; font-style: italic;");