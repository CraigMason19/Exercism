using System;

var numbers = new int[] {28, 30, 34};

foreach(var n in numbers)
{
    Console.WriteLine($"{n} -> {Raindrops.Convert(n)}");
}