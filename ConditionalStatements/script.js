//Problem 1. Exchange if greater
var exchangeIfGreater = function (a, b) {
    if (a <= b) {
        return a + ' ' + b;
    }

    return b + ' ' + a;
};

document.getElementById('p1-button').addEventListener('click', function () {
    var a = document.getElementById('a1').value,
        b = document.getElementById('b1').value;
    document.getElementById('p1-output').innerHTML = exchangeIfGreater(a, b);
});

//Problem 2. Multiplication Sign
var getSignOfThree = function (a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return 'NaN';
    }

    if ((a === 0) || (b === 0) || (c === 0)) {
        return '0';
    }

    if ((a > 0 && b > 0 && c > 0) || (a > 0 && b < 0 && c < 0) || (a < 0 && b > 0 && c < 0) || (a < 0 && b < 0 && c > 0)) {
        return '+';
    }
    else {
        return '-';
    }
};

document.getElementById('p2-button').addEventListener('click', function () {
    var a = parseFloat(document.getElementById('a2').value),
        b = parseFloat(document.getElementById('b2').value),
        c = parseFloat(document.getElementById('c2').value);
    document.getElementById('p2-output').innerHTML = getSignOfThree(a, b, c);
});

//Problem 3. The biggest of Three
var findBiggestOfThree = function (a, b, c) {
    var biggest = a;
    if (b > biggest) {
        biggest = b;
    }
    if (c > biggest) {
        biggest = c;
    }
    return biggest;
};

document.getElementById('p3-button').addEventListener('click', function () {
    var a = parseFloat(document.getElementById('a3').value),
        b = parseFloat(document.getElementById('b3').value),
        c = parseFloat(document.getElementById('c3').value);
    document.getElementById('p3-output').innerHTML = findBiggestOfThree(a, b, c);
});

//Problem 4. Sort 3 numbers
var sortThreeNumbers = function (a, b, c) {
    if (a < b) {
        if (b < c) {
            return c + ' ' + b + ' ' + a;
        }
        else {
            if (a < c) {
                return b + ' ' + c + ' ' + a;
            }
            else {
                return b + ' ' + a + ' ' + c;
            }
        }
    }
    else {
        if (b > c) {
            return a + ' ' + b + ' ' + c;
        }
        else {
            if (a > c) {
                return a + ' ' + c + ' ' + b;
            }
            else {
                return c + ' ' + a + ' ' + b;
            }
        }
    }
};

document.getElementById('p4-button').addEventListener('click', function () {
    var a = parseFloat(document.getElementById('a4').value),
        b = parseFloat(document.getElementById('b4').value),
        c = parseFloat(document.getElementById('c4').value);
    document.getElementById('p4-output').innerHTML = sortThreeNumbers(a, b, c);
});

//Problem 5. Digit as word
var parseDigit = function (digit) {
    switch (digit) {
        case '0':
            return 'zero';
        case '1':
            return 'one';
        case '2':
            return 'two';
        case '3':
            return 'three';
        case '4':
            return 'four';
        case '5':
            return 'five';
        case '6':
            return 'six';
        case '7':
            return 'seven';
        case '8':
            return 'eight';
        case '9':
            return 'nine';
        default:
            return 'not a digit';
    }
};

document.getElementById('p5-button').addEventListener('click', function () {
    var digit = document.getElementById('digit').value;
    document.getElementById('p5-output').innerHTML = parseDigit(digit);
});

//Problem 6. Quadratic equation
var solveQuadraticEquation = function (a, b, c) {
    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                return 'x = any';
            }
            else // c !== 0
            {
                return 'no real roots';
            }
        }
        else // b !== 0
        {
            return 'x = ' + (-c / b);
        }
    }
    else // a !== 0
    {
        var d = b * b - 4 * a * c;
        if (d < 0) {
            return 'no real roots'
        }
        else if (d === 0) {
            return 'x1 = x2 = ' + (-b / 2 / a);
        }
        else {
            return 'x1 = ' + ((-b - Math.sqrt(d)) / 2 / a) + '; x2 = ' + ((-b + Math.sqrt(d)) / 2 / a);
        }
    }
};

document.getElementById('p6-button').addEventListener('click', function () {
    var a = parseFloat(document.getElementById('a6').value),
        b = parseFloat(document.getElementById('b6').value),
        c = parseFloat(document.getElementById('c6').value);
    document.getElementById('p6-output').innerHTML = solveQuadraticEquation(a, b, c);
});

