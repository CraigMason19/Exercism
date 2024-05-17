import { Grid } from "./helper/grid";

type Position = readonly [number, number]

type Positions = {
  white: Position
  black: Position
}

export class QueenAttack {
  public readonly black: Position;
  public readonly white: Position;
  private board: Grid<string>;

  constructor({white, black}: Partial<Positions> = {}) {
    this.white = white ? white : [7,3];
    this.black = black ? black : [0,3];

    if([...this.black, ...this.white].filter(pos => pos >= 0 && pos < 8).length != 4) {
        throw new Error("Queen must be placed on the board");
    }

    if(JSON.stringify(this.white) === JSON.stringify(this.black)) {
        throw new Error('Queens cannot share the same space');
    }

    this.board = new Grid<string>(8, 8, '_');
    this.board.fillCell(this.white[0], this.white[1], "W");
    this.board.fillCell(this.black[0], this.black[1], "B");
  }

  toString(): string {
    return this.board.toString();
  }

  get canAttack(): boolean {
    let result = this.board.cardinalsAndOrdinals(...this.white);
    return result.flatMap(obj => obj.values).includes("B");
  }
}

let qa = new QueenAttack({ white: [1, 2], black: [5, 6] });

console.log(qa.toString());
console.log(`Can attack: ${qa.canAttack}`);