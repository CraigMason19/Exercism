var person = new Allergies(9);

Console.WriteLine(person); 
Console.WriteLine(string.Join(", ", person.List()));

Console.WriteLine($"Is allergic to Eggs: {person.IsAllergicTo(Allergen.Eggs)}");
Console.WriteLine($"Is allergic to ShellFish: {person.IsAllergicTo(Allergen.Shellfish)}");