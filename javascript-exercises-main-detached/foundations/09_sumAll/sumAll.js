const sumAll = function(one, two) {
    if (!Number.isInteger(one) || !Number.isInteger(two) || one < 0 || two < 0) {
        return "ERROR"
    } else {
    input = [one, two]
    input.sort((x, y) => x-y)// order in ascending order
    let array = []
    for (let i = input[0]; i <= input[1]; i++) {// create array: starting from one, until two, i++, 
        array.push(i)// concat i+1

    } 
    sum = array.reduce(sumfunc)
    console.log(array)
    return sum
    }
};

function sumfunc(total, num) {
    return total + num
}


// Do not edit below this line
module.exports = sumAll;
