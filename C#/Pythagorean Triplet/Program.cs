int[] perimeters = [12,
    108,
    1000,
    90,
    1001,
];

foreach (var perimeter in perimeters)
{
    var values = PythagoreanTriplet.TripletsWithSum(perimeter);

    foreach (var value in values)
    {
        Console.WriteLine($"perimeter:{perimeter} -> a:{value.a} + b:{value.b} = c:{value.c}");
    }
}