const sumAll = function (firstNum, secondNum) {

    let checkTypeOfFirst = typeof firstNum; 
    let checkTypeOfSecond = typeof secondNum; 

    if (checkTypeOfFirst !== "number" && checkTypeOfSecond !== "number"){
        return "ERROR";
    } else {
        let arrayBetween = [];
        let total = 0;
        for (let i = firstNum; i <= secondNum; i++) {
            arrayBetween.push(i);
            total = total + i;

        }
        return total;
    }



 };

// Do not edit below this line
module.exports = sumAll;
