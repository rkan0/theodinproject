const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'
    } else {
        let output = ""
        for (i=0; i<num; i++) {
            output = output.concat(string)
        }
        return output
    }
};

// Do not edit below this line
module.exports = repeatString;
