using System;

public struct ComplexNumber
{
    private double _real;

    private double _imag;

    public ComplexNumber(double real, double imaginary=0)
    {
        this._real = real;
        this._imag = imaginary;
    }

    public double Real() => this._real;

    public double Imaginary() => this._imag;

    public static implicit operator ComplexNumber(int real) => new ComplexNumber(real, 0);

    public ComplexNumber Add(ComplexNumber other)
    {
        var real = this.Real() + other.Real();
        var imag = this.Imaginary() + other.Imaginary();
        return new ComplexNumber(real, imag);
    }

    public ComplexNumber Sub(ComplexNumber other)
    {
        var real = this.Real() - other.Real();
        var imag = this.Imaginary() - other.Imaginary();
        return new ComplexNumber(real, imag);
    }

    public ComplexNumber Mul(ComplexNumber other)
    {
        var real = (this.Real() * other.Real() - this.Imaginary() * other.Imaginary());
        var imag = (this.Imaginary() * other.Real() + this.Real() * other.Imaginary());
        return new ComplexNumber(real, imag);
    }

    public ComplexNumber Div(ComplexNumber other)
    {
        var divisor = Math.Pow(other.Real(), 2) + Math.Pow(other.Imaginary(), 2);

        if (divisor == 0)
        {
            throw new DivideByZeroException();
        }

        var real = this.Real() * other.Real() + this.Imaginary() * other.Imaginary();
        var imag = this.Imaginary() * other.Real() - this.Real() * other.Imaginary();
        return new ComplexNumber(real / divisor, imag / divisor);
    }

    public double Abs()
    {
        return Math.Sqrt(Math.Pow(this.Real(), 2) + Math.Pow(this.Imaginary(), 2));
    }

    public ComplexNumber Conjugate()
    {
        return new ComplexNumber(this.Real(), (this.Imaginary() == 0) ? 0 : -this.Imaginary());
    }

    public ComplexNumber Exp()
    {
        var expReal = Math.Exp(this.Real());
        return new ComplexNumber(expReal * Math.Cos(this.Imaginary()), expReal * Math.Sin(this.Imaginary()));
    }
}