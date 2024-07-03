export class ComplexNumber {
    _real: number;
    _imag: number;

    constructor(real: number, imag: number) {
        this._real = real;
        this._imag = imag;
    }
  
    public get real(): number {
        return this._real;
    }
  
    public get imag(): number {
        return this._imag;
    }
  
    public add(other: ComplexNumber): ComplexNumber {
        let real = this.real + other.real;
        let imag = this.imag + other.imag;
        return new ComplexNumber(real, imag);
    }
  
    public sub(other: ComplexNumber): ComplexNumber {
        let real = this.real - other.real;
        let imag = this.imag - other.imag;
        return new ComplexNumber(real, imag);
    }
  
    public div(other: ComplexNumber): ComplexNumber {
        let divisor = Math.pow(other.real, 2) + Math.pow(other.imag, 2);

        if(divisor === 0) {
            throw new Error('Divide by zero');
        }

        let real = this.real * other.real + this.imag * other.imag;
        let imag = this.imag * other.real - this.real * other.imag;
        return new ComplexNumber(real / divisor, imag / divisor);
    }
  
    public mul(other: ComplexNumber): ComplexNumber {
        let real = (this.real * other.real - this.imag * other.imag);
        let imag = (this.imag * other.real + this.real * other.imag);
        return new ComplexNumber(real, imag);
    }
  
    public get abs(): number {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imag, 2));
    }
  
    public get conj(): ComplexNumber {
        return new ComplexNumber(this.real, (this.imag === 0) ? 0 : -this.imag);
    }
  
    public get exp(): ComplexNumber {
        let expReal = Math.exp(this.real);
        return new ComplexNumber(expReal * Math.cos(this.imag), expReal * Math.sin(this.imag));
    }
}

let a = new ComplexNumber(1, 2); 
let b = new ComplexNumber(3, 4);
console.log(a.mul(b)); // -5, 10

console.log(new ComplexNumber(3, 4).conj); // 3, -4

console.log(new ComplexNumber(1, 0).exp); // 2.718281828459045 (Math.E), 0