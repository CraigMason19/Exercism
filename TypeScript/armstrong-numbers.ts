type Value = number|BigInt;

export const isArmstrongNumber = (n: Value): boolean => {
    let b = typeof n === 'number' ? BigInt(n) : n;

    const numbers = n.toString().split('');
    const power = BigInt(numbers.length);
    const result = numbers.reduce((acc, digit) => acc + BigInt(digit) ** power, 0n);

    return b === result
};

let numbers: Value[] = [
    9,
    10,
    153,
    154,
    BigInt('115132219018763992565095597973971522401'),
];

numbers.forEach(number => {
    console.log(`isArmstrongNumber(${number}) -> ${isArmstrongNumber(number)}`);
});