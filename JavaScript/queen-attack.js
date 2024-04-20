const grid = require('./helper/grid');

class QueenAttack {
    constructor({
      black: [blackRow, blackColumn] = [0, 3],
      white: [whiteRow, whiteColumn] = [7, 3],
    } = {}) {

        if([whiteRow, whiteColumn, blackRow, blackColumn].filter(pos => pos >= 0 && pos < 8).length != 4) {
            throw new Error("Queen must be placed on the board");
        }

        if(JSON.stringify([whiteRow, whiteColumn]) === JSON.stringify([blackRow, blackColumn])) {
            throw new Error('Queens cannot share the same space');
        }

        this.white = [whiteRow, whiteColumn];    
        this.black = [blackRow, blackColumn];  

        this.board = new grid.Grid(8, 8, '_');  

        this.board.fillCell(this.white[0], this.white[1], "W");
        this.board.fillCell(this.black[0], this.black[1], "B");
    }
  
    toString() {
        return this.board.toString();
    }
  
    get canAttack() {
        let possibleCells = this.board.row(this.white[0]);
        possibleCells.push(...this.board.column(this.white[1]));

        possibleCells.push(...this.board.diagonal(this.white[0], this.white[1], grid.Direction.NE));
        possibleCells.push(...this.board.diagonal(this.white[0], this.white[1], grid.Direction.SE));
        possibleCells.push(...this.board.diagonal(this.white[0], this.white[1], grid.Direction.SW));
        possibleCells.push(...this.board.diagonal(this.white[0], this.white[1], grid.Direction.NW));

        return possibleCells.includes("B");
    }
}
 
const positioning = { white: [1, 2], black: [5, 6] };
let qa = new QueenAttack(positioning);

console.log(qa.toString());
console.log(`Can attack: ${qa.canAttack}`);