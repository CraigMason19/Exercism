using System;

long[] numbers = new long[] {
    27,
    625,
    901255,
    93819012551,
};

foreach (var number in numbers)
{
    var factors = PrimeFactors.Factors(number);
    Console.WriteLine($"{number} => [{string.Join(", ", factors)}]");
}