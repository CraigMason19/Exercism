using System.Collections.Generic;

var players = new Dictionary<string, DndCharacter>
{
    { "Ulrika", DndCharacter.Generate() },
    { "Snori Nosebiter", DndCharacter.Generate() },
    { "Felix Jaeger", DndCharacter.Generate() },
};

foreach (var p in players)
{
    Console.WriteLine(p.Key);
    Console.WriteLine(p.Value);
    Console.WriteLine("\n");
}