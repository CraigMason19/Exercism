var lines = "A Long Line\n" + "A Line\n";

var t = Transpose.String(lines).Replace("\n", string.Empty);
Console.WriteLine(t);