

const sumAll = function (firstNum, secondNum) {

    // error if the argument isn't a number 
    if (typeof firstNum !== "number" || typeof secondNum !== "number") {
        return "ERROR";
    }

    // if first number is bigger that second, invert numbers 
    if (firstNum > secondNum) {
        let initialFirstNum = firstNum;
        firstNum = secondNum;
        secondNum = initialFirstNum;
    }

    // error if one of the arguments is negative
    if (firstNum < 0 || secondNum < 0) {
        return "ERROR";
    }

    // error if modulo isn't 0 (if number is float)
    const isIntFirstNum = firstNum % 1
    const isIntSecondNum = secondNum % 1
    if (isIntFirstNum !== 0 || isIntSecondNum !== 0) {
        return "ERROR";
    }

    // and if no error it gives the sum within the range
    let total = 0;
    for (let i = firstNum; i <= secondNum; i++) {
        total += i;
    }

    return total;

};

// function isNumber(val) { // function to make sure it's a number
//     return typeof val === "number";
// }



// Do not edit below this line
module.exports = sumAll;
