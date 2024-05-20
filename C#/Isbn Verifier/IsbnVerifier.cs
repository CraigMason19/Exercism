using System;
using System.Linq;

public static class IsbnVerifier
{
    private static readonly string[] _stringDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    public static bool IsValid(string number)
    {
        // Process input
        var cleanDigits = number.Replace("-", "").Select(c => c.ToString()).ToArray();

        if (cleanDigits.Length != 10)
        {
            return false;
        }

        // Replace last element if it is 'X'
        cleanDigits[cleanDigits.Length - 1] = cleanDigits.Last() == "X" ? "10" : cleanDigits.Last();

        // ISBM Verification
        var digits = cleanDigits
            .Where(c => _stringDigits.Contains(c) || c == "10")
            .Select(c => Convert.ToInt32(c))
            .ToArray();

        if (digits.Length != 10)
        {
            return false;
        }

        var result = 0;

        for (var i = 0; i < 10; i++)
        {
            result += (10 - i) * digits[i];
        }

        return result % 11 == 0;
    }
}