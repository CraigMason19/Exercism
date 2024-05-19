using System;
using System.Numerics;

public static class Grains
{
    public static ulong Square(int n)
    {
        return n switch
        {
            < 1 or > 64 => throw new ArgumentOutOfRangeException("Invalid chess board square"),
            1 => 1,
            _ => (ulong)BigInteger.Pow(2, n - 1)
        };
    }

    public static ulong Total()
    {
        return (ulong)(BigInteger.Pow(2, 64) - new BigInteger(1));
    }
}