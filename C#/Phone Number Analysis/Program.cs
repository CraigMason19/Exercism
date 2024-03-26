string[] numbers = ["212-555-1234",
    "555-123-6789",
];

foreach(string number in numbers)
{
    Console.WriteLine($"{number} -> {PhoneNumber.Analyze(number)}");
}