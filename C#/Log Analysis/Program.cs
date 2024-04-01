var text = "I am the 1st test";
Console.WriteLine(text.SubstringAfter("I"));

var log = "FIND >>> SOMETHING <===< HERE";
Console.WriteLine(log.SubstringBetween(">>> ", " <===<"));

log = "[WARNING]: Library is deprecated.";
Console.WriteLine(log.Message());


log = "[ERROR]: Will go Bang soon!";
Console.WriteLine(log.LogLevel());