var level = LogLine.ParseLogLevel("[INF]: File deleted");
Console.WriteLine(level);

level = LogLine.ParseLogLevel("[XYZ]: Gibberish message.. beep boop..");
Console.WriteLine(level);

var shortMessage = LogLine.OutputForShortLog(LogLevel.Error, "Stack Overflow");
Console.WriteLine(shortMessage);