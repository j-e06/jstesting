

//Open t8 folder in your IDE/editor. Make a simple calculator. (4p)

//There are two input fields where user enters numbers.
// Based on the drop-down list, calculator performs addition, subtraction, multiplication or division of these two numbers.

//Use the value attribute of <option> elements to decide which operation the calculator needs to do. Example.
// Show the result in <p id="result"> when the button is clicked.



const num1 = document.querySelector('#num1');

const num2 = document.querySelector('#num2');

const operation = document.querySelector('#operation')

const result = document.querySelector('#result')

button = document.querySelector('#start')

function calculator( num1,num2,operation) {

    switch (operation) {
        case 'add':
            result.innerHTML = num1 + num2;
            break;
        case 'sub':
            result.innerHTML = num1 - num2;
            break;
        case 'multi':
            result.innerHTML = num1 * num2;
            break;
        case 'div':
            result.innerHTML = num1 / num2;
            break;
    }
}

button.addEventListener('click', function(evt) {
    calculator(parseInt(num1.value),parseInt(num2.value),operation.value)
})
