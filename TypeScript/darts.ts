function Hypotenuse(a: number, b: number): number { return Math.sqrt(a * a + b * b) };

export const score = (x: number, y: number): number => {
    const h = Hypotenuse(x, y);

    if (h <= 1) {
        return 10;
    }

    else if (h <= 5) {
        return 5;
    }

    else if (h <= 10) {
        return 1;
    }

    return 0;
};

const positions = [
    [0, 0],
    [-5, 0],
    [-9, -9],
    [-0.1, -0.1],
];

positions.forEach(p => {
    console.log(`${p} -> ${score(p[0], p[1])}`);
});