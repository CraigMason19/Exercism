const isArmstrongNumber = (n) => {
    let numbers = String(n).split("").map(num => Number(num));
    
    let powers = numbers.map(num => Math.pow(num, numbers.length));
    let sum = powers.reduce((a, b) => a + b, 0);
    
    return n === sum
};

numbers = [
    9,
    10,
    153,
    154,
];

numbers.forEach(number => {
    console.log(`isArmstrongNumber(${number}) -> ${isArmstrongNumber(number)}`);
});