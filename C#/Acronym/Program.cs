string[] phrases = [
    "As Soon As Possible",
    "Liquid-crystal display",
    "Thank George It's Friday!",
    "Something - I made up from thin air",
    "Halley's Comet",
];

foreach (string phrase in phrases)
{
    Console.WriteLine($"{phrase} -> {Acronym.Abbreviate(phrase)}");
}