const reverseString = function(string) {
    let array = string.split("")
    console.log("array="+array)
    let output = ""
    for (i=(array.length-1); i>=0; i--) {
        let char = array[i]
        console.log(char)
        output = output.concat(array[i])
    }
    return output
};


// Do not edit below this line
module.exports = reverseString;
