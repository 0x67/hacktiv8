var data = ['ant', 'bison', 'camel', 'duck', 'elephant'];
var dataLength = data.length    // for unknown reason sometimes i can't use array.length as end-condition for 'i'
var output = [];                // so i just store the length as global variable

function slice(data, start, end) {
    if (start > data.length) {
        let output = []
        return output
    }
    else if (start > 0 && !end) { // if start is defined but end is not
        for (var i = start; i < dataLength; i++) {
            output.push(data[i])
            continue
        }
        return output
    }
    else if (start > 0 && end < data.length) { // if start is defined and end is less than array.length
        let output = []; // reset output for each condition
        for (var i = start; i < end; i++) {
            output.push(data[i])
            continue
        }
        return output
    }
    else if (start > 0) { // if start is defined but end is more than array.length
        let output = []; // reset output for each condition
        for (var i = start; i < end; i++) {
            output.push(data[i])
            continue
        }
        return output
    }
    else if (!start && !end) { // if only the array is defined; start & end not defined
        return data
    }
    
}
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2)); // [ 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, 4)); // [ 'camel', 'duck' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 1, 5)); // [ 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'])); //[ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 20)); //[]