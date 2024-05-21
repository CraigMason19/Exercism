using System;

public struct CurrencyAmount
{
    private decimal amount;
    private string currency;

    public CurrencyAmount(decimal amount, string currency)
    {
        this.amount = amount;
        this.currency = currency;
    }

    // Implement equality operators
    public static bool operator !=(CurrencyAmount a, CurrencyAmount b)
    {
        if (a.currency != b.currency)
        {
            throw new ArgumentException();
        }

        return a.amount != b.amount;
    }

    public static bool operator ==(CurrencyAmount a, CurrencyAmount b)
    {
        if (a.currency != b.currency)
        {
            throw new ArgumentException();
        }

        return a.amount == b.amount;
    }




    // Implement comparison operators
    public static bool operator >(CurrencyAmount a, CurrencyAmount b)
    {
        if (a.currency != b.currency)
        {
            throw new ArgumentException();
        }

        return a.amount > b.amount;
    }

    public static bool operator <(CurrencyAmount a, CurrencyAmount b)
    {
        if (a.currency != b.currency)
        {
            throw new ArgumentException();
        }

        return a.amount < b.amount;
    }

    // Arithmetic operators
    public static CurrencyAmount operator +(CurrencyAmount a, CurrencyAmount b)
    {
        if(a.currency != b.currency)
        {
            throw new ArgumentException();
        }

        return new CurrencyAmount(a.amount + b.amount, a.currency);
    }

    public static CurrencyAmount operator -(CurrencyAmount a, CurrencyAmount b)
    {
        if (a.currency != b.currency)
        {
            throw new ArgumentException();
        }

        return new CurrencyAmount(a.amount - b.amount, a.currency);
    }

    public static CurrencyAmount operator *(CurrencyAmount a, CurrencyAmount b)
    {
        if (a.currency != b.currency)
        {
            throw new ArgumentException();
        }

        return new CurrencyAmount(a.amount * b.amount, a.currency);
    }

    public static CurrencyAmount operator *(CurrencyAmount a, decimal b)
    {
        return new CurrencyAmount(a.amount * b, a.currency);
    }

    public static CurrencyAmount operator /(CurrencyAmount a, CurrencyAmount b)
    {
        if(b.amount == 0)
        {
            throw new DivideByZeroException();
        }

        if (a.currency != b.currency)
        {
            throw new ArgumentException();
        }

        return new CurrencyAmount(a.amount / b.amount, a.currency);
    }

    public static CurrencyAmount operator /(CurrencyAmount a, decimal b)
    {
        if (b == 0)
        {
            throw new DivideByZeroException();
        }

        return new CurrencyAmount(a.amount / b, a.currency);
    }

    // Implement type conversion operators
    public static explicit operator double(CurrencyAmount ca) => (double)ca.amount;
    public static implicit operator decimal(CurrencyAmount ca) => ca.amount;
}
