//Write a program that asks for the names of six dogs.
// The program prints dog names to unordered list <ul> in reverse alphabetical order. (2p)


const dogs = [];

for (i = 0; i <6; i++) {
    let dog_name = prompt(`Dog name (${i+1})? `)

    dogs[i] = dog_name;
}


for(var dog of dogs.sort().reverse()) {
    var doc = document.createElement('li');
    doc.innerHTML = dog;

    document.querySelector('ul').appendChild(doc)
}