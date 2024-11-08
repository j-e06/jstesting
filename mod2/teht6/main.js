//Write a function that returns a random dice roll between 1 and 6.
// The function should not have any parameters.
// Write a main program that rolls the dice until the result is 6.
// The main program should print out the result of each roll in an unordered list (<ul>). (2p)

function random_dice() {
    return Math.floor(Math.random()* 6) + 1;
    // The maximum is exclusive and the minimum is inclusive
}

while (true) {
    let num = random_dice();
    if (num == 6) {
        break;
    }
    else {
        let doc = document.createElement('li');
        doc.innerHTML = num;
        document.querySelector('ul').appendChild(doc)
    }
}