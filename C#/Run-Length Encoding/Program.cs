using System.Text;

string[] plainStrings = [
    "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB",
    "  hsqq qww  ",
    "AABCCCDEEEE",
    ];

foreach( string s in plainStrings)
{
    Console.WriteLine($"\nOriginal:{s}");

    var encoded = RunLengthEncoding.Encode(s);
    var decoded = RunLengthEncoding.Decode(encoded);

    Console.WriteLine($"encoded:{encoded}");
    Console.WriteLine($"decoded:{decoded}");
}