const imports = require('./helper/grid');

function saddlePoints(input) {
    const grid = imports.Grid.fromData(input);

    let trees = [];

    grid.forEach((value, row, col) => {
        let largestInRow = value === Math.max(...grid.row(row));
        let smallestInColumn = value === Math.min(...grid.column(col));

        if (largestInRow && smallestInColumn) {
            trees.push({ row: row + 1, column: col + 1 });
        }
    });

    return trees;
}
exports.saddlePoints = saddlePoints;

const inputData = [
    [4, 5, 4],
    [3, 5, 5],
    [1, 5, 4],
];

let result = saddlePoints(inputData);
console.log(result);