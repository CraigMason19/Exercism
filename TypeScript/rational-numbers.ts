function gcd(a: number, b: number): number {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return Math.floor(a);
}

export class Rational {
    numerator: number;
    denominator: number;

    constructor(a: number, b: number) {
        this.numerator = a;
        this.denominator = b;
    }
  
    add(other: Rational): Rational {
        const a = (this.numerator * other.denominator) + (this.denominator * other.numerator);
        const b = this.denominator * other.denominator;
        return new Rational(a, b).reduce();
    }

    sub(other: Rational): Rational {
        let a = this.numerator * other.denominator - this.denominator * other.numerator;
        const b = this.denominator * other.denominator;
        return new Rational(a, b).reduce();
    }

    mul(other: Rational): Rational {
        if(other.numerator === 1 && other.denominator == 1) {
          return this;
        }
        else if(other.numerator === 0) {
          return other;
        }

        let a = (this.numerator * this.denominator);
        let b = other.numerator * other.denominator;
        return new Rational(a, b).reduce();
    }

    div(other: Rational): Rational {
        if(this.denominator === 0) {
            throw new Error('Divide by zero')
        }

        let a = (this.numerator * other.denominator);
        let b = this.denominator * other.numerator;
        return new Rational(a, b).reduce();
    }

    abs(other: Rational): Rational {
        let r: Rational = new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
        return r.reduce();
    }


    exprational(n: number): Rational {
        let r: Rational;

        if (n > 0) {
            r = new Rational(this.numerator ** n, this.denominator ** n);
        }
        else{
            n = Math.abs(n);
            r = new Rational(this.denominator ** n, this.numerator ** n);
        }
        
        return r.reduce();
    }

    expreal(n: number) : number {
        const base = Math.pow(n, 1 / this.denominator);
        return Math.pow(base, this.numerator);
    }

    reduce(): Rational {
        if (this.numerator === 0) {
            return new Rational(0, 1);
        }

        const n = gcd(this.numerator, this.denominator);
        let num = this.numerator / n;
        let denom = this.denominator / n;

        if (denom < 0) {
            num *= -1;
            denom *= -1;
        }

        return new Rational(num, denom);
    }
}