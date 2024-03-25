using System;

string[] triangles = ["345", "444", "230"];

foreach (var tri in triangles)
{
    double a = double.Parse(tri[0].ToString());
    double b = double.Parse(tri[1].ToString());
    double c = double.Parse(tri[2].ToString());

    Console.WriteLine(tri);
    Console.WriteLine($"isValid -> {Triangle.IsValid(a, b, c)}");
    Console.WriteLine($"isEquilateral -> {Triangle.IsEquilateral(a, b, c)}");
    Console.WriteLine($"isIsosceles -> {Triangle.IsIsosceles(a, b, c)}");
    Console.WriteLine($"isScalene -> {Triangle.IsScalene(a, b, c)}");
    Console.WriteLine("");
}