using System;

public static class BinarySearch
{
    // Binary search only works when a list has been sorted.
    public static int Find(int[] input, int value)
    {
        if (input.Length == 0) { return -1; }

        int l = 0;
        int r = input.Length - 1;

        while (l <= r)
        {
            int m = (l + r) / 2;

            if (value == input[m])
            {
                return m;
            }

            if (value > input[m])
            {
                l = m + 1;
            }
            else if (value < input[m])
            {
                r = m - 1;
            }
        }

        return -1;
    }
}