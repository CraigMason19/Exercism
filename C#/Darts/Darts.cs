using System;

public static class Darts
{
    static double Hypotenuse(double a, double b) => Math.Sqrt(a * a + b * b);

    public static int Score(double x, double y)
    {
        double h = Hypotenuse(x, y);

        if (h <= 1)
            return 10;

        else if (h <= 5)
            return 5;

        else if (h <= 10)
            return 1;

        return 0;
    }
}