var numbers = new[] {
    9,
    10,
    153,
    154,
    9926314,
};

foreach(var n in numbers)
{
    Console.WriteLine($"{n} -> {ArmstrongNumbers.IsArmstrongNumber(n)}");
}