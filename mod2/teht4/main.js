//Write a program that asks the user for numbers until he gives zero.
// The given numbers are printed in the console from the largest to the smallest. (2p)

const numbers = [];

while (true) {
    var num = parseInt(prompt("Number (0 to stop): "));
    if (num == 0) {
        break
    }
    numbers.push(num)
}

for (num of numbers.sort((a,b) => a-b).reverse()) {
    console.log(num);
}