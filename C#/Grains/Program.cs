using System;

for(int i = 1; i < 65; i++)
{
    Console.WriteLine($"{i} -> {Grains.Square(i)}");
}

Console.WriteLine($"Total -> {Grains.Total()}");
