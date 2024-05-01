function modulus(a: number, b: number) {
    return((a % b) + b) % b;
}

export  class Clock {
    readonly hour: number;
    readonly minute: number;

    constructor(hour: number, minute?: number) {
        this.hour = modulus(hour, 24);
       
        if(minute !== undefined) {
            var quotient = Math.floor(minute / 60);
            var remainder = modulus(minute, 60);

            // this.hour += quotient;
            this.hour = modulus((hour + quotient), 24);
            this.minute = remainder;
        }
        else {
            this.minute = 0;
        }
    }
  
    public toString(): unknown {
        return `${this.hour.toString().padStart(2, "0")}:${this.minute.toString().padStart(2, "0")}`;
    }
  
    public plus(minutes: number): Clock {
        return new Clock(this.hour, this.minute + minutes);
    }
  
    public minus(minutes: number): Clock {
        return new Clock(this.hour, this.minute - minutes);
    }
  
    public equals(other: Clock): boolean {
        return this.hour === other.hour && this.minute === other.minute;
    }
}

let c = new Clock(-1, 15);
console.log(c.toString());