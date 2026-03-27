# Console Challenge - Calculator Operations

## Assignment Overview

**Assignment Name:** Console Challenge  
**Description:** Write JS programs for calculator operations inside the browser console.

This assignment teaches you how to use the browser's JavaScript console to perform various calculator operations, from basic arithmetic to advanced calculations.

---

## 🎯 Objectives

1. Learn how to use the browser's Developer Console
2. Understand JavaScript function creation
3. Practice object-oriented programming
4. Master calculator operations and mathematical functions
5. Implement error handling
6. Learn function documentation

---

## 📂 Project Structure

```
console-challenge/
├── index.html              # Main HTML file
├── console-operations.js   # All calculator functions
└── README.md              # This file
```

---

## 🚀 How to Use

### Step 1: Open the Project
1. Open `index.html` in your web browser

### Step 2: Open Developer Console
- **Windows/Linux:** Press `F12` or `Ctrl + Shift + J`
- **Mac:** Press `Cmd + Option + J`
- **Alternative:** Right-click → Inspect → Console tab

### Step 3: Start Using Calculator
Type calculator functions directly in the console:

```javascript
calculator.add(5, 3)           // Output: 8
calculator.multiply(4, 7)       // Output: 28
calculator.power(2, 5)          // Output: 32
calculator.help()               // Show all functions
```

---

## 📐 Available Functions

### Basic Arithmetic Operations

| Function | Description | Example |
|----------|-------------|---------|
| `add(a, b)` | Add two numbers | `calculator.add(5, 3)` → 8 |
| `subtract(a, b)` | Subtract two numbers | `calculator.subtract(10, 4)` → 6 |
| `multiply(a, b)` | Multiply two numbers | `calculator.multiply(6, 7)` → 42 |
| `divide(a, b)` | Divide two numbers | `calculator.divide(20, 4)` → 5 |
| `modulus(a, b)` | Get remainder | `calculator.modulus(17, 5)` → 2 |
| `power(base, exp)` | Raise to power | `calculator.power(2, 3)` → 8 |
| `squareRoot(num)` | Square root | `calculator.squareRoot(16)` → 4 |
| `percentage(num, %)` | Calculate percentage | `calculator.percentage(200, 15)` → 30 |

### Advanced Operations

| Function | Description | Example |
|----------|-------------|---------|
| `average(...nums)` | Average of numbers | `calculator.average(10, 20, 30)` → 20 |
| `sum(...nums)` | Sum of numbers | `calculator.sum(5, 10, 15)` → 30 |
| `product(...nums)` | Product of numbers | `calculator.product(2, 3, 4)` → 24 |
| `factorial(n)` | Factorial | `calculator.factorial(5)` → 120 |
| `max(...nums)` | Maximum number | `calculator.max(5, 2, 9, 1)` → 9 |
| `min(...nums)` | Minimum number | `calculator.min(5, 2, 9, 1)` → 1 |
| `round(num)` | Round to nearest | `calculator.round(4.6)` → 5 |
| `roundUp(num)` | Ceiling | `calculator.roundUp(4.2)` → 5 |
| `roundDown(num)` | Floor | `calculator.roundDown(4.8)` → 4 |
| `absolute(num)` | Absolute value | `calculator.absolute(-10)` → 10 |

### Number Checking Functions

| Function | Description | Example |
|----------|-------------|---------|
| `isEven(num)` | Check if even | `calculator.isEven(4)` → true |
| `isOdd(num)` | Check if odd | `calculator.isOdd(7)` → true |
| `isPrime(num)` | Check if prime | `calculator.isPrime(17)` → true |
| `isPerfectSquare(num)` | Check if perfect square | `calculator.isPerfectSquare(16)` → true |
| `isPositive(num)` | Check if positive | `calculator.isPositive(5)` → true |
| `isNegative(num)` | Check if negative | `calculator.isNegative(-5)` → true |
| `isZero(num)` | Check if zero | `calculator.isZero(0)` → true |

### Temperature Conversion

```javascript
calculator.temperature.celsiusToFahrenheit(25)    // → 77
calculator.temperature.fahrenheitToCelsius(77)    // → 25
calculator.temperature.celsiusToKelvin(25)        // → 298.15
calculator.temperature.kelvinToCelsius(298.15)    // → 25
```

### Unit Conversion

```javascript
calculator.conversion.kmToMiles(5)                // → 3.106855
calculator.conversion.milesToKm(3.106855)         // → 5
calculator.conversion.kgToPounds(70)              // → 154.32340
calculator.conversion.poundsToKg(154.32340)       // → 70
```

### Utility Functions

```javascript
calculator.help()      // Display all available functions
calculator.info()      // Show calculator information
```

---

## 💡 Examples & Use Cases

### Example 1: Simple Calculation
```javascript
calculator.add(10, 5)
calculator.multiply(20, 3)
calculator.divide(100, 4)
```

