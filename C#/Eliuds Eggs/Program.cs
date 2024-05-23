using System;
using System.Collections.Generic;

var displayValues = new List<int>()
{
    0,
    1,
    4,
    16,
    13,
    89,
    2_000_000_000,
};

foreach (int value in displayValues)
{
    Console.WriteLine($"Value: { value}");
    Console.WriteLine($"\tBinary: { EliudsEggs.ToBinary(value)}");
    Console.WriteLine($"\tEgg Count: {EliudsEggs.EggCount(value)}");
}