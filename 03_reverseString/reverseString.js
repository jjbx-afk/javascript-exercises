function reverseString(strRev) {
    let splitString = strRev.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
};

module.exports = reverseString;      