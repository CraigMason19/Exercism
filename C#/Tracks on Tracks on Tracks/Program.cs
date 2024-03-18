var languages = Languages.GetExistingLanguages();

Console.WriteLine("[{0}]", string.Join(", ", languages));
Console.WriteLine(Languages.IsUnique(languages));


