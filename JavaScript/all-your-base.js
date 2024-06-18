function fromBase(digits, baseFrom) {
    let n = 0;

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] >= baseFrom || digits[i] < 0) {
            throw new Error('Input has wrong format');
        }

        let power = digits.length - 1 - i;
        n += digits[i] * Math.pow(baseFrom, power);
    }

    return n;
}

function toBase(num, baseTo) {
    if (num === 0) {
        return [0];
    }

    let result = [];

    while (num > 0) {
        result.push(num % baseTo);
        num = Math.floor(num / baseTo);
    }

    return result.reverse();
}

function convert(digits, inputBase, outputBase) {
    if (inputBase <= 1 || !Number.isInteger(inputBase)) {
        throw new Error('Wrong input base');
    }

    if (outputBase <= 1 || !Number.isInteger(outputBase)) {
        throw new Error('Wrong output base');
    }

    if (digits[0] === 0 && digits.length >= 2 || digits.length === 0) {
        throw new Error('Input has wrong format');
    }

    const n = fromBase(digits, inputBase);
    return toBase(n, outputBase);
}

exports.convert = convert;

console.log(convert([0], 10, 2)); // 0
console.log(convert([2, 10], 16, 3)); // 42
console.log(convert([3, 46, 60], 97, 73)); // 32749