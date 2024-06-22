const primeFactors = (n) => {
    let pf = [];
    let d = 2;
    while (n > 1) {
        while (n % d === 0) {
            pf.push(d);
            n = n / d;
        }
        d += 1;
    }
    return pf;
};
exports.primeFactors = primeFactors;

const numbers = [
    27,
    625,
    901255,
    93819012551,
];

numbers.forEach(number => {
    console.log(`${number} => [${primeFactors(number).join(", ")}]`);
});