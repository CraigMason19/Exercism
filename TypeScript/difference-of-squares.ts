export class Squares {
    public range: number;

    constructor(range: number) {
        this.range = range;
    }
  
    get sumOfSquares(): number {
        let sum = 0;

        for(let i = 0; i < this.range+1; i++) {
            sum += i*i;
        }

        return sum;
    }
  
    get squareOfSum(): number {
        let sum = 0;

        for(let i = 0; i < this.range+1; i++) {
            sum += i;
        }

        return sum * sum;
    }
  
    get difference(): number {
        return this.squareOfSum - this.sumOfSquares;
    }
}

const s = new Squares(10);

console.log(s.sumOfSquares);
console.log(s.squareOfSum);
console.log(s.difference);