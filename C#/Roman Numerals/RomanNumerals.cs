using System;
using System.Collections.Generic;

public static class RomanNumeralExtension
{
    private static Dictionary<string, int> NumeralValues = new Dictionary<string, int>()
    {
        { "I", 1 },
        { "V", 5 },
        { "X", 10 },
        { "L", 50 },
        { "C", 100 },
        { "D", 500 },
        { "M", 1000 }
    };

    private static string Pad(string str, int length, char paddingChar)
    {
        return str + new string(paddingChar, Math.Max(0, length - str.Length));
    }

    private static string[] ExtractMagnitudeParts(string s, int length)
    {
        string[] result = new string[length];

        for (int i = 0; i < length; i++)
        {
            result[i] = Pad(s[i].ToString(), length - i, '0');
        }

        return result;
    }

    // Works bellow 5000 (V with overscore).
    public static string ToRoman(this int value)
    {
        string s = value.ToString();
        int length = s.Length;

        // Determine digits, tens, hundreds, thousands
        // e.g. 1600 -> ["1000", "600", "00", "0"]
        string[] l = ExtractMagnitudeParts(s, length);
        string numeral = "";

        foreach (string item in l)
        {
            if (item[0] != '0')
            {
                int itemLength = item.Length;
                string small = "";
                string mid = "";
                string big = "";

                if (itemLength == 1)
                {
                    small = "I"; mid = "V"; big = "X";
                }
                else if (itemLength == 2)
                {
                    small = "X"; mid = "L"; big = "C";
                }
                else if (itemLength == 3)
                {
                    small = "C"; mid = "D"; big = "M";
                }
                else if (itemLength == 4)
                {
                    numeral += new string('M', int.Parse(item[0].ToString()));
                    continue;
                }

                int n = int.Parse(item[0].ToString());

                numeral += n switch
                {
                    1 => small,
                    2 => small + small,
                    3 => small + small + small,
                    4 => small + mid,
                    5 => mid,
                    6 => mid + small,
                    7 => mid + small + small,
                    8 => mid + small + small + small,
                    9 => small + big,
                    _ => throw new ArgumentException("Invalid Roman numeral value.")
                };
            }
        }

        return numeral.ToString();
    }
}