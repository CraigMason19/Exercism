var languages = new[] { "clojure", "elixir", "ecmascript", "rust", "java"};

var grid =
    "jefblpepre\n" +
    "camdcimgtc\n" +
    "oivokprjsm\n" +
    "pbwasqroua\n" +
    "rixilelhrs\n" +
    "wolcqlirpc\n" +
    "screeaumgr\n" +
    "alxhpburyi\n" +
    "jalaycalmp\n" +
    "clojurermt";

var ws = new WordSearch(grid);
Console.WriteLine(ws.grid.ToString());

Console.WriteLine("");

var result = ws.Search(languages);

foreach (var item in result)
{
    string valueString;

    if (item.Value.HasValue)
    {
        var ((x1, y1), (x2, y2)) = item.Value.Value;
        valueString = $"start:({x1}, {y1}), end:({x2}, {y2})";
    }
    else
    {
        valueString = "null";
    }

    Console.WriteLine($"{item.Key}: {valueString}");
}




