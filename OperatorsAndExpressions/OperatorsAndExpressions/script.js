function isOdd(element) {
    element.value = !(element.value % 2 === 0);
}

function divideBy35(element) {
    element.value = element.value % 35 === 0;
}

function calculateRectangleArea(width, height, area) {
    area.value = width.value * height.value;
}

function isThirdDigit7(element) {
    element.value = parseInt(element.value / 100) % 10 === 7;
}

function getThirdBit(element) {
    element.value = element.value >> 3 & 1;
}

function checkPointInCircle(x, y, isInCircle) {
    isInCircle.value = x.value * x.value + y.value * y.value <= 25;
}

function isPrime(element) {
    var number = element.value,
        i,
        square = Math.sqrt(number);

    if (isNaN(number)) {
        element.value = NaN;
        return;
    }

    if (number < 2) {
        element.value = false;
        return;
    }

    for (i = 2; i <= square; i++) {
        if (number % i === 0) {
            element.value = false;
            return;
        }
    }

    element.value = true;
}

function calculateTrapezoidArea(a, b, h, area) {
    area.value = (parseFloat(a.value) + parseFloat(b.value)) * h.value / 2;
}

function checkPointInCircleOutRectangle(x, y, isInCircleOutRectangle) {
    var circleXCoordinate = 1,
    circleYCoodrinate = 1,
    circleRadius = 3,
    rectangleTop = 1,
    rectangleLeft = -1,
    rectangleWidth = 6,
    rectangleHeight = 2,
    isInCircle = (Math.pow(x.value - circleXCoordinate, 2) + Math.pow(y.value - circleYCoodrinate, 2)) <= Math.pow(circleRadius, 2),
    isOutRectangle = (x.value < rectangleLeft) || (x.value > rectangleLeft + rectangleWidth) ||
                     (y.value > rectangleTop) || (y.value < rectangleTop - rectangleHeight);

    isInCircleOutRectangle.value = isInCircle && isOutRectangle;
}