using System;
using System.Text.RegularExpressions;
using System.Linq;

public static class LogLine
{
    public static string[] CleanStringArray(string s)
    {
        Regex rgx = new Regex("[^a-zA-Z0-9 -]");
        string clean = rgx.Replace(s, "");
        string[] arr = clean.Split();

        return arr;
    }

    public static string Message(string logLine)
    {
        string[] arr = CleanStringArray(logLine);
        string message = String.Join(" ", arr.Skip(1));
        return message.Trim();
    }

    public static string LogLevel(string logLine)
    {
        string[] arr = CleanStringArray(logLine);
        return arr[0].ToLower();
    }

    public static string Reformat(string logLine)
    {
        string[] arr = CleanStringArray(logLine);

        string message = String.Join(" ", arr.Skip(1));
        string errorLevel = arr.First();

        return $"{message.Trim()} ({errorLevel.ToLower()})";
    }
}
