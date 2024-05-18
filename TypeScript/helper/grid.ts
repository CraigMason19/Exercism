// Used in:
//  Queen Attack
//  Word Search

export enum Direction {
    N,
    E,
    S,
    W,
    NE,
    SE,
    SW,
    NW,
};

export interface Offset {
    x: number;
    y: number;
}

export interface OffsetData {
    direction: Direction;
    value: any;
}

export const Offsets: Record<Direction, Offset> = Object.freeze({
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
export class Grid<T> {
    data: T[][];

    /**
     * Creates a new Grid instance.
     * @param {number} rows - The number of rows in the grid.
     * @param {number} columns - The number of columns in the grid.
     * @param {T} fillValue - The value to fill the grid cells with. undefined by default
     */
    constructor(rows: number, columns: number, fillValue: T | undefined = undefined) {
        this.data = [];

        for(let i = 0; i < rows; i++) {
            let col: T[] = [];

            for(let j = 0; j < columns; j++) {
                col.push(fillValue as T);
            };

            this.data.push(col);
        };
    };

    /**
     * Creates a Grid instance from existing data.
     * @param {Array<Array<T>>} data - The 2D array representing the grid data.
     * @returns {Grid<T>} - A new Grid instance.
     */
     static fromData<T>(data: T[][]): Grid<T> {
        let grid = new Grid<T>(data.length, data[0].length);

        for (let i = 0; i < grid.data.length; i++) {
            for (let j = 0; j < grid.data[i].length; j++) {
                grid.data[i][j] = data[i][j];
            }
        }

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
     * @returns {boolean} - Returns true if the x y coordinate is in the grid.
     */
    isValidCoordinate(x: number, y: number): boolean {
        return x >= 0 && x < this.size.rows && y >= 0 && y < this.size.columns;
    }

    /**
     * Gets the value at the specified cell.
     * @param {number} x - The row index of the cell.
     * @param {number} y - The column index of the cell.
     * @returns {T} - The value at the specified cell.
     * @throws {Error} - Throws an error if the coordinates are out of range.
     */
    cell(x: number, y: number): T {
        if (this.isValidCoordinate(x, y)) {
            return this.data[x][y];
        } 
        else {
            throw new Error("Invalid coordinates");
        }
    }

    /**
     * Iterates through each element in the grid and applies the given callback function.
     * 
     * @param callback - The function to call for each element, which receives the value, row index, and column index.
     */
    forEach(callback: (value: T, row: number, col: number) => void): void {
        for (let row = 0; row < this.data.length; row++) {
            for (let col = 0; col < this.data[row].length; col++) {
                callback(this.data[row][col], row, col);
            }
        }
    }

    /**
     * Flattens the 2D grid into a 1D array.
     * 
     * @returns A single array containing all the elements of the grid.
     */
    flat(): T[] {
        return this.data.reduce((acc, row) => acc.concat(row), []);
    }

    /**
     * Sets the value at the specified cell.
     * 
     * @param {number} x - The row index of the cell.
     * @param {number} y - The column index of the cell.
     * @param {T} fillValue - The value to set at the specified cell.
     * @throws {Error} - Throws an error if the coordinates are out of range.
     */
    fillCell(x: number, y: number, fillValue: T): void {
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
     * @returns {T | undefined} - The value in a nearby cell, or undefined if out of bounds.
     */
    getOffsetData(x: number, y: number, offset: Offset): T | undefined {
        const newX = x + offset.x;
        const newY = y + offset.y;

        if (this.isValidCoordinate(newX, newY)) {
            return this.data[newX][newY];
        }

        return undefined;
    }

    /**
     * Gets all data from an offset direction relative to a position.
     * @param {number} x - The row index of the cell.
     * @param {number} y - The column index of the cell.
     * @param {Offset} offset - An object representing the x y offset.
     * @returns {Array<T>} - The values in a direction.
     */
    getOffsetDataLoop(x: number, y: number, offset: Offset): T[] {
        let values: T[] = [];
        let counter = 1;

        let value = this.getOffsetData(x, y, { x: 0, y: 0 });
        while (value !== undefined) {
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
    row(n: number): T[] {
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
     * @returns {array} - The values from a column in the grid.
     * @throws {Error} - Throws an error If the column index is out of bounds.
     */
    column(n: number): T[] {
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
    cardinal(x: number, y: number, direction: Direction): T[] {
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
    ordinal(x: number, y: number, direction: Direction): T[] {
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
    cardinals(x: number, y: number) {
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
    ordinals(x: number, y: number) {
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
    cardinalsAndOrdinals(x: number, y: number) {
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
    getNeighbors(x: number, y: number, ...directions: Direction[]): OffsetData[] {
        const data: OffsetData[] = [];

        if (directions.length === 0) {
            directions = [Direction.N, Direction.E, Direction.S, Direction.W, Direction.NE, Direction.SE, Direction.SW, Direction.NW];
        }

        for (const dir of directions) {
            const value = this.getOffsetData(x, y, Offsets[dir]);
            data.push({ direction: dir, value });
        }
        return data;
    }

    /**
     * Returns a string representation of the grid For easy printing.
     * @returns {string} - A string representation of the grid.
     */
    toString(): string {
        return this.data.map(row => row.join(" ")).join("\n");
    }
}