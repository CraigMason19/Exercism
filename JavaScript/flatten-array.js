function flatten(arr) {
    let result = [];

    function recurse(arr) {
        arr.forEach(element => {
            if (Array.isArray(element)) {
                recurse(element);
            }
            else {
                result.push(element);
            }
        });
    }

    recurse(arr);
    return result.filter(e => e !== undefined && e !== null);
}
exports.flatten = flatten;

// Using in-built JS functionality
// const flatten = (input) => {
//     return input.flat(Infinity).filter(x => x !== null);
// };

const input = [1, [2, 3, null, 4], [null], 5];  
console.log(flatten(input));