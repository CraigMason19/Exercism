using System;

var values = Enumerable.Range(1, 5).ToArray();
var list = new LinkedList<int>(values);

Console.WriteLine($"[{string.Join(", ", list.ToArray())}]");
Console.WriteLine($"[{string.Join(", ", list.Reverse().ToArray())}]");