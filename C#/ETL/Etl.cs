using System;
using System.Collections.Generic;

public static class Etl
{
    public static Dictionary<string, int> Transform(Dictionary<int, string[]> old)
    {
        var manyToOne = new Dictionary<string, int>();

        foreach(var item in old)
        {
            foreach(var letter in item.Value)
            {
                manyToOne[letter.ToLower()] = item.Key;
            }
        }

        return manyToOne;
    }
}