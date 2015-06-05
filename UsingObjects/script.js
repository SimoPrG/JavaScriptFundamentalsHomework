//Problem 1. Planar coordinates
//
//Write functions for working with shapes in standard Planar coordinate system.
//    Points are represented by coordinates P(X, Y)
//Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
//Calculate the distance between two points.
//    Check if three segment lines can form a triangle.
function Point(x, y) {
    //validation
    x = parseFloat(x) || 0;
    y = parseFloat(y) || 0;
    this.x = x;
    this.y = y;
}

function arePointsEqual(point1, point2) {
    return point1.x === point2.x && point1.y === point2.y;
}

function SegmentLine(beginningPoint, endingPoint) {
    //validation
    if (beginningPoint == undefined || beginningPoint.constructor !== Point ||
        endingPoint == undefined || endingPoint.constructor !== Point) {
        throw new TypeError('You have to pass beginning and ending points of type Point.')
    }
    if (arePointsEqual(beginningPoint, endingPoint)) {
        throw new RangeError('The beginning and ending points have the same coordinates and they cannot form a line.')
    }
    this.beginningPoint = beginningPoint;
    this.endingPoint = endingPoint;
}

//Adding a function to the prototype
SegmentLine.prototype.getDistance = function () {
    return Math.sqrt(Math.pow(this.endingPoint.x - this.beginningPoint.x, 2) +
        Math.pow(this.endingPoint.y - this.beginningPoint.y, 2))
};

// adds an element to the array if it does not already exist
Array.prototype.pushIfNotExist = function (point) {
    for (var i = 0, len = this.length; i < len; i += 1) {
        if (arePointsEqual(this[i], point)) {
            return;
        }
    }
    this.push(point);
};

function isTriangle(segmentLine1, segmentLine2, segmentLine3) {
    var i,
        triangleVertices;

    if (segmentLine1 == undefined || segmentLine1.constructor !== SegmentLine ||
        segmentLine2 == undefined || segmentLine2.constructor !== SegmentLine ||
        segmentLine3 == undefined || segmentLine3.constructor !== SegmentLine) {
        return false;
    }

    //check if the lines are connected together at their end points
    triangleVertices = [];
    for (i in arguments) {
        triangleVertices.pushIfNotExist(arguments[i].beginningPoint);
        triangleVertices.pushIfNotExist(arguments[i].endingPoint);
    }

    if (triangleVertices.length !== 3) {
        return false;
    }

    return segmentLine1.getDistance() < segmentLine2.getDistance() + segmentLine3.getDistance() &&
        segmentLine2.getDistance() < segmentLine1.getDistance() + segmentLine3.getDistance() &&
        segmentLine3.getDistance() < segmentLine1.getDistance() + segmentLine2.getDistance();
}

console.log('Problem 1. Planar coordinates');
var line1 = new SegmentLine(new Point(1, 1), new Point(2, 2)),
    line2 = new SegmentLine(new Point(2, 2), new Point(0, 3)),
    line3 = new SegmentLine(new Point(1, 1), new Point(0, 3));
console.log(line1, line2, line3);
console.log('Can form triangle: ' + isTriangle(line1, line2, line3));


//Problem 2. Remove elements
//
//Write a function that removes all elements with a given value.
//    Attach it to the array type.
//    Read about prototype and how to attach methods.
//
//    var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];
//arr.remove(1); //arr = [2,4,3,4,111,3,2,'1'];
Array.prototype.remove = function (value) {
    return this.filter(function (element) {
        return value !== element;
    });
};

console.log('Problem 2. Remove elements');
var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
console.log(arr);
console.log(arr.remove(1));

//Problem 3. Deep copy
//
//Write a function that makes a deep copy of an object.
//    The function should work for both primitive and reference types.
function clone(obj) {
    if (obj === null || typeof(obj) !== 'object')
        return obj;

    var temp = obj.constructor(); // changed

    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            temp[key] = clone(obj[key]);
        }
    }
    return temp;
}

console.log('Problem 3. Deep copy');
var primitive = 5,
    primitiveCopy = clone(primitive),
    reference = {name: 'Ninja', skill: Infinity},
    referenceCopy = clone(reference);

console.log('primitive: ', primitive);
console.log('reference: ', reference);
console.log('primitiveCopy: ', primitiveCopy);
console.log('referenceCopy: ', referenceCopy);
primitiveCopy = 6;
referenceCopy.name = 'Samurai';
console.log('After change:');
console.log('primitive: ', primitive);
console.log('reference: ', reference);
console.log('primitiveCopy: ', primitiveCopy);
console.log('referenceCopy: ', referenceCopy);

//Problem 4. Has property
//
//Write a function that checks if a given object contains a given property.
//
//    var obj  = …;
//var hasProp = hasProperty(obj, 'length');
function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}

console.log('Problem 4. Has property');
var obj = {};
console.log('obj has "length": ' + hasProperty(obj, 'length'));
obj.length = 0;
console.log('obj has "length" now: ' + hasProperty(obj, 'length'));

//Problem 5. Youngest person
//
//Write a function that finds the youngest person in a given array of people and prints his/hers full name
//Each person has properties firstname, lastname and age.
var people = [
    {firstname: 'Gosho', lastname: 'Petrov', age: 32},
    {firstname: 'Bay', lastname: 'Ivan', age: 81}];

function findYoungestPerson(people) {
    var i,
        len,
        minAge,
        minAgeIndex;

    for (i = 0, len = people.length; i < len; i += 1) {
        if (!minAge) {
            minAge = people[i].age;
            minAgeIndex = i;
        }

        if (minAge > people[i].age) {
            minAge = people[i].age;
            minAgeIndex = i;
        }
    }

    return people[minAgeIndex].firstname + ' ' + people[minAgeIndex].lastname;
}

console.log('Problem 5. Youngest person');
console.log(findYoungestPerson(people));

//Problem 6.
//
//Write a function that groups an array of people by age, first or last name.
//    The function must return an associative array, with keys - the groups, and values - arrays with people in this groups
//Use function overloading (i.e. just one function)
function buildPerson(fname, lname, age) {
    return {
        fname: fname,
        lname: lname,
        age: age
    };
}

var gosho = buildPerson('gosho', 'georgiev', 25);
var ivan = buildPerson('ivan', 'ivanov', 23);
var misho = buildPerson('misho', 'mihailov', 26);
var misho2 = buildPerson('misho', 'georgiev', 26);


var people = [gosho, ivan, misho, misho2];

function groupPeopleBy (peopleArr, key) {
    if (peopleArr.length === 0) {
        return null;
    }

    // check to see if given key exists in the objects of the array
    if (!peopleArr[0].hasOwnProperty(key)) {
        return null;
    }

    var groupedPeople = {},
        i;

    for (i in peopleArr) {
        // check if current object`s key value exists as property name in the resulting associative array and if it doesn`t create it as empty array
        var groupProperty = peopleArr[i][key];

        if (!groupedPeople.hasOwnProperty(groupProperty)) {
            groupedPeople[groupProperty] = [];
        }
        // if current object`s key value exists as property name in the resulting associative array, add current object to this property in the associative array. This property is also an array, because we would have created it in the previous if statement
        groupedPeople[groupProperty].push(peopleArr[i]);
    }

    return groupedPeople;
}
console.log('Problem 6. Write a function that groups an array of people by age, first or last name.');
var groupedByAge = groupPeopleBy(people, 'age');
console.log(groupedByAge);
var groupByFname = groupPeopleBy(people, 'fname');
console.log(groupByFname);
var groupByLname = groupPeopleBy(people, 'lname');
console.log(groupByLname);