if (!Array.prototype.find) {
    Array.prototype.find = function (predicate) {
        if (this == null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}

if (!Array.prototype.fill) {
    Array.prototype.fill = function (value) {

        // Steps 1-2.
        if (this == null) {
            throw new TypeError('this is null or not defined');
        }

        var O = Object(this);

        // Steps 3-5.
        var len = O.length >>> 0;

        // Steps 6-7.
        var start = arguments[1];
        var relativeStart = start >> 0;

        // Step 8.
        var k = relativeStart < 0 ?
            Math.max(len + relativeStart, 0) :
            Math.min(relativeStart, len);

        // Steps 9-10.
        var end = arguments[2];
        var relativeEnd = end === undefined ?
            len : end >> 0;

        // Step 11.
        var final = relativeEnd < 0 ?
            Math.max(len + relativeEnd, 0) :
            Math.min(relativeEnd, len);

        // Step 12.
        while (k < final) {
            O[k] = value;
            k++;
        }

        // Step 13.
        return O;
    };
}
//Problem 1. Make person
//
//Write a function for creating persons.
//    Each person must have firstname, lastname, age and gender (true is female, false is male)
//Generate an array with ten person with different names, ages and genders

//function for creating persons
function makePersonWithLove(firstname, lastname, age, gender) {
    return {
        firstname: firstname,
        lastname: lastname,
        age: age,
        gender: gender
    };
}

var people = [];
people.length = 10;
people = people.fill(true).map(function (_, index) {
    var fname,
        lname,
        age = 13 + (10 * Math.random()) | 0,
        gender = !(index % 2),
        maleFNamePool = ['Ivan', 'Petar', 'Georgi', 'Nikolay', 'Ivo'],
        maleLNamePool = ['Ivanov', 'Petrov', 'Georgiev', 'Nikolaev', 'Ivov'],
        femaleFNamePool = ['Maria', 'Ana', 'Rada', 'Vanya', 'Petya'];

    if (gender) { //female
        fname = femaleFNamePool[(5 * Math.random()) | 0];
        lname = maleLNamePool[(5 * Math.random()) | 0] + 'a';
    } else { //male
        fname = maleFNamePool[(5 * Math.random()) | 0];
        lname = maleLNamePool[(5 * Math.random()) | 0];
    }

    return makePersonWithLove(fname, lname, age, gender);
});

console.log('Problem 1. Make person');
console.log(people);

//Problem 2. People of age
//
//Write a function that checks if an array of person contains only people of age (with age 18 or greater)
//Use only array methods and no regular loops (for, while)
console.log('Problem 2. All people of age 18 or greater');
console.log(people.every(function (person) {
    return person.age >= 18;
}));

//    Problem 3. Underage people
//
//Write a function that prints all underaged persons of an array of person
//Use Array#filter and Array#forEach
//Use only array methods and no regular loops (for, while)
console.log('Problem 3. Underage people');
people.filter(function (person) {
    return person.age < 18;
}).forEach(function (person) {
    console.log(person);
});

//    Problem 4. Average age of females
//
//Write a function that calculates the average age of all females, extracted from an array of persons
//Use Array#filter
//Use only array methods and no regular loops (for, while)
console.log('Problem 4. Average age of females');
console.log(people.filter(function (person) {
    return person.gender;
}).reduce(function (averageAge, person, _, array) {
    return averageAge + person.age / array.length;
}, 0));

//    Problem 5. Youngest person
//
//Write a function that finds the youngest male person in a given array of people and prints his full name
//Use only array methods and no regular loops (for, while)
//    Use Array#find
function getYoungestMaleFullName(people) {
    var youngestMale = people.sort(function (person1, person2) {
        return person1.age - person2.age;
    }).find(function (person) {
        return !person.gender;
    });

    return youngestMale.firstname + ' ' + youngestMale.lastname;
}

console.log('Problem 5. Youngest person');
console.log(getYoungestMaleFullName(people));

//Problem 6. Group people
//
//Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
//Use Array#reduce
//Use only array methods and no regular loops (for, while)
//    Example:
//
//        result = {
//            'a': [{
//                firstname: 'Asen',
//                /* ... */
//            }, {
//                firstname: 'Anakonda',
//                /* ... */
//            }],
//            'j': [{
//                firstname: 'John',
//                /* ... */
//            }]
//        };
function groupByFirstLetter(people) {
    return people.reduce(function (groups, person) {
        var letter = person.firstname[0].toLowerCase();
        if (groups[letter]) {
            groups[letter].push(person);
        } else {
            groups[letter] = [person];
        }

        return groups;
    }, {});
}

console.log('Problem 6. Group people');
console.log(groupByFirstLetter(people));