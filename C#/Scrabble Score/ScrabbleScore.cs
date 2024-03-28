using System;
using System.Collections.Generic;

public static class ScrabbleScore
{
    static Dictionary<int, string[]> _points = new Dictionary<int, string[]>
    {
        { 1, ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"] },
        { 2, ["D", "G"] },
        { 3, ["B", "C", "M", "P"] },
        { 4, ["F", "H", "V", "W", "Y"] },
        { 5, ["K"] },
        { 8, ["J", "X"] },
        { 10, ["Q", "Z"] },
    };

    public static Dictionary<string, int> Transform(Dictionary<int, string[]> old)
    {
        var manyToOne = new Dictionary<string, int>();

        foreach (var item in old)
        {
            foreach (var letter in item.Value)
            {
                manyToOne[letter.ToLower()] = item.Key;
            }
        }

        return manyToOne;
    }

    public static int Score(string input)
    {
        int sum = 0;
        var d = Transform(_points);

        foreach(var c in input)
        {
            sum += d[c.ToString().ToLower()];
        }

        return sum;
    }
}