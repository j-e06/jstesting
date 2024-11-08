//Write a program that prompts for three integers.
// The program prints the sum, product and average of the numbers to the HTML document. (3p)
//
//     remember to convert strings to numbers when adding
//     Check assignment

const num1 = parseInt(prompt("Number 1: "));

const num2  = parseInt(prompt("Number 2: "));

const num3 = parseInt(prompt("Number 3: "));

let line = `Sum: ${num1+num2+num3} | Product: ${num1*num2*num3} | Average: ${(num1+num2+num3) /3}`

document.querySelector('h1').innerHTML = line;