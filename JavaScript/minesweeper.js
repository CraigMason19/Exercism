class Board {
    constructor(rows) {
        this.width = rows.length;
        this.height = rows[0].length;

        this.rows = rows;
    }

    getNeighbours(x, y) {
        if(x < 0 || x >= this.width) {
            throw new RangeError("Invalid x index: " + x);
        }
        else if(y < 0 || y >= this.height) {
            throw new RangeError("Invalid y index: " + y);
        }

        let n = [];
        let d = [[0, 1], [1, 0], [0, -1], [-1, 0], // cardinal
                 [-1, -1], [1, -1], [1, 1], [-1, 1]]; // ordinal

        d.forEach(direction => {
        
            let i = x + direction[0];
            let j = y + direction[1];

            try {
                let cell = this.rows[i][j];

                if(cell != undefined) {
                    n.push(cell);
                }
            }
            catch(e) {
                // ignore
            }
        });

        return n;
    }

    calculateMineValue(x, y) {
        let n = this.getNeighbours(x, y);
        return n.filter(x => x === '*').length;
    }

    get numberGrid() {
        let numRows = [];

        for(let i = 0; i < this.width; i++) {
            let numRow = '';

            for(let j = 0; j < this.height; j++) {
                // If the space is a mine just return an asterisk
                if(this.rows[i][j] === '*') {
                    numRow += '*';
                }
                // Otherwise add a mine value or an empty space
                else {
                    const numMines = this.calculateMineValue(i, j);
                    numRow += numMines === 0 ? " " : numMines.toString();
                }
            }
            numRows.push(numRow);
        }

        return numRows;
    }
}

const annotate = (input) => {
    if(input.length === 0) { return []; }

    const b = new Board(input);
    return b.numberGrid
};



console.log(annotate([]));

const b = new Board(['   ', ' * ', '   ']);
console.log(b);
console.log(b.numberGrid);