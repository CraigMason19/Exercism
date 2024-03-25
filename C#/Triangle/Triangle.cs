using System;
using System.Collections.Generic;

public static class Triangle
{
    public static bool IsValid(double side1, double side2, double side3)
    {
        double[] sides = [side1, side2, side3];

        foreach (var side in sides)
        {
            if (side <= 0)
            {
                return false;
            }
        }

        bool result = (side1 + side2 >= side3) && (side2 + side3 >= side1) && (side1 + side3 >= side2);
        if (!result)
        {
            return false;
        }

        return true;
    }

    public static bool IsScalene(double side1, double side2, double side3)
    {
        var s = new HashSet<double>([side1, side2, side3]);
        return s.Count == 3 && IsValid(side1, side2, side3);
    }

    public static bool IsIsosceles(double side1, double side2, double side3)
    {
        var s = new HashSet<double>([side1, side2, side3]);
        return s.Count != 3 && IsValid(side1, side2, side3);
    }

    public static bool IsEquilateral(double side1, double side2, double side3)
    {
        var s = new HashSet<double>([side1, side2, side3]);
        return s.Count == 1 && IsValid(side1, side2, side3);
    }
}