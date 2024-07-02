class InvalidInputError extends Error {
    constructor(message) {
        super();
        this.message = message || 'Invalid Input';
    }
}
exports.InvalidInputError = InvalidInputError;

function isDirection(value) {
    return value === 'north' || value === 'east' || value === 'south' || value === 'west';
}

class Robot {
    constructor() {
        this.coordinates = [0, 0];
        this.bearing = 'north';
    }
  
    place({ x, y, direction }) {
        this.coordinates = [x, y];
        if (!isDirection(direction)) {
            throw new InvalidInputError(`Invalid direction: ${direction}`);
        }
      
        this.bearing = direction;
    }
  
    turnRight() {
        switch (this.bearing) {
            case 'north':
                this.bearing = 'east';
                break;
            case 'east':
                this.bearing = 'south';
                break;
            case 'south':
                this.bearing = 'west';
                break;
            case 'west':
                this.bearing = 'north';
                break;
        }
    }
  
    turnLeft() {
        switch (this.bearing) {
            case 'north':
                this.bearing = 'west';
                break;
            case 'west':
                this.bearing = 'south';
                break;
            case 'south':
                this.bearing = 'east';
                break;
            case 'east':
                this.bearing = 'north';
                break;
        }
    }
  
    advance() {
        switch (this.bearing) {
            case 'north':
                this.coordinates[1]++;
                break;
            case 'south':
                this.coordinates[1]--;
                break;
            case 'east':
                this.coordinates[0]++;
                break;
            case 'west':
                this.coordinates[0]--;
                break;
        }
    }
    evaluate(instructions) {
        for (let i = 0; i < instructions.length; i++) {
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
exports.Robot = Robot;

const r = new Robot();
r.place({ x: 7, y: 3, direction: 'north' });
r.evaluate("RAALAL");

console.log(r);