using System;
using System.Linq;

public static class ArmstrongNumbers
{
    public static bool IsArmstrongNumber(int number)
    {
        var numbers = number.ToString().ToCharArray().Select(x => Convert.ToInt32(x.ToString()));
        var result = numbers.Aggregate(0, (acc, x) => acc + (int)Math.Pow(x, numbers.Count()));

        return number == result;
    }
}