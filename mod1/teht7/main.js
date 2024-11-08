//Write a program that rolls user defined number of dice and displays the sum of the
// results of the dice rolls.(2p)
//
//     First, program asks the user for the number of dice rolls.
//     Then the program throws a die as many times as the user defined.
//     Print the sum of the results in the console or in the HTML document
//

const amount_of_rolls = parseInt(prompt("Amount of dice rolls: "))

let sum = 0;

for (let i =1; i <= amount_of_rolls; i++) {
    const dice_roll = Math.floor(Math.random() * 6);
    sum += dice_roll;
    console.log(dice_roll);
}

console.log(sum)
