// Write a voting program as described below for small-scale meeting use. (8p)

// The program asks for the number of candidates.

const number_of_candidates = parseInt(prompt("Number of participants? "))

// Then the program asks for the names of the candidates: 'Name for candidate 1
var candidates = [];

for (i=1;i<=number_of_candidates;i++) {
    var candidate_name = prompt(`Name for candidate ${i}: `)

    var data = {
        name: candidate_name,
        votes: 0
    }

    candidates.push(data)
}

// Store the candidates' names and initial vote count in objects like this:

//[
//     {
//         name: 'ellie',
//         votes: 0,
//     },
//     {
//         name: 'frank',
//         votes: 0,
//     },
//     {
//         name: 'pamela',
//         votes: 0,
//     },
// ]

// The program asks for the number of voters.

const number_of_voters = parseInt(prompt("Number of voters: "))

//The program asks each voter in turn who they will vote for.

for(i =0;i != number_of_voters; i++) {
    const choice = prompt("Who do you want to vote for?")

    if (choice != "") {
        data = candidates.find(item => item.name === choice)
        if (data != undefined) {

        data.votes ++;
        }
    }
}
let sorted = candidates.sort((a,b) => a-b).reverse()



for(candidate in sorted) {
    if (candidate == 0) {
        console.log(`The winner is ${sorted[candidate].name} with ${sorted[candidate].votes} votes.`)
        console.log("results:")
    }
    let loser = sorted[candidate]
    console.log(`${loser.name}: ${loser.votes} votes`);
}
// Voter shoud enter candidate name.
// If the voter enters an empty value instead of the voting number, it will be interpreted as an empty vote.

// The winner is pamela with 3 votes.
// results:
// pamela: 3 votes
// frank: 1 votes
// ellie: 1 votes