export class InvalidInputError extends Error {
    constructor(message: string) {
        super()
        this.message = message || 'Invalid Input'
    }
}
  
type Direction = 'north' | 'east' | 'south' | 'west'
type Coordinates = [number, number]
  
function isDirection(value: any): boolean {
    return value === 'north' || value === 'east' || value === 'south' || value === 'west';
}

export class Robot {
    _coordinates: Coordinates = [0, 0];
    _bearing: Direction = 'north';

    get bearing(): Direction {
        return this._bearing;
    }
  
    get coordinates(): Coordinates {
        return this._coordinates;
    }
  
    place({x, y, direction }: { x: number; y: number; direction: string }) {
        this._coordinates = [x, y];

        if (!isDirection(direction)) {
            throw new InvalidInputError(`Invalid direction: ${direction}`);
        }

        this._bearing = direction as Direction;
    }

    turnRight() {
        switch (this._bearing) {
            case 'north':
                this._bearing = 'east';
                break;
            case 'east':
                this._bearing = 'south';
                break;
            case 'south':
                this._bearing = 'west';
                break;
            case 'west':
                this._bearing = 'north';
                break;
        }
    }

    turnLeft() {
        switch (this._bearing) {
            case 'north':
                this._bearing = 'west';
                break;
            case 'west':
                this._bearing = 'south';
                break;
            case 'south':
                this._bearing = 'east';
                break;
            case 'east':
                this._bearing = 'north';
                break;
        }
    }

    advance(): void {
        switch (this.bearing) {
            case 'north':
                this._coordinates[1]++;
                break;
            case 'south':
                this._coordinates[1]--;
                break;
            case 'east':
                this._coordinates[0]++;
                break;
            case 'west':
                this._coordinates[0]--;
                break;
        }
    }
  
    evaluate(instructions: string) {
        for(let i = 0; i < instructions.length; i++) {
            const command = instructions[i].toUpperCase();

            switch (command) {
                case 'R':
                    this.turnRight();
                    break;
                case 'L':
                    this.turnLeft();
                    break;
                case 'A':
                    this.advance();
                    break;
                default:
                    throw new InvalidInputError(`Invalid command: ${command}`);
            }
        }
    }
}

const r = new Robot();
r.place({ x: 7, y: 3, direction: 'north' });
r.evaluate("RAALAL");

console.log(r);