string[] words = ["cabbage",
    "OxyphenButazone",
];

foreach (string word in words)
{
    Console.WriteLine($"{word} -> {ScrabbleScore.Score(word)}");
}