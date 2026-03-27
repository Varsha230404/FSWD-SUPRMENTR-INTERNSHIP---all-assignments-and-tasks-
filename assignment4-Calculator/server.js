let addnum1 = 10
let addnum2 = 15
console.log("Addition :" , addnum1+addnum2)

let subnum1 = 20
let subnum2 = 15
console.log("Subtraction : " , subnum1-subnum2)

let mulnum1 = 50 
let mulnum2 = 50
console.log("Multiplication :" , mulnum1*mulnum2)

let Divnum1 = 100
let Divnum2 = 5
console.log("Divison :" , Divnum1/Divnum2)

let modnum1 = 10
let modnum2 = 3
console.log("Modulus :" , modnum1%modnum2)

console.log("-------------------------------------------------------------------------------")

let num1 = parseFloat(prompt("Enter the first number :"))
let num2 = parseFloat(prompt("Enter the second number :"))
let operator = prompt("Enter the operator to perform operation (+ , - , * , / , % ")
let result

switch(operator)
{
    case '+':
        result = num1 + num2
        break;

    case '-':
        result = num1-num2
        break;

    case '*':
        result = num1*num2;
        break;

    case '/':
        result = num1/num2;
        if(num1===0)
            "Error cannot be divided by zero enter valid number"
        break;

    case '%':
        result = num1%num2
        if(num1===0)
            "Error cannot be divided by zero enter valid number"
        break;

    default:
        result = "Invalid operation"
}

console.log("Result :", result)