using System;

public class Clock
{
    public static int Modulus(int a, int b) {
        return ((a % b) + b) % b;
    }

    private int _hours;
    private int _minutes;

    public Clock(int hours, int minutes)
    {
        var quotient = (int)Math.Floor((double)minutes / 60);
        var remainder = Modulus(minutes, 60);

        this._hours = Modulus((hours + quotient), 24);
        this._minutes = remainder;
    }

    public Clock Add(int minutesToAdd)
    {
        return new Clock(this._hours, this._minutes + minutesToAdd);
    }

    public Clock Subtract(int minutesToSubtract)
    {
        return new Clock(this._hours, this._minutes - minutesToSubtract);
    }

    public override string ToString()
    {
        return $"{this._hours.ToString().PadLeft(2, '0')}:{this._minutes.ToString().PadLeft(2, '0')}";
    }

    public override bool Equals(object obj)
    {
        if (obj is Clock other)
        {
            return this.GetHashCode() == other.GetHashCode();
        }

        return false;
    }

    public override int GetHashCode()
    {
        return this._hours.GetHashCode() ^ this._minutes.GetHashCode();
    }
}