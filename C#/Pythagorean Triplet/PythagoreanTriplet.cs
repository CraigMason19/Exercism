using System;
using System.Collections.Generic;

public static class PythagoreanTriplet
{
    public static IEnumerable<(int a, int b, int c)> TripletsWithSum(int sum)
    {
        for (int x = 1; x < sum + 1; x++)
        {
            for (int y = x; y < sum + 1; y++)
            {
                int z = sum - x - y;
                if (x * x + y * y == z * z)
                {
                    yield return (x, y, z);
                }
            }
        }

        yield break;
    }
}