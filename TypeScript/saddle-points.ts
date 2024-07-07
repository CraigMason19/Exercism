import { Grid, Direction } from "./helper/grid";

interface Location {
    row: number;
    column: number;
}

export function saddlePoints(input: number[][]): Location[] {
    const grid = Grid.fromData(input);

    let trees: Location[] = [];
    
    grid.forEach((value, row, col) => {
        let largestInRow = value === Math.max(...grid.row(row));
        let smallestInColumn = value === Math.min(...grid.column(col));

        if(largestInRow && smallestInColumn) {
            trees.push({ row: row+1, column: col+1 });
        }
    });

    return trees;
}

const inputData: number[][] = [
    [4, 5, 4],
    [3, 5, 5],
    [1, 5, 4],
];

let result = saddlePoints(inputData);
console.log(result);