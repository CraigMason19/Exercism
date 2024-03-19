string[] words = ["lumberjacks",
    "background",
    "downstream",
    "six-year-old",
    "alphAbet",
    "Alphabet",
    ];

foreach ( var word in words )
{
    Console.WriteLine($"{word}: {Isogram.IsIsogram(word)}");
}