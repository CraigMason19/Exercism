using System;

int n = 20;
var triangle = PascalsTriangle.Calculate(n);

Console.WriteLine(n.ToString() + " rows");

foreach (var row in triangle)
{
    Console.WriteLine(string.Join(" ", row));
}