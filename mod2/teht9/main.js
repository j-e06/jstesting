//Write a function called even(),
// which receives an array containing numbers as a parameter.
// The function returns a second (usually smaller) array which has the even numbers of the original array.
// The function must not make changes to the original table. (3p)

//Example: In a three-item array, there are items 2, 7 and 4.
// The function returns a two-item array with items 2 and 4.
//
// Print both the original array and the new array to the console in the
// main program after you have called the function.

// You can hard code the array, no need for prompt().

function even(nums) {
    var numbers = [];

    for(num of nums) {
        if (num % 2 == 0) {
            numbers.push(num)
        }
    }
    return numbers
}


const test_arrays = [[2,7,4],[2,4]]

for(arr of test_arrays) {
    console.log(even(arr))
}