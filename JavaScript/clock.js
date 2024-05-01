function modulus(a, b) {
    return ((a % b) + b) % b;
}

class Clock {
    constructor(hour, minute) {
        this.hour = modulus(hour, 24);

        if (minute !== undefined) {
            var quotient = Math.floor(minute / 60);
            var remainder = modulus(minute, 60);

            this.hour = modulus((hour + quotient), 24);
            this.minute = remainder;
        }
        else {
            this.minute = 0;
        }
    }

    toString() {
        return `${this.hour.toString().padStart(2, "0")}:${this.minute.toString().padStart(2, "0")}`;
    }

    plus(minutes) {
        return new Clock(this.hour, this.minute + minutes);
    }

    minus(minutes) {
        return new Clock(this.hour, this.minute - minutes);
    }

    equals(other) {
        return this.hour === other.hour && this.minute === other.minute;
    }
}

let c = new Clock(-1, 15);
console.log(c.toString());