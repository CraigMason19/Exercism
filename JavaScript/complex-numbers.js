class ComplexNumber {
    constructor(real, imag) {
        this._real = real;
        this._imag = imag;
    }

    get real() {
        return this._real;
    }

    get imag() {
        return this._imag;
    }

    add(other) {
        let real = this.real + other.real;
        let imag = this.imag + other.imag;
        return new ComplexNumber(real, imag);
    }

    sub(other) {
        let real = this.real - other.real;
        let imag = this.imag - other.imag;
        return new ComplexNumber(real, imag);
    }

    div(other) {
        let divisor = Math.pow(other.real, 2) + Math.pow(other.imag, 2);

        if (divisor === 0) {
            throw new Error('Divide by zero');
        }

        let real = this.real * other.real + this.imag * other.imag;
        let imag = this.imag * other.real - this.real * other.imag;
        return new ComplexNumber(real / divisor, imag / divisor);
    }

    mul(other) {
        let real = (this.real * other.real - this.imag * other.imag);
        let imag = (this.imag * other.real + this.real * other.imag);
        return new ComplexNumber(real, imag);
    }

    get abs() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imag, 2));
    }

    get conj() {
        return new ComplexNumber(this.real, (this.imag === 0) ? 0 : -this.imag);
    }

    get exp() {
        let expReal = Math.exp(this.real);
        return new ComplexNumber(expReal * Math.cos(this.imag), expReal * Math.sin(this.imag));
    }
}
exports.ComplexNumber = ComplexNumber;

let a = new ComplexNumber(1, 2);
let b = new ComplexNumber(3, 4);
console.log(a.mul(b)); // -5, 10

console.log(new ComplexNumber(3, 4).conj); // 3, -4

console.log(new ComplexNumber(1, 0).exp); // 2.718281828459045 Math.E