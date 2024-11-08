//Write a program that prompts the user for numbers.
// When the user enters one of the numbers he previously entered,
// the program will announce that the number has already
// been given and stops its operation and then prints all the given numbers to the console in ascending order. (2p)

const numbers = [];

while (true) {
    let num = parseInt(prompt("Number: "))

    if (numbers.includes(num)) {
        console.log("Number has already been given, quitting loop.")
        break
    }
    else {
        numbers.push(num)
    }
}
for(num of numbers.sort((a,b) => a-b)) {
    console.log(num)
}