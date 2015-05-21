function validateRange(n) {
    if (n < 1) {
        throw new RangeError('n must be 1 or greater.')
    }
}
function validateNumber(n) {
    if (isNaN(n)) {
        throw new TypeError('n must be a Number.');
    }
}

//Problem 1. Numbers
//Write a script that prints all the numbers from 1 to N.
function printNumbers(n) {
    var i,
        result = [];

    validateNumber(n);
    validateRange(n);

    for (i = 1; i <= n; i += 1) {
        result.push(i);
    }

    console.log(result.join(', '));
}

console.log('Problem 1. Numbers');
printNumbers(100);

//Problem 2. Numbers not divisible
//Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time
function printNumbersNotDivisibleBy3And7(n) {
    var i,
        result = [];

    validateNumber(n);
    validateRange(n);

    for (i = 1; i <= n; i += 1) {
        if (i % 21 !== 0) {
            result.push(i);
        }
    }

    console.log(result.join(', '));
}

console.log('Problem 2. Numbers not divisible');
printNumbersNotDivisibleBy3And7(100);

//Problem 3. Min/Max of sequence
//Write a script that finds the max and min number from a sequence of numbers.
function findMinAndMax() {
    var i,
        argumentsLength = arguments.length,
        min = Number.MAX_VALUE,
        max = Number.MIN_VALUE;

    if (argumentsLength === 0) {
        return;
    }

    for (i = 0; i < argumentsLength; i += 1) {
        validateNumber(arguments[i]);

        if (min > arguments[i]) {
            min = arguments[i];
        }

        if (max < arguments[i]) {
            max = arguments[i];
        }
    }

    console.log('min: ' + min + '; max: ' + max);
}

console.log('Problem 3. Min/Max of sequence');
console.log('sequence: 12.23, 0, 1021, -23423, 4.23e+123');
findMinAndMax(12.23, 0, 1021, -23423, 4.23e+123);

//Problem 4. Lexicographically smallest
//Write a script that finds the lexicographically smallest and largest property in document, window and navigator objects.
function findLexicographicallySmallestAndLargest(obj) {
    var properties = Object.getOwnPropertyNames(obj).sort();
    console.log('smallest: ' + properties[0] + '; biggest: ' + properties[properties.length - 1]);
}

console.log('Problem 4. Lexicographically smallest');
console.log('document');
findLexicographicallySmallestAndLargest(document);
console.log('window');
findLexicographicallySmallestAndLargest(window);
console.log('navigator');
findLexicographicallySmallestAndLargest(navigator);