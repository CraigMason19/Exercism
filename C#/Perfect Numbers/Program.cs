int[] numbers = [
    28,
    12,
    33550335,
    32,
];

foreach (var number in numbers)
{
    Console.WriteLine($"{number} -> {PerfectNumbers.Classify(number)}");
}