//Write a program that asks the user to enter a year and
// notifies the user whether the input year is a leap year.
// A year is a leap year if it is divisible by four.
// However, years divisible by 100 are leap years only if they are also divisible by 400.
// Print the result on the HTML document. (3p)

const num = parseInt(prompt("Year: "))

let output;

if (num / 4) {
    output = "Leap year!"
}
else if (num / 100 && num / 400)