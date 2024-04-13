using System;

public class WeighingMachine
{
    public int Precision { get; private set; } = 2;

    private double _weight = 1.0;

    public double Weight
    {
        get { return _weight; }
        set
        {
            if (value < 0)
            {
                throw new ArgumentOutOfRangeException();
            }

            _weight = value;
        }
    }

    public string DisplayWeight
    {
        get
        {
            return $"{(this._weight - this.TareAdjustment).ToString($"F{this.Precision}")} kg";
        }
    }

    public double TareAdjustment { get; set; } = 5;

    public WeighingMachine(int precision)
    {
        Precision = precision;
    }
}