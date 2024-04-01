using System;

public static class LogAnalysis
{
    public static string SubstringAfter(this string str, string start)
    {
        int location = str.IndexOf(start);

        return str.Substring(location + start.Length);
    }

    public static string SubstringBetween(this string str, string start, string end)
    {
        int[] locations = { str.IndexOf(start), str.IndexOf(end) };

        string subStr = str.Substring(locations[0] + start.Length, locations[1] - locations[0] - start.Length);
        return subStr;
    }

    public static string Message(this string str)
    {
        string[] parts = str.Split(": ");
        return parts[1];
    }

    public static string LogLevel(this string str)
    {
        string output = "";
        int index = 1;

        while (str[index] != ']') 
        {
            output += str[index++];
        }

        return output;
    }
}