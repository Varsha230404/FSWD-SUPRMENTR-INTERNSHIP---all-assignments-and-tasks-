const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },

  divide(a, b) {
    if (b === 0) {
      console.error('❌ Error: Cannot divide by zero!');
      return 'Error: Division by zero';
    }
    return a / b;
  },

  modulus(a, b) {
    if (b === 0) {
      console.error('❌ Error: Cannot use modulus with zero!');
      return 'Error: Modulus by zero';
    }
    return a % b;
  },

  power(base, exponent) {
    return Math.pow(base, exponent);
  },

  squareRoot(num) {
    if (num < 0) {
      console.error('❌ Error: Cannot find square root of negative number!');
      return 'Error: Negative number';
    }
    return Math.sqrt(num);
  },

  percentage(num, percent) {
    return (num * percent) / 100;
  },

  average(...numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  },

  factorial(n) {
    if (n < 0) {
      console.error('❌ Error: Factorial of negative number not allowed!');
      return 'Error: Negative number';
    }
    if (!Number.isInteger(n)) {
      console.error('❌ Error: Factorial requires integer!');
      return 'Error: Not an integer';
    }
    if (n === 0 || n === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  },

  sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  },

  product(...numbers) {
    return numbers.reduce((acc, num) => acc * num, 1);
  },

  max(...numbers) {
    return Math.max(...numbers);
  },

  min(...numbers) {
    return Math.min(...numbers);
  },

  round(num) {
    return Math.round(num);
  },

  roundUp(num) {
    return Math.ceil(num);
  },

  roundDown(num) {
    return Math.floor(num);
  },

  absolute(num) {
    return Math.abs(num);
  },

  isEven(num) {
    if (!Number.isInteger(num)) {
      console.warn('⚠️ Warning: Number is not an integer');
    }
    return num % 2 === 0;
  },

  isOdd(num) {
    if (!Number.isInteger(num)) {
      console.warn('⚠️ Warning: Number is not an integer');
    }
    return num % 2 !== 0;
  },

  isPrime(num) {
    if (!Number.isInteger(num)) {
      console.warn('⚠️ Warning: Number is not an integer');
      return false;
    }
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  },

  isPerfectSquare(num) {
    if (num < 0) return false;
    const sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
  },

  isPositive(num) {
    return num > 0;
  },

  isNegative(num) {
    return num < 0;
  },

  isZero(num) {
    return num === 0;
  },

  temperature: {
    celsiusToFahrenheit(celsius) {
      return (celsius * 9/5) + 32;
    },

    fahrenheitToCelsius(fahrenheit) {
      return (fahrenheit - 32) * 5/9;
    },

    celsiusToKelvin(celsius) {
      return celsius + 273.15;
    },

    kelvinToCelsius(kelvin) {
      return kelvin - 273.15;
    }
  },

  conversion: {
    kmToMiles(km) {
      return km * 0.621371;
    },

    milesToKm(miles) {
      return miles * 1.60934;
    },

    kgToPounds(kg) {
      return kg * 2.20462;
    },

    poundsToKg(pounds) {
      return pounds * 0.453592;
    }
  },

  help() {
    console.clear();
    console.log('%c🖥️ CONSOLE CHALLENGE - Available Functions', 'font-size: 16px; color: #667eea; font-weight: bold;');
    
    console.log('%c\n📌 BASIC ARITHMETIC', 'font-size: 12px; font-weight: bold; color: #764ba2;');
    console.log('calculator.add(a, b) - Add two numbers');
    console.log('calculator.subtract(a, b) - Subtract two numbers');
    console.log('calculator.multiply(a, b) - Multiply two numbers');
    console.log('calculator.divide(a, b) - Divide two numbers');
    console.log('calculator.modulus(a, b) - Get remainder');
    console.log('calculator.power(base, exponent) - Raise to power');
    console.log('calculator.squareRoot(num) - Get square root');
    console.log('calculator.percentage(num, percent) - Calculate percentage');

    console.log('%c\n🔢 ADVANCED OPERATIONS', 'font-size: 12px; font-weight: bold; color: #764ba2;');
    console.log('calculator.average(...nums) - Average of numbers');
    console.log('calculator.sum(...nums) - Sum of numbers');
    console.log('calculator.product(...nums) - Product of numbers');
    console.log('calculator.factorial(n) - Factorial of number');
    console.log('calculator.max(...nums) - Maximum number');
    console.log('calculator.min(...nums) - Minimum number');
    console.log('calculator.absolute(num) - Absolute value');
    console.log('calculator.round(num) - Round to nearest');
    console.log('calculator.roundUp(num) - Ceiling');
    console.log('calculator.roundDown(num) - Floor');

    console.log('%c\n✅ NUMBER CHECKING', 'font-size: 12px; font-weight: bold; color: #764ba2;');
    console.log('calculator.isEven(num) - Check if even');
    console.log('calculator.isOdd(num) - Check if odd');
    console.log('calculator.isPrime(num) - Check if prime');
    console.log('calculator.isPerfectSquare(num) - Check if perfect square');
    console.log('calculator.isPositive(num) - Check if positive');
    console.log('calculator.isNegative(num) - Check if negative');
    console.log('calculator.isZero(num) - Check if zero');

    console.log('%c\n🌡️ TEMPERATURE CONVERSION', 'font-size: 12px; font-weight: bold; color: #764ba2;');
    console.log('calculator.temperature.celsiusToFahrenheit(c)');
    console.log('calculator.temperature.fahrenheitToCelsius(f)');
    console.log('calculator.temperature.celsiusToKelvin(c)');
    console.log('calculator.temperature.kelvinToCelsius(k)');

    console.log('%c\n📏 UNIT CONVERSION', 'font-size: 12px; font-weight: bold; color: #764ba2;');
    console.log('calculator.conversion.kmToMiles(km)');
    console.log('calculator.conversion.milesToKm(miles)');
    console.log('calculator.conversion.kgToPounds(kg)');
    console.log('calculator.conversion.poundsToKg(pounds)');

    console.log('%c\n💡 EXAMPLES', 'font-size: 12px; font-weight: bold; color: #4ec9b0;');
    console.log('calculator.add(5, 3) → 8');
    console.log('calculator.multiply(4, 7) → 28');
    console.log('calculator.power(2, 5) → 32');
    console.log('calculator.average(10, 20, 30) → 20');
    console.log('calculator.isPrime(17) → true');
    console.log('calculator.temperature.celsiusToFahrenheit(25) → 77');
  },

  info() {
    console.log('%c🖥️ Console Challenge - Calculator Operations v1.0', 'font-size: 14px; color: #667eea; font-weight: bold;');
    console.log('Author: VARSHA S V - FSWD Internship');
    console.log('Date: March 2026');
    console.log('Type "calculator.help()" for full documentation');
  }
};

console.log('%c✅ Calculator loaded successfully!', 'font-size: 12px; color: #4ec9b0; font-weight: bold;');
console.log('Type "calculator.help()" for all available functions');
console.log('Type "calculator.info()" for more information');

window.calculator = calculator;
