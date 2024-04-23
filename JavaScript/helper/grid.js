// Used in:
//  Queen Attack
//  Word Search


const Direction = Object.freeze({
    N: 0,
    E: 1,
    S: 2,
    W: 3,
    NE: 4,
    SE: 5,
    SW: 6,
    NW: 7,
});

/**
 * Represents a 2D grid.
 */
class Grid {
    /**
     * Creates a new Grid instance.
     * @param {number} rows - The number of rows in the grid.
     * @param {number} columns - The number of columns in the grid.
     * @param {any} [fillValue=0] - The value to fill the grid cells with.
     */
    constructor(rows, columns, fillValue=0) {
        this.data = [];

        for(let i = 0; i < rows; i++) {
            let col = [];

            for(let j = 0; j < columns; j++) {
                col.push(fillValue);
            };

            this.data.push(col);
        };
    };

    /**
     * Creates a Grid instance from existing data.
     * @param {Array<Array<any>>} data - The 2D array representing the grid data.
     * @returns {Grid} - A new Grid instance.
     */
    static fromData(data) {
        let grid = new Grid(data.length, data[0].length);

        for(let i = 0; i < grid.size.rowCount; i++) {
            for(let j = 0; j < grid.size.columnCount; j++) {
                grid.data[i][j] = data[i][j]; 
            };
        };
    
        return grid;
    }

    /**
     * Gets the size of the grid.
     * @returns {{ rows: number, columns: number }} - The size of the grid.
     */
    get size() {
        return { rowCount: this.data.length, columnCount: this.data[0].length };
    }

    /**
     * Gets the value at the specified cell.
     * @param {number} x - The row index of the cell.
     * @param {number} y - The column index of the cell.
     * @returns {any} - The value at the specified cell.
     */
    cell(x, y) {
        return this.data[x][y];
    }

    /**
     * Sets the value at the specified cell.
     * @param {number} x - The row index of the cell.
     * @param {number} y - The column index of the cell.
     * @param {any} fillValue - The value to set at the specified cell.
     */
    fillCell(x, y, fillValue) {
        this.data[x][y] = fillValue;
    };

    /**
     * Gets data from with an offset relative to a position.
     * @param {number} x - The row index of the cell.
     * @param {number} y - The column index of the cell.
     * @param {{ x: number, y: number }} offset - An object representing the x y offset.
     * @returns {any} - The value in a nearby cell.
     */
    getOffsetData(x, y, offset) {
        let value = undefined;

        try {
            value = this.data[x + offset.x][y + offset.y];
        }
        catch {
            value = undefined;
        }

        return value;
    }

    /**
     * Gets all data from an offset direction relative to a position.
     * @param {number} x - The row index of the cell.
     * @param {number} y - The column index of the cell.
     * @param {{ x: number, y: number }} offset - An object representing the x y offset.
     * @returns {Array} - The values in a direction.
     */
    getOffsetDataLoop(x, y, offset) {
        let values = [];
        let value = this.data[x][y];
        let counter = 1;

        while (value != undefined) {
            values.push(value);

            value = this.getOffsetData(x, y, { x: offset.x * counter, y: offset.y * counter });
            counter++;              
        }

        return values;
    }

    /**
     * Gets all data from a row in the grid.
     * @param {number} n - The row index of the grid.
     * @returns {number} - The values from a row in the grid.
     */
    row(n) {
        return this.data[n];
    }

    /**
     * Gets all data from a column in the grid.
     * @param {number} n - The column index of the grid.
     * @returns {number} - The values from a column in the grid.
     */
    column(n) {
        return this.data.map(row => row[n]);
    }

    /**
     * Gets all data from a cardinal direction (N, E, S, W) including the specified cell.
     * @param {number} x - The row index of the cell.
     * @param {number} y - The column index of the cell.
     * @param {Direction} direction - The cardinal direction.
     * @returns {Array} - The values from a cardinal direction.
     */
    cardinal(x, y, direction) {
        let offset; 

        switch(direction) {
            case Direction.N:
                offset = { x:-1, y:0 }; 
                break;
            case Direction.S:
                offset = { x:1, y:0 }; 
                break;
            case Direction.E:
                offset = { x:0, y:1 }; 
                break;
            case Direction.W:
                offset = { x:0, y:-1 }; 
                break;
            default:
                throw new Error("Cardinal direction not recognised.")
        }

        return this.getOffsetDataLoop(x, y, offset);
    }

