//Problem 1. Increase array members
//Write a script that allocates array of 20 integers and initializes each element by its index multiplied by 5.
//Print the obtained array on the console.
var myFirstArray = [];
for (var i = 0; i < 20; i++) {
    myFirstArray[i] = i * 5;
}
console.log('Problem 1. Increase array members');
console.log(myFirstArray.join(', '));

//Problem 2. Lexicographically comparison
//Write a script that compares two char arrays lexicographically (letter by letter).
function compareTwoCharArrays(a, b) {
    var len = a.length < b.length ? a.length : b.length;
    for (var i = 0; i < len; i += 1) {
        if (a[i] === b[i]) continue;
        if (a[i] < b[i]) return -1;
        return 1;
    }
    if (a.length === b.length) return 0;
    if (a.length < b.length) return -1;
    return 1;
}

console.log('Problem 2. Lexicographically comparison: "foo" and "bar"');
console.log(compareTwoCharArrays('foo', 'bar'));

//Problem 3. Maximal sequence
//Write a script that finds the maximal sequence of equal elements in an array.
function findMaxSequence(array) {
    var i,
        arrayLength,
        currentElement,
        maxElement,
        currentSequence = 0,
        maxSequence = 0,
        result = [];

    if (array == undefined || array.constructor !== Array) {
        throw new TypeError('You need to pass one argument of type array');
    }

    arrayLength = array.length;
    if (arrayLength > 0) {
        for (i = 0; i < arrayLength; i += 1) {
            if (array[i] === undefined) {
                currentElement = undefined;
                currentSequence = 0;
                continue;
            }

            if (array[i] === currentElement) {
                currentSequence += 1;
            }
            else {
                currentElement = array[i];
                currentSequence = 1;
            }

            if (currentSequence > maxSequence) {
                maxElement = currentElement;
                maxSequence = currentSequence;
            }
        }

        for (i = 0; i < maxSequence; i += 1) {
            result[i] = maxElement;
        }
    }

    return result;
}

console.log('Problem 3. Maximal sequence: [,,1,,,,,2,,2,,2,3,3,,,]');
console.log(findMaxSequence([, , 1, , , , , 2, , 2, , 2, 3, 3, , ,]));

//Problem 4. Maximal increasing sequence
//Write a script that finds the maximal increasing sequence in an array.
function findMaxIncreasingSequence(array) {
    var i,
        arrayLength,
        start = 0,
        bestStart = 0,
        length = 1,
        bestLength = 1,
        result = [];

    if (array == undefined || array.constructor !== Array) {
        throw new TypeError('You need to pass one argument of type array');
    }

    arrayLength = array.length;
    if (arrayLength > 0) {
        for (i = 0; i < arrayLength - 1; i += 1) {
            if (array[i] < array[i + 1]) {
                length += 1;
            }
            else {
                length = 1;
                start = i + 1;
            }

            if (length > bestLength) {
                bestLength = length;
                bestStart = start;
            }
        }

        for (i = 0; i < bestLength; i += 1) {
            result[i] = array[bestStart + i];
        }
    }

    return result;
}

console.log('Problem 4. Maximal increasing sequence: [3, 2, 3, 4, 2, 2, 4]');
console.log(findMaxIncreasingSequence([3, 2, 3, 4, 2, 2, 4]));

//Problem 5. Selection sort
function sort(array) {
    var i,
        j,
        arrayLength,
        iMin,
        temp;

    if (array == undefined || array.constructor !== Array) {
        throw new TypeError('You need to pass one argument of type array');
    }

    for (i = 0, arrayLength = array.length; i < arrayLength - 1; i += 1) {
        iMin = i;
        for (j = i + 1; j < arrayLength; j += 1) {
            if (array[iMin] > array[j]) {
                iMin = j;
            }
        }
        if (iMin !== i) {
            temp = array[i];
            array[i] = array[iMin];
            array[iMin] = temp;
        }
    }
}

console.log('Problem 5. Selection sort: [4,3,2,34,235,-23,0,23]');
var arr = [4, 3, 2, 34, 235, -23, 0, 23];
sort(arr);
console.log(arr);

//Problem 6. Most frequent number
//Write a script that finds the most frequent number in an array.
function findMostFrequentNumber(array) {
    var i,
        number,
        len,
        mostFrequent,
        maxFrequency = 0,
        frequentNumbers = {};

    if (array == undefined || array.constructor !== Array) {
        throw new TypeError('You need to pass one argument of type array');
    }

    for (i = 0, len = array.length; i < len; i += 1) {
        if (array[i] === undefined) {
            continue;
        }

        if (frequentNumbers[array[i]] === undefined) {
            frequentNumbers[array[i]] = 1;
        }
        else {
            frequentNumbers[array[i]] += 1;
        }
    }

    for (number in frequentNumbers) {
        if (frequentNumbers.hasOwnProperty(number) && frequentNumbers[number] > maxFrequency) {
            mostFrequent = number;
            maxFrequency = frequentNumbers[number];
        }
    }

    return mostFrequent + ' (' + maxFrequency + ' times)';
}

console.log('Problem 6. Most frequent number: [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]');
console.log(findMostFrequentNumber([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]));

//Problem 7. Binary search
//Write a script that finds the index of given element in a sorted array of integers by using the binary search algorithm.
function binaryIndexOf(array, searchElement) {
    var minIndex = 0,
        maxIndex = array.length - 1,
        currentIndex,
        currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = array[currentIndex];

        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }

    return -1;
}

console.log('Problem 7. Binary search: Index of 1 in [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11]');
console.log(binaryIndexOf([1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11], 1));