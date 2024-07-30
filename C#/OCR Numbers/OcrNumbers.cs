using System;
using System.Collections.Generic;
using System.Linq;

public static class Glyphs
{
    public readonly static Dictionary<string, string> Dictionary = new Dictionary<string, string>
    {
        { " _ | ||_|", "0" },
        { "     |  |", "1" },
        { " _  _||_ ", "2" },
        { " _  _| _|", "3" },
        { "   |_|  |", "4" },
        { " _ |_  _|", "5" },
        { " _ |_ |_|", "6" },
        { " _   |  |", "7" },
        { " _ |_||_|", "8" },
        { " _ |_| _|", "9" },
    };
}

public static class OcrNumbers
{
    private static List<string> MergeEveryThirdRow(List<string> strArr) 
    {
        for(int i = 1; i < strArr.Count / 3; i++) 
        {
            int startIndex = i * 3;

            strArr[0] += strArr[startIndex];
            strArr[1] += strArr[startIndex + 1];
            strArr[2] += strArr[startIndex + 2];
        }

        return strArr.Take(3).ToList();
    }

    public static string Convert(string input)
    {
        var lines = new List<string>(input.Split("\n"));

        if(lines.Count % 4 != 0 || lines.Any(x => x.Length % 3 != 0))
        {
            throw new ArgumentException();
        }

        // Remove every 4th line, if contains multiple lines then merge together into just 3 rows
        lines = lines.Where((line, index) => (index + 1) % 4 != 0).ToList();
        bool multipleLines = (lines.Count > 3);

        if (multipleLines)
        {
            lines = MergeEveryThirdRow(lines);
        }

        // Process the glyphs in each 3 rows, 1 by 1 
        string result = "";

        for (int i = 0; i < lines[0].Length / 3; i++)
        {
            var glyph = "";

            foreach(var line in lines)
            {
                int startIndex = i * 3;
                glyph += line.Substring(startIndex, 3);
            }

            result += Glyphs.Dictionary.GetValueOrDefault(glyph, "?");
        }

        return multipleLines ? decimal.Parse(result).ToString("N0") : result;
    }
}