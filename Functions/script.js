//Problem 1. English digit
//Write a function that returns the last digit of given integer as an English word.
function getLastDigit(number) {
    switch (number % 10 | 0) {
        case 0:
            return 'zero';
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
    }
}

console.log('Problem 1. English digit: 987');
console.log(getLastDigit(987));

//Problem 2. Reverse number
//Write a function that reverses the digits of given decimal number.
function myReverse(decimal) {
    return decimal.toString().split("").reverse().join("");
}

console.log('Problem 2. Reverse number: 123.45');
console.log(myReverse(123.45));

//Problem 3. Occurrences of word
//Write a function that finds all the occurrences of word in a text.
//    The search can be case sensitive or case insensitive.
//    Use function overloading.
function findWordIndexes(text, word, isCaseSensitive) {
    var indexOfWord,
        result = [];

    if (isCaseSensitive === undefined) {
        isCaseSensitive = false;
    }

    if (!isCaseSensitive) {
        text = text.toLowerCase();
        word = word.toLowerCase();
    }

    indexOfWord = text.indexOf(word);
    while (indexOfWord >= 0) {
        result.push(indexOfWord);
        indexOfWord = text.indexOf(word, indexOfWord + 1)
    }

    return result;
}

console.log('Problem 3. Occurrences of word: "Penda" in "pijo and penda went to Penda\'s sister."');
console.log('Case sensitive: ' + findWordIndexes("pijo and penda went to Penda's sister.", 'Penda', true));
console.log('Case insensitive: ' + findWordIndexes("pijo and penda went to Penda's sister.", 'Penda'));

//Problem 4. Number of elements
//Write a function to count the number of div elements on the web page
function countDivElements() {
    return document.getElementsByTagName('div').length;
}

console.log('Problem 4. Number of div elements (should be 3)');
console.log(countDivElements());

//Problem 5. Appearance count
//Write a function that counts how many times given number appears in given array.
//    Write a test function to check if the function is working correctly.
function countNumberInArray(number, array) {
    var i,
        count = 0,
        len = array.length;

    for (i = 0; i < len; i += 1) {
        if (array[i] === number) {
            count += 1;
        }
    }

    return count;
}

function tester(func) {
    var number = 5,
        array1 = [1, 2, 3, 4, 5, 5, 5],
        expected1 = 3,
        array2 = [],
        expected2 = 0,
        array3 = ['5'],
        expected3 = 0;

    return expected1 === func(number, array1) &&
        expected2 === func(number, array2) &&
        expected3 === func(number, array3);
}

console.log('Problem 5. Appearance count');
console.log('Test function passed: ' + tester(countNumberInArray));

//Problem 6. Larger than neighbours
//Write a function that checks if the element at given position in given array of integers
// is bigger than its two neighbours (when such exist).
function isLargerThanNeighbours(array, index) {
    //if (array[index] === undefined ||
    //    array[index - 1] === undefined ||
    //    array[index + 1] === undefined) {
    //    return false;
    //}

    return array[index] > array[index - 1] &&
        array[index] > array[index + 1];
}

console.log('Problem 6. Larger than neighbours');
console.log('element at index 1 in [1, 3, 2]');
console.log(isLargerThanNeighbours([1, 3, 2], 1));
console.log('element at index 1 in [1, 3]');
console.log(isLargerThanNeighbours([1, 3], 1));


//Problem 7. First larger than neighbours
//Write a function that returns the index of the first element in array that is larger than its
//neighbours or -1, if there’s no such element.
//Use the function from the previous exercise.
function findFirstLarger(array) {
    var i,
        len = array.length;

    for (i = 1; i < len - 1; i += 1) {
        if (isLargerThanNeighbours(array, i)) {
            return i;
        }
    }

    return -1;
}

console.log('Problem 7. First larger than neighbours: [1, 2, 3, 2, 3, 4, 3]');
console.log('index: ' + findFirstLarger([1, 2, 3, 2, 3, 4, 3]));