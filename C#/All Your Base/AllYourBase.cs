using System;
using System.Collections.Generic;

public static class AllYourBase
{
    public static int FromBase(int[] digits, int baseFrom)
    {
        int n = 0;

        for (int i = 0; i < digits.Length; i++)
        {
            if (digits[i] >= baseFrom || digits[i] < 0)
            {
                throw new ArgumentException("Input has wrong format");
            }

            int power = digits.Length - 1 - i;
            n += digits[i] * (int)Math.Pow(baseFrom, power);
        }

        return n;
    }

    public static int[] ToBase(int num, int baseTo)
    {
        if (num == 0)
        {
            return [0];
        }

        List<int> result = [];

        while (num > 0)
        {
            result.Add(num % baseTo);
            num = num / baseTo;
        }

        result.Reverse();

        return result.ToArray();
    }

    public static int[] Rebase(int inputBase, int[] inputDigits, int outputBase)
    {
        if (inputBase <= 1)
        {
            throw new ArgumentException("Wrong input base");
        }

        if (outputBase <= 1)
        {
            throw new ArgumentException("Wrong output base");
        }

        if (inputDigits.Length == 0)
        {
            return [0];
        }

        int n = FromBase(inputDigits, inputBase);

        return ToBase(n, outputBase);
    }
}