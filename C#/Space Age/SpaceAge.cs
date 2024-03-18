using System;
using System.Collections.Generic;

public class SpaceAge
{
    private const double SECONDS_IN_ONE_YEAR = 365.25 * (24 * 60 * 60);

    private static Dictionary<string, double> _orbitalPeriod = new Dictionary<string, double>
        {
            { "mercury", 0.2408467 },
            { "venus", 0.61519726 },
            { "earth", 1.0 },
            { "mars", 1.8808158 },
            { "jupiter", 11.862615 },
            { "saturn", 29.447498 },
            { "uranus", 84.016846 },
            { "neptune", 164.79132 }
        };
    
    private int _seconds;

    public SpaceAge(int seconds)
    {
        _seconds = seconds;
    }

    private double CalculateAge(string planet)
    {
        double time = _seconds / (_orbitalPeriod[planet] * SECONDS_IN_ONE_YEAR);
        return Math.Round(time, 2);
    }

    public double OnEarth()
    {
        return CalculateAge("earth");
    }

    public double OnMercury()
    {
        return CalculateAge("mercury");
    }

    public double OnVenus()
    {
        return CalculateAge("venus");
    }

    public double OnMars()
    {
        return CalculateAge("mars");
    }

    public double OnJupiter()
    {
        return CalculateAge("jupiter");
    }

    public double OnSaturn()
    {
        return CalculateAge("saturn");
    }

    public double OnUranus()
    {
        return CalculateAge("uranus");
    }

    public double OnNeptune()
    {
        return CalculateAge("neptune");
    }
}