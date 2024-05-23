using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.Linq;

public static class WordCount
{
    public static string RemovePunctuation(string str)
    {
        string[] punctuation = [".", "\n", "?", ":", ",", "!", "&", "@", "$", "%", "^", "&"];

        foreach(var c in punctuation)
        { 
            str = str.Replace(c, " ");
        };

        return str;
    }

    public static string Clean(string str)
    { 
        // Remove leading and trailing quotes if present
        str = Regex.Replace(str, @"^['""]|['""]$", "");

        return str.ToLower().Trim();
    }

    public static IDictionary<string, int> CountWords(string phrase)
    {
        var d = new Dictionary<string, int>();

        var words = RemovePunctuation(phrase).Split(" ")
                    .Select(x => Clean(x))
                    .Where(x => x != "") 
                    .ToArray();

        foreach (var word in words)
        {
            if (d.ContainsKey(word))
            {
                d[word] += 1;
            }
            else
            {
                d[word] = 1;
            }
        }

        return d;
    }
}