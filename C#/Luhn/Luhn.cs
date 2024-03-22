using System;
using System.Collections.Generic;
using System.Linq;

public static class Luhn
{
    public static int SumOfDigits(string digitsStr)
    {
        var sum = 0;

        foreach (char digit in digitsStr) 
        {
            sum += (int)Char.GetNumericValue(digit);
        }

        return sum;
    }

    public static char GetLastDigit(int number)
    {
        return number.ToString().Last();
    }

    public static string Reverse(string s)
    {
        char[] charArray = s.ToCharArray();
        Array.Reverse(charArray);
        return new string(charArray);
    }

    public static bool IsValid(string number)
    {
        var whitespaceRemoved = number.Where(c => c != ' ');
        var cleanNumber = whitespaceRemoved.Where(char.IsNumber);

        if (cleanNumber.Count() <= 1 || !whitespaceRemoved.All(char.IsDigit))
        {
            return false;
        }

        string modifiedNumber = "";
        int index = 0;
 
        foreach (char digit in cleanNumber.Reverse())
        {
            if (index % 2 == 0)
            {
                modifiedNumber += digit;
            }
            else
            {
                var result = Int32.Parse(digit.ToString()) * 2;
                if(result > 9) 
                {
                    result -= 9;
                }
                modifiedNumber += GetLastDigit(result );
            }

            index++;
        }

        int digitSum = SumOfDigits(Reverse(modifiedNumber));

        return digitSum % 10 == 0;
    }
}