using System;

public static class DifferenceOfSquares
{
    public static int CalculateSquareOfSum(int max)
    {
        int counter = 0;
        for (int i = 1; i < max + 1; i++)
        {
            counter += i;
        }

        return counter * counter;
    }

    public static int CalculateSumOfSquares(int max)
    {
        int counter = 0;
        for (int i = 1; i < max + 1; i++)
        {
            counter += i * i;
        }

        return counter;
    }

    public static int CalculateDifferenceOfSquares(int max)
    {
        return CalculateSquareOfSum(max) - CalculateSumOfSquares(max);
    }
}