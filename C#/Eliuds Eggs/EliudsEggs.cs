using System;
using System.Linq;

public static class EliudsEggs
{
    public static string ToBinary(int value)
    {
        return Convert.ToString(value, 2);
    }

    public static int EggCount(int encodedCount)
    {
        string binary = ToBinary(encodedCount);
        return binary.Where(bit => bit == '1').ToArray().Length;
    }
}