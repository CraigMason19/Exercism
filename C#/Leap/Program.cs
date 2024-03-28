int[] years = [2015,
    1970,
    1800,
    2000,
    2024,
];

foreach (var year in years)
{
    Console.WriteLine($"{year} is leap year -> {Leap.IsLeapYear(year)}");
}