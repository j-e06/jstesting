//Modify the function above so that it gets the number of sides on the dice as a parameter.
// With the modified function you can for example roll a 21-sided role-playing dice.
// The difference to the last exercise is that the dice rolling in the main program continues until the program
// gets the maximum number on the dice,
// which is asked from the user at the beginning. (2p)
function random_dice(sides) {
    return Math.floor(Math.random()* sides) + 1;
    // 1 - sides, so 1-6, 1- 21, etc.
    //min number, max number
}

const sides = parseInt(prompt("Number dice sides: "))

while (true) {
    let num = random_dice(sides);
    console.log(num)
    if (num == sides) {
        break;
    }
    else {
        let doc = document.createElement('li');
        doc.innerHTML = num;
        document.querySelector('ul').appendChild(doc)
    }
}


