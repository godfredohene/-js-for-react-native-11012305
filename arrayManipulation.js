// Task 1: Function to process an array of numbers
function processArray(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            return number * number; // Square the even numbers
        } else {
            return number * 3; // Triple the odd numbers
        }
    });
}

// Exporting the function for use in other files
module.exports = { processArray };
git add arrayManipulation.js
git commit -m "The processArray function for Task 1"
