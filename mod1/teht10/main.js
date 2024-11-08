//Make a program that asks the user for the number of dice and
// the sum of the eye numbers of interest to the user.
// The purpose of your program is now to find out with what probability the number of dice given by the user
// produces the sum of the number of eyes given by the user.
// For example, if the user enters 3 as the number of dice and 17 as the sum of the eyes,
// the program calculates the probability that the sum of the three dice's eye numbers is 17. (5p)

const number_of_dice = parseInt(prompt("How many dice? "))

const wanted_total = parseInt(prompt("How many eyes? "))

//
//    Solve the problem by simulating: Have the program roll a given number of dice in a for-loop (e.g. 10,000 times)
//    and calculate what proportion of the repetitions produced the sum of eye numbers of interest to the user.
//    Print the result on the HTML document:

function random_num(min,max) {
    const minCeiled = Math.ceil(min);

    const maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    // The maximum is exclusive and the minimum is inclusive
}

//
//    you can limit the number of decimals with toFixed()
//    test values:
//        2 dice, sum 7, probability is about 15-17%
//        3 dice, sum 15, probability is about 5%
//

let loop_count = 0;

let amount_of_correct_totals_idk = 0;

while (loop_count != 1000) {
    let eye_total = 0;
    for (i= 1; i <=number_of_dice; i++) {
        eye_total += random_num(1,6);
    }

    // eye_total = number of dice * random number between 0,6

    if (eye_total == wanted_total) {
        amount_of_correct_totals_idk += 1
    }

    loop_count +=1
}

line = amount_of_correct_totals_idk / 1000

console.log(line)