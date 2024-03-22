string[] numbers = [
    "4539 3195 0343 6467",
    "8273 1232 7352 0569",
    ];

foreach (var number in numbers)
{
    Console.WriteLine($"{number} Is Valid == {Luhn.IsValid(number)}");
}

