
// the first arg. is about the whole array and the second is about the values to remove from the array.
function removeFromArray(firstArray, ...values) { 

    values.forEach((value) => { // the forEach loop take the value out from the array to remove it
        let position = firstArray.indexOf(value); //read the position of the value to take out

        while (position >= 0) { // adding a while loop is to make sure there's not other value left out 
            firstArray.splice(position, 1);
            position = firstArray.indexOf(value);// read the position again and try to make sure the position is set to -1 to go out from the loop 
        }

    });

    return firstArray;
};

// Do not edit below this line
module.exports = removeFromArray;
