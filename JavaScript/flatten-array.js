const flatten = (input) => {
    return input.flat(Infinity).filter(x => x !== null);
};

const input = [1, [2, 3, null, 4], [null], 5];  
console.log(flatten(input));