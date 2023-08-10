let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");
let result = document.getElementById("result-el");

function performOperation(operation) {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    
    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = "Please enter valid numbers.";
        return;
    }

    let calculatedResult;
    
    switch (operation) {
        case 'add':
            calculatedResult = num1 + num2;
            break;
        case 'subtract':
            calculatedResult = num1 - num2;
            break;
        case 'divide':
            calculatedResult = num1 / num2;
            break;
        case 'multiply':
            calculatedResult = num1 * num2;
            break;
        default:
            result.textContent = "Invalid operation.";
            return;
    }

    result.textContent = "Result: " + calculatedResult;
}
