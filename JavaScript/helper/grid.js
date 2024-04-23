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

const Offsets = Object.freeze({
    [Direction.N]: { x: -1, y: 0 },
    [Direction.S]: { x: 1, y: 0 },
    [Direction.E]: { x: 0, y: 1 },
    [Direction.W]: { x: 0, y: -1 },
    [Direction.NE]: { x: -1, y: 1 },
    [Direction.SE]: { x: 1, y: 1 },
    [Direction.SW]: { x: 1, y: -1 },
    [Direction.NW]: { x: -1, y: -1 },
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

        for(let i = 0; i < grid.size.rows; i++) {
            for(let j = 0; j < grid.size.columns; j++) {
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
        return { rows: this.data.length, columns: this.data[0].length };
    }

    /**
     * Determines if a cell is in the grid's dimensions.
     * @param {number} x - The row index of the cell.
     * @param {number} y - The column index of the cell.
     * @returns {bool} - Returns true if the x y coordinate is in the grid.
     */
    isValidCoordinate(x, y) {
        return x >= 0 && x < this.size.rows && y >= 0 && y < this.size.columns;
    }

    /**
     * Gets the value at the specified cell.
     * @param {number} x - The row index of the cell.
     * @param {number} y - The column index of the cell.
     * @returns {any} - The value at the specified cell.
     * @throws {Error} - Throws an error if the coordinates are out of range.
     */
    cell(x, y) {
        if (this.isValidCoordinate(x, y)) {
            return this.data[x][y];
        } 
        else {
            throw new Error("Invalid coordinates");
        }
    }

    /**
     * Sets the value at the specified cell.
     * @param {number} x - The row index of the cell.
     * @param {number} y - The column index of the cell.
     * @param {any} fillValue - The value to set at the specified cell.
     * @throws {Error} - Throws an error if the coordinates are out of range.
     */
    fillCell(x, y, fillValue) {
        if (this.isValidCoordinate(x, y)) {
            this.data[x][y] = fillValue;
        } 
        else {
            throw new Error("Invalid coordinates");
        }
    }

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
     * @throws {Error} - Throws an error If the row index is out of bounds.
     */
    row(n) {
        if (n >= 0 && n < this.size.rows) {
            return this.data[n];
        } 

        else {
            throw new Error("Invalid row index");
        }
    }

    /**
     * Gets all data from a column in the grid.
     * @param {number} n - The column index of the grid.
     * @returns {number} - The values from a column in the grid.
     * @throws {Error} - Throws an error If the column index is out of bounds.
     */
    column(n) {
        if (n >= 0 && n < this.size.columns) {
            return this.data.map(row => row[n]);
        } 

        else {
            throw new Error("Invalid column index");
        }
    }

    /**
     * Gets all data from a cardinal direction (N, E, S, W) including the specified cell.
     * @param {number} x - The row index of the cell.
     * @param {number} y - The column index of the cell.
     * @param {Direction} direction - The cardinal direction.
     * @returns {Array} - The values from a cardinal direction.
     */
    cardinal(x, y, direction) {
        const offset = Offsets[direction];

        if (offset) {
            return this.getOffsetDataLoop(x, y, offset);
        } 
        
        else {
            throw new Error("Cardinal direction not recognized.");
        }
    }

    /**
     * Gets all data from a ordinal direction (NE, SE, SW, NW) including the specified cell.
     * @param {number} x - The row index of the cell.
     * @param {number} y - The column index of the cell.
     * @param {Direction} direction - The ordinal direction.
     * @returns {Array} - The values from a ordinal direction.
     */
    ordinal(x, y, direction) {
        const offset = Offsets[direction];

        if (offset) {
            return this.getOffsetDataLoop(x, y, offset);
        } 
        
        else {
            throw new Error("Cardinal direction not recognized.");
        }
    }

    /**
     * Gets all data from all cardinal directions (N, E, S, W) including the specified cell.
     * @param {number} x - The row index of the cell.
     * @param {number} y - The column index of the cell.
     * @returns {Array} - An array of objects from all cardinal directions.
     */
    cardinals(x, y) {
        return [
            { direction:Direction.N, values:this.cardinal(x, y, Direction.N) },
            { direction:Direction.S, values:this.cardinal(x, y, Direction.S) },
            { direction:Direction.E, values:this.cardinal(x, y, Direction.E) },
            { direction:Direction.W, values:this.cardinal(x, y, Direction.W) },
        ];
    }

    /**
     * Gets all data from all ordinal directions (NE, SE, SW, NW) including the specified cell.
     * @param {number} x - The row index of the cell.
     * @param {number} y - The column index of the cell.
     * @returns {Array} - An array of objects from all ordinal directions.
     */
    ordinals(x, y) {
        return [
            { direction:Direction.NE, values:this.ordinal(x, y, Direction.NE) },
            { direction:Direction.SE, values:this.ordinal(x, y, Direction.SE) },
            { direction:Direction.SW, values:this.ordinal(x, y, Direction.SW) },
            { direction:Direction.NW, values:this.ordinal(x, y, Direction.NW) },
        ];
    }

    /**
     * Gets all data from all cardinal & ordinal directions (N, E, S, W, NE, SE, SW, NW) including the specified cell.
     * @param {number} x - The row index of the cell.
     * @param {number} y - The column index of the cell.
     * @returns {Array} - An array of objects from all cardinal & ordinal directions.
     */
    cardinalsAndOrdinals(x, y) {
        return [
            { direction:Direction.N, values:this.cardinal(x, y, Direction.N) },
            { direction:Direction.S, values:this.cardinal(x, y, Direction.S) },
            { direction:Direction.E, values:this.cardinal(x, y, Direction.E) },
            { direction:Direction.W, values:this.cardinal(x, y, Direction.W) },
            { direction:Direction.NE, values:this.ordinal(x, y, Direction.NE) },
            { direction:Direction.SE, values:this.ordinal(x, y, Direction.SE) },
            { direction:Direction.SW, values:this.ordinal(x, y, Direction.SW) },
            { direction:Direction.NW, values:this.ordinal(x, y, Direction.NW) },
        ];
    }

    /**
     * Returns data for the neighbors of a given cell in the grid.
     * @param {number} x - The row index of the cell.
     * @param {number} y - The column index of the cell.
     * @param {...string} directions - Optional. Directions to search for neighbors. 
     *                                 If not provided, searches in all directions.
     * @returns {Array} - An array containing data for the neighbors in specified directions.
     */
    getNeighbors(x, y, ...directions) {
        let data = [];
        let offset = {};

        // If no directions were supplied, just search them all
        if(directions.length === 0) {
            directions = [Direction.N, Direction.E, Direction.S, Direction.W, 
                          Direction.NE,Direction.SE,Direction.SW, Direction.NW];
        }

        directions.forEach(dir => {
            data.push({ direction:dir, value:this.getOffsetData(x, y, Offsets[dir]) });
        });
   
        return data;
    }

    /**
     * Returns a string representation of the grid For easy printing.
     * @returns {string} - A string representation of the grid.
     */
    toString() {
        return this.data.map(row => row.join(" ")).join("\n");
    }
}

module.exports = { Direction, Offsets, Grid };