    /**
     * Gets all data from a ordinal direction (NE, SE, SW, NW) including the specified cell.
     * @param {number} x - The row index of the cell.
     * @param {number} y - The column index of the cell.
     * @param {Direction} direction - The ordinal direction.
     * @returns {Array} - The values from a ordinal direction.
     */
    ordinal(x, y, direction) {
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
                throw new Error("Ordinal direction not recognised.")
        }

        return this.getOffsetDataLoop(x, y, offset);
    }

    /**
     * Gets all data from all cardinal directions (N, E, S, W) including the specified cell.
     * @param {number} x - The row index of the cell.
     * @param {number} y - The column index of the cell.
     * @returns {Array} - The values from all cardinal directions.
     */
    cardinals(x, y) {
        let cells = []

        cells.push(...this.row(x));
        cells.push(...this.column(y));

        return cells;
    }

    /**
     * Gets all data from all ordinal directions (NE, SE, SW, NW) including the specified cell.
     * @param {number} x - The row index of the cell.
     * @param {number} y - The column index of the cell.
     * @returns {Array} - The values from all ordinal directions.
     */
    ordinals(x, y) {
        let cells = []
        
        cells.push(...this.ordinal(x, y, Direction.NE));
        cells.push(...this.ordinal(x, y, Direction.SE))
        cells.push(...this.ordinal(x, y, Direction.SW))
        cells.push(...this.ordinal(x, y, Direction.NW));

        return cells;
    }

    /**
     * Gets all data from all cardinal & ordinal directions (N, E, S, W, NE, SE, SW, NW) including the specified cell.
     * @param {number} x - The row index of the cell.
     * @param {number} y - The column index of the cell.
     * @returns {Array} - The values from all cardinal & ordinal directions.
     */
    cardinalsAndOrdinals(x, y) {
        let cells = []

        cells.push(...this.cardinals(x, y));
        cells.push(...this.ordinals(x, y));

        return cells;
    }

    /**
     * Returns data for the neighbors of a given cell in the grid.
     * @param {number} x - The row index of the cell.
     * @param {number} y - The column index of the cell.
     * @param {...string} directions - Optional. Directions to search for neighbors. 
     *                                 If not provided, searches in all directions.
     * @returns {object} - An object containing data for the neighbors in specified directions.
     */
    getNeighbors(x, y, ...directions) {
        let data = {}
        let offset = {};

        // If no directions were supplied, just search them all
        if(directions.length === 0) {
            directions = [Direction.N, Direction.E, Direction.S, Direction.W, 
                          Direction.NE,Direction.SE,Direction.SW, Direction.NW];
        }

        directions.forEach(direction => {
            switch(direction) {
                case Direction.N:
                    offset = { x:-1, y:0 }; 
                    data["N"] = this.getOffsetData(x, y, offset);
                    break;
                case Direction.S:
                    offset = { x:1, y:0 }; 
                    data["S"] = this.getOffsetData(x, y, offset);
                    break;
                case Direction.E:
                    offset = { x:0, y:1 }; 
                    data["E"] = this.getOffsetData(x, y, offset);
                    break;
                case Direction.W:
                    offset = { x:0, y:-1 }; 
                    data["W"] = this.getOffsetData(x, y, offset);
                    break;
                case Direction.NE:
                    offset = { x:-1, y:1 }; 
                    data["NE"] = this.getOffsetData(x, y, offset);
                    break;
                case Direction.SE:
                    offset = { x:1, y:1 }; 
                    data["SE"] = this.getOffsetData(x, y, offset);
                    break;
                case Direction.SW:
                    offset = { x:1, y:-1 }; 
                    data["SW"] = this.getOffsetData(x, y, offset);
                    break;
                case Direction.NW:
                    offset = { x:-1, y:-1 }; 
                    data["NW"] = this.getOffsetData(x, y, offset);
                    break;
                default:
                    throw new Error("Direction not recognised.")
            }
        });
   
        return data;
    }

    /**
     * Returns a string representation of the grid For easy printing.
     * @returns {string} - A string representation of the grid.
     */
    toString() {
        let output = [];
        
        this.data.forEach(row => {
            output.push(row.join(" "))
        });

        return output.join("\n");
    }
}

module.exports = { Direction, Grid };