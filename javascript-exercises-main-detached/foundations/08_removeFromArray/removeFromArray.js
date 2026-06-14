const removeFromArray = function(array, ...number) {
    let output = []
    // for each element of array, pass it as 'check' to function
    output = array.filter(function(check) {
        // if function shows that check is not in number, filter 'in' back to output
        return !number.includes(check) 
    }) 


    return output
};

// Do not edit below this line
module.exports = removeFromArray;
