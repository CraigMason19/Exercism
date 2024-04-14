var scores = new HighScores([30, 50, 80, 100, 20, 10, 40]);

Console.WriteLine(scores.Scores());
Console.WriteLine(scores.Latest());
Console.WriteLine(scores.PersonalBest());
Console.WriteLine(string.Join(" ", scores.PersonalTopThree()));