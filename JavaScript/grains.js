const square = (squareNum) => {
    if (squareNum < 1 || squareNum > 64) {
        throw new Error("Invalid square");
    }
    if (squareNum === 1) {
        return 1n;
    }
    return 2n ** BigInt(squareNum - 1);
};

const total = () => {
    return 2n ** 64n - 1n;
};

for (let i = 1; i < 65; i++) {
    console.log(`${i} -> ${(0, square)(i)}`);
}

console.log((0, total)());