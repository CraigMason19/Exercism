using System;
using System.Linq;
using System.Collections.Generic;

public static class Transpose
{
    static int LongestArray(string[] array)
    {
        return array.OrderByDescending(a => a.Length).First().Length;
    }

    static void TrimExcess(ref List<string> array)
    {
        while (array.Last() == null)
        {
            array.RemoveAt(array.Count - 1);
        }
    }

    public static string String(string input)
    {
        var array = input.Split('\n');
        var lines = new List<string>();

        for(int i = 0; i < LongestArray(array); i++)
        {
            List<string> line = new List<string>();

            for(int j = 0; j < array.Length; j++)
            {
                string? character = null;

                try
                {
                    character = array[j][i].ToString();
                }
                catch (IndexOutOfRangeException)
                {
                    character = null;
                }

                line.Add(character);
            }

            // Remove the trailing null characters, replace null characters inside the string with a space
            TrimExcess(ref line);
            var x = line.Select(v => v == null ? " " : v).ToArray();
            lines.Add(string.Join("", x));
        }

        return string.Join("\n", lines);
    }
}