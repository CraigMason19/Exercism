Console.WriteLine(PlayAnalyzer.AnalyzeOnField(1));
Console.WriteLine(PlayAnalyzer.AnalyzeOnField(7));

Console.WriteLine(PlayAnalyzer.AnalyzeOffField(76_000));
Console.WriteLine(PlayAnalyzer.AnalyzeOffField("5 minutes to go!"));

Console.WriteLine(PlayAnalyzer.AnalyzeOffField(new Incident()));
Console.WriteLine(PlayAnalyzer.AnalyzeOffField(new Foul()));
Console.WriteLine(PlayAnalyzer.AnalyzeOffField(new Injury(8)));

Console.WriteLine(PlayAnalyzer.AnalyzeOffField(new Manager("José Mário dos Santos Mourinho Félix", null)));
Console.WriteLine(PlayAnalyzer.AnalyzeOffField(new Manager("Jürgen Klopp", "Liverpool")));