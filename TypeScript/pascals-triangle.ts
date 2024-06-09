const INITIAL_ROWS: number[][] = [
    [1],       // row 1
    [1, 1],    // row 2
    [1, 2, 1], // row 3
];

export class Triangle 
{
    data: number[][];

    constructor(n: number) {
        if (n <= 3) {
            this.data = INITIAL_ROWS.slice(0, n);
        } 
        else {
            this.data = INITIAL_ROWS.slice(); // Shallow copy

            for (let i = 3; i < n; i++) {
                this.data.push(this.nextRow);
            }
        }
    }

    get rows(): number[][] {
        return this.data;
    }

    get lastRow(): number[] {
        return this.data[this.data.length - 1];
    }

    get nextRow(): number[] {
        let numbers = [];
        let last = this.lastRow;

        for (let i = 0; i < last.length - 1; i++) {
            numbers.push(last[i] + last[i + 1]);
        }

        return [1].concat(numbers).concat([1]);
    }
}

const tri = new Triangle(5);

console.log(tri.rows);
console.log(tri.lastRow);
console.log(tri.nextRow);