//Problem 7. The biggest of five numbers
var findBiggestOfFive = function (a, b, c, d, e) {
    return findBiggestOfThree(findBiggestOfThree(a, b, c), d, e);
};

document.getElementById('p7-button').addEventListener('click', function () {
    var a = parseFloat(document.getElementById('a7').value),
        b = parseFloat(document.getElementById('b7').value),
        c = parseFloat(document.getElementById('c7').value),
        d = parseFloat(document.getElementById('d7').value),
        e = parseFloat(document.getElementById('e7').value);
    document.getElementById('p7-output').innerHTML = findBiggestOfFive(a, b, c, d, e);
});

//Problem 8. Number as words
var parseNumber = function (number) {
    if (isNaN(number)) {
        return 'NaN';
    }
    if (number < 0 || number > 999) {
        return 'Enter a number in the range 0..999!'
    }

    var numberAsWords = '',
        hundreds = parseInt((number / 100) % 10),
        tenths = parseInt((number / 10) % 10),
        units = parseInt(number % 10);

    switch (hundreds) {
        case 1:
            numberAsWords += 'one hundred';
            break;
        case 2:
            numberAsWords += 'two hundred';
            break;
        case 3:
            numberAsWords += 'three hundred';
            break;
        case 4:
            numberAsWords += 'four hundred';
            break;
        case 5:
            numberAsWords += 'five hundred';
            break;
        case 6:
            numberAsWords += 'six hundred';
            break;
        case 7:
            numberAsWords += 'seven hundred';
            break;
        case 8:
            numberAsWords += 'eight hundred';
            break;
        case 9:
            numberAsWords += 'nine hundred';
            break;
        default:
            break;
    }
    if (hundreds !== 0 && (tenths !== 0 || units !== 0)) {
        numberAsWords += ' and ';
    }
    switch (tenths) {
        case 1:
            switch (units) {
                case 0:
                    numberAsWords += 'ten';
                    break;
                case 1:
                    numberAsWords += 'eleven';
                    break;
                case 2:
                    numberAsWords += 'twelve';
                    break;
                case 3:
                    numberAsWords += 'thirteen';
                    break;
                case 4:
                    numberAsWords += 'fourteen';
                    break;
                case 5:
                    numberAsWords += 'fifteen';
                    break;
                case 6:
                    numberAsWords += 'sixteen';
                    break;
                case 7:
                    numberAsWords += 'seventeen';
                    break;
                case 8:
                    numberAsWords += 'eighteen';
                    break;
                case 9:
                    numberAsWords += 'nineteen';
                    break;
                default:
                    break;
            }
            break;
        case 2:
            numberAsWords += 'twenty';
            break;
        case 3:
            numberAsWords += 'thirty';
            break;
        case 4:
            numberAsWords += 'forty';
            break;
        case 5:
            numberAsWords += 'fifty';
            break;
        case 6:
            numberAsWords += 'sixty';
            break;
        case 7:
            numberAsWords += 'seventy';
            break;
        case 8:
            numberAsWords += 'eighty';
            break;
        case 9:
            numberAsWords += 'ninety';
            break;
        default:
            break;
    }
    if (tenths !== 0 && tenths !== 1 && units !== 0) numberAsWords += ' ';
    if (tenths !== 1) {
        switch (units) {
            case 0:
                if ((hundreds === 0) && (tenths === 0)) numberAsWords = 'zero';
                break;
            case 1:
                numberAsWords += 'one';
                break;
            case 2:
                numberAsWords += 'two';
                break;
            case 3:
                numberAsWords += 'three';
                break;
            case 4:
                numberAsWords += 'four';
                break;
            case 5:
                numberAsWords += 'five';
                break;
            case 6:
                numberAsWords += 'six';
                break;
            case 7:
                numberAsWords += 'seven';
                break;
            case 8:
                numberAsWords += 'eight';
                break;
            case 9:
                numberAsWords += 'nine';
                break;
            default:
                break;
        }
    }
    return numberAsWords.charAt(0).toUpperCase() + numberAsWords.slice(1);
};

document.getElementById('p8-button').addEventListener('click', function () {
    var number = document.getElementById('number').value;
    document.getElementById('p8-output').innerHTML = parseNumber(number);
});