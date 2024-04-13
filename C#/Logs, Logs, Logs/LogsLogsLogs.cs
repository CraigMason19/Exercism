using System;
using System.Collections.Generic;

public enum LogLevel
{
    Trace,
    Debug,
    Info,
    Warning,
    Error,
    Fatal,
    Unknown,
}

public static class LogLine
{
    public static readonly Dictionary<LogLevel, int> LogLevelValues = new Dictionary<LogLevel, int>()
    {
        { LogLevel.Unknown, 0 },
        { LogLevel.Trace, 1 },
        { LogLevel.Debug, 2 },
        { LogLevel.Info, 4 },
        { LogLevel.Warning, 5 },
        { LogLevel.Error, 6 },
        { LogLevel.Fatal, 42 },
    };

    public static LogLevel ParseLogLevel(string logLine)
    {
        var a = logLine.IndexOf('[');
        var b = logLine.IndexOf(']');

        switch (logLine.Substring(a + 1, b - 1))
        {
            case "TRC":
                return LogLevel.Trace;
            case "DBG":
                return LogLevel.Debug;
            case "INF":
                return LogLevel.Info;
            case "WRN":
                return LogLevel.Warning;
            case "ERR":
                return LogLevel.Error;
            case "FTL":
                return LogLevel.Fatal;
            default:
                return LogLevel.Unknown;
        }
    }

    public static string OutputForShortLog(LogLevel logLevel, string message)
    {
        return $"{LogLevelValues[logLevel]}:{message}";
    }
}