
//Open t9 folder in your IDE/editor. This is continuation to previous task.
// There is only one text field left,
// where the user writes the calculation (addition, subtraction, multiplication or division) (4p)

// You can use the includes and split methods.

// eval() function is prohibited

// No need to support decimal numbers, calculating integers is enough.

// Example inputs: 3+5, 2-78, 3/6, etc..


const result = document.querySelector('#result');

button = document.querySelector('#start');

function calculator(evt) {

    const data = document.querySelector('#calculation');


    //switch (operation) {
    //    case 'add':
    //        result.innerHTML = num1 + num2;
    //        break;
    //    case 'sub':
    //        result.innerHTML = num1 - num2;
    //        break;
    //    case 'multi':
    //        result.innerHTML = num1 * num2;
    //        break;
    //    case 'div':
    //        result.innerHTML = num1 / num2;
    //        break;
    //}
}

button.addEventListener('click', calculator);