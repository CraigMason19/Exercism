string[] inputs = [
    "{[)][]}",
    "}{",
    "",
    "(((185 + 223.85) * 15) - 543)/2",
    "[ ]",
    "{{",
    "{{]}",
    "[]{}()",
];

foreach (var input in inputs)
{
    Console.WriteLine($"{input} -> Brackets match -> {MatchingBrackets.IsPaired(input)}");
}