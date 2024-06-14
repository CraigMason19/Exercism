using System;

var keepFirstAndLast = Strain.Keep([1, 2, 3], (x) => x % 2 == 1);
Console.WriteLine(string.Join(", ", keepFirstAndLast)); // [1, 3]

var discardFirstAndLast = Strain.Discard([1, 2, 3], (x) => x % 2 == 1);
Console.WriteLine(string.Join(", ", discardFirstAndLast)); // [2]