### Example 2: Chaining Operations
```javascript
// Calculate 50% of (10 + 5)
calculator.percentage(calculator.add(10, 5), 50)  // → 7.5
```

### Example 3: Working with Arrays
```javascript
// Average of array
const numbers = [10, 20, 30, 40, 50];
calculator.average(...numbers)                     // → 30
```

### Example 4: Number Analysis
```javascript
calculator.isPrime(17)           // → true
calculator.isEven(8)             // → true
calculator.isPerfectSquare(25)   // → true
calculator.factorial(5)          // → 120
```

### Example 5: Temperature Conversion
```javascript
// Room temperature in Celsius to Fahrenheit
calculator.temperature.celsiusToFahrenheit(22)    // → 71.6
```

### Example 6: Statistical Calculations
```javascript
const scores = [85, 90, 78, 92, 88];
calculator.average(...scores)                      // → 86.6
calculator.max(...scores)                          // → 92
calculator.min(...scores)                          // → 78
```

---

## 🛠️ Error Handling

The calculator includes error handling for common mistakes:

```javascript
// Division by zero
calculator.divide(10, 0)         // Error message

// Square root of negative
calculator.squareRoot(-5)        // Error message

// Modulus by zero
calculator.modulus(10, 0)        // Error message

// Factorial of negative
calculator.factorial(-5)         // Error message
```

---

## 📝 Console Tips & Tricks

### 1. Save Results to Variables
```javascript
var result = calculator.multiply(5, 10);
console.log(result);  // Output: 50
```

### 2. Use Math Operations
```javascript
var avg = calculator.average(10, 20, 30, 40);
var percentage = calculator.percentage(avg, 25);
```

### 3. Create Complex Expressions
```javascript
calculator.add(
  calculator.multiply(5, 3),           // 15
  calculator.divide(20, 4)              // 5
)                                      // 20
```

### 4. Use Array Spread Operator
```javascript
const numbers = [2, 4, 6, 8, 10];
calculator.sum(...numbers)             // 30
calculator.average(...numbers)          // 6
```

### 5. Console Styling
```javascript
console.log('%cResult:', 'color: green; font-weight: bold;', result);
```

---

## 🧪 Practice Exercises

1. **Basic Calculations**
   - Add: 25 + 15
   - Multiply: 12 × 8
   - Calculate 20% of 500

2. **Number Properties**
   - Check if 29 is prime
   - Check if 64 is a perfect square
   - Find factorial of 6

3. **Statistical Analysis**
   - Find average of: 45, 50, 55, 60, 65
   - Find max and min of above numbers
   - Calculate standard deviation (write your own function)

4. **Temperature Conversions**
   - Convert 30°C to Fahrenheit
   - Convert 85°F to Celsius
   - Convert 100°C to Kelvin

5. **Unit Conversions**
   - Convert 10 km to miles
   - Convert 150 pounds to kg
   - Calculate BMI using conversions

---

## 🎓 Learning Outcomes

After completing this challenge, you should be able to:

✅ Use browser Developer Tools console effectively
✅ Write and execute JavaScript functions
✅ Implement error handling in functions
✅ Create object-based function libraries
✅ Use rest parameters (...args)
✅ Understand callback and chaining concepts
✅ Debug JavaScript code
✅ Document functions with comments
✅ Understand mathematical operations in programming
✅ Work with different data types and validation

---

## 📚 JavaScript Concepts Covered

- **Functions:** Declaration, parameters, return values
- **Objects:** Creating object properties and methods
- **Spread Operator:** Using `...` for multiple arguments
- **Conditional Logic:** if/else statements
- **Loops:** for loops for factorial, prime checking
- **Math Object:** Math.pow(), Math.sqrt(), Math.floor(), etc.
- **Error Handling:** Error messages and validation
- **Console API:** console.log(), console.error(), console.warn()

---

## 🚀 Advanced Enhancements (Optional)

1. Add function to calculate GCD (Greatest Common Divisor)
2. Add function to calculate LCM (Least Common Multiple)
3. Add statistical functions (variance, standard deviation)
4. Add number sequence functions (Fibonacci, Arithmetic/Geometric progressions)
5. Create a history of calculations
6. Add localStorage to save calculation results

---

## 📖 Resources

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)
- [MDN - Console Object](https://developer.mozilla.org/en-US/docs/Web/API/console)
- [MDN - Math Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [JavaScript.info - Functions](https://javascript.info/function-basics)

---

## 🏁 Submission Checklist

- ✅ All calculator functions working correctly
- ✅ Error handling implemented
- ✅ Help menu displays all functions
- ✅ Code is well-commented
- ✅ HTML page explains how to use
- ✅ No console errors when functions are called
- ✅ README documentation is complete

---

**Version:** 1.0  
**Author:** VARSHA S V - FSWD Internship  
**Date:** March 2026

---

## 🎉 Have Fun!

Explore the console, experiment with calculations, and enjoy learning JavaScript!

For questions or issues, check the Help function: `calculator.help()`
