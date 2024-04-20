const Direction = Object.freeze({
    NE: 0,
    SE: 1,
    SW: 2,
    NW: 3,
});

class Grid {
    constructor(rows, columns, fillValue=undefined) {
        this.data = [];

        for(let i = 0; i < rows; i++) {
            let col = [];

            for(let j = 0; j < columns; j++) {
                // col.push(i.toString() + j.toString());
                col.push(fillValue);
            };

            this.data.push(col);
        };
    };

    size() {
        return { rowCount: this.data.length, columnCount: this.data[0].length };
    }

    row(n) {
        return this.data[n];
    }

    column(n) {
        let col = [];

        this.data.forEach(row => {
            col.push(row[n]);
        });

        return col;
    }

    cell(x, y) {
        return this.data[x][y];
    }

    fillCell(x, y, fillValue) {
        this.data[x][y] = fillValue;
    };

    diagonal(x, y, direction) {
        let offset; 

        switch(direction) {
            case Direction.NE:
                offset = { x:-1, y:1 }; 
                break;
            case Direction.SE:
                offset = { x:1, y:1 }; 
                break;
            case Direction.SW:
                offset = { x:1, y:-1 }; 
                break;
            case Direction.NW:
                offset = { x:-1, y:-1 }; 
                break;
            default:
                throw new Error("Diagonal direction not recognised.")
        }

        let value = this.data[x][y];
        let diagonal = [value];
        let counter = 1;

        while (value != undefined) {
            try {
                value = this.data[x + (offset.x * counter)][y + (offset.y * counter)];
                diagonal.push(value);
            }
            catch {
                value = undefined;
            }

            counter++;        
        }

        return diagonal;
    }

    toString() {
        let output = [];
        
        this.data.forEach(row => {
            output.push(row.join(" "))
        });

        return output.join("\n");
    }
}

module.exports = { Direction, Grid };