var line = "[ERROR]: Segmentation fault";
var error = LogLine.LogLevel(line);
var message = LogLine.Message(line);
var reformatted = LogLine.Reformat(message);

Console.WriteLine($"{line}");
Console.WriteLine($"{error}");
Console.WriteLine($"{message}");
Console.WriteLine($"{reformatted}");