using System;

public static class MathHelper
{
    public static int GCD(int a, int b)
    {
        while(b != 0)
        {
            int tmp = b;
            b = a % b; 
            a = tmp;
        }

        return a;
    }
}

public static class RealNumberExtension
{
    public static double Expreal(this int realNumber, RationalNumber r)
    {
        return r.Expreal(realNumber);
    }
}

public struct RationalNumber
{
    public readonly int Numerator = 1;
    public readonly int Denominator = 1;

    public RationalNumber(int numerator, int denominator)
    {
        Numerator = numerator;
        Denominator = denominator;
    }

    public static RationalNumber operator +(RationalNumber r1, RationalNumber r2)
    {
        int a = (r1.Numerator * r2.Denominator) + (r1.Denominator * r2.Numerator);
        int b = r1.Denominator * r2.Denominator;
        return new RationalNumber(a, b).Reduce();
    }

    public static RationalNumber operator -(RationalNumber r1, RationalNumber r2)
    {
        int a = (r1.Numerator * r2.Denominator) - (r1.Denominator * r2.Numerator);
        int b = r1.Denominator * r2.Denominator;
        return new RationalNumber(a, b).Reduce();
    }

    public static RationalNumber operator *(RationalNumber r1, RationalNumber r2)
    {
        if (r2.Numerator == 1 && r2.Denominator == 1)
        {
            return r1;
        }
        else if (r2.Numerator == 0)
        {
            return r2;
        }

        int a = (r1.Numerator * r1.Denominator);
        int b = r2.Numerator * r2.Denominator;
        return new RationalNumber(a, b).Reduce();
    }

    public static RationalNumber operator /(RationalNumber r1, RationalNumber r2)
    {
        if (r1.Denominator == 0)
        {
            throw new DivideByZeroException();
        }

        int a = (r1.Numerator * r2.Denominator);
        int b = r1.Denominator * r2.Numerator;
        return new RationalNumber(a, b).Reduce();
    }

    public RationalNumber Abs()
    {
        RationalNumber rn = new RationalNumber(Math.Abs(this.Numerator), Math.Abs(this.Denominator));
        return rn.Reduce();
    }

    public RationalNumber Reduce()
    {
        if (this.Numerator == 0)
        {
            return new RationalNumber(0, 1);
        }

        int n = MathHelper.GCD(this.Numerator, this.Denominator);
        int num = this.Numerator / n;
        int denom = this.Denominator / n;

        if (denom < 0)
        {
            num *= -1;
            denom *= -1;
        }

        return new RationalNumber(num, denom);
    }

    public RationalNumber Exprational(int power)
    {
        RationalNumber rn = new RationalNumber();

        if(power > 0)
        {
            rn = new RationalNumber((int)Math.Pow(this.Numerator, power), (int)Math.Pow(this.Denominator, power));
            return rn.Reduce();
        }

        int n = Math.Abs(power);
        rn = new RationalNumber((int)Math.Pow(this.Denominator, n), (int)Math.Pow(this.Numerator, n));

        return rn.Reduce();
    }

    public double Expreal(int baseNumber)
    {
        double b = Math.Pow(baseNumber, 1d / this.Denominator);
        return Math.Pow(b, this.Numerator);
    }

    public override string ToString()
    {
        return $"RationalNumber({this.Numerator}, {this.Denominator})";
    }
}