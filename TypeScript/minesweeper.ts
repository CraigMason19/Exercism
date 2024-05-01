class Board {
    private rows: string[];
    private height: number;
    private width: number;

    constructor(rows: string[]) {
        this.rows = rows;
        this.width = rows.length;
        this.height = rows[0].length;
    }

    getNeighbours(x: number, y: number): string[] {
        if(x < 0 || x >= this.width) {
            throw new RangeError("Invalid x index: " + x);
        }
        else if(y < 0 || y >= this.height) {
            throw new RangeError("Invalid y index: " + y);
        }

        let n: string[] = [];
        let d = [[0, 1], [1, 0], [0, -1], [-1, 0], // cardinal
                 [-1, -1], [1, -1], [1, 1], [-1, 1]]; // ordinal

        d.forEach(direction => {
        
            let i = x + direction[0];
            let j = y + direction[1];

            try {
                let cellData = this.rows[i][j];

                if(cellData != undefined) {
                    n.push(cellData);
                }
            }
            catch(e) {
                // ignore index error
            }
        });

        return n;
    }

    calculateMineValue(x: number, y: number): number {
        let n = this.getNeighbours(x, y);
        return n.filter(x => x === '*').length;
    }

    get numberGrid(): string[] {
        let rowsWithValue = [];

        for(let i = 0; i < this.width; i++) {
            let rowWithValue = '';

            for(let j = 0; j < this.height; j++) {
                // If the space is a mine just return an asterisk
                if(this.rows[i][j] === '*') {
                    rowWithValue += '*';
                }
                // Otherwise add a mine value or an empty space
                else {
                    const numMines = this.calculateMineValue(i, j);
                    rowWithValue += numMines === 0 ? " " : numMines.toString();
                }
            }
            rowsWithValue.push(rowWithValue);
        }

        return rowsWithValue;
    }
}

export const annotate = (input: string[]): string[] => {
    if(input.length === 0) { return []; }

    const b = new Board(input);
    return b.numberGrid
};

const b = new Board(['   ', ' * ', '   ']);
console.log(b);
console.log(b.numberGrid);