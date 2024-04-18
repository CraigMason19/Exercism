using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Linq;

public record Team
{
    public int MatchesPlayed { get; set; }
    public int Wins { get; set; }
    public int Draws { get; set; }
    public int Losses { get; set; }
    public int Points { get; set; }
}

public static class Tournament
{
    private static Dictionary<string, Team>? _table;

    public static void ConstructTable(string[] results)
    {
        _table = new Dictionary<string, Team>();

        foreach (var result in results)
        {
            var data = result.Split(";");
            _table.TryAdd(data[0], new Team());
            _table.TryAdd(data[1], new Team());
        }
    }

    public static void UpdateTable(string[] results)
    {
        foreach (var result in results)
        {
            var data = result.Split(";");

            _table[data[0]].MatchesPlayed++;
            _table[data[1]].MatchesPlayed++;

            switch (data[2])
            {
                case "win":
                    _table[data[0]].Wins++;
                    _table[data[1]].Losses++;

                    _table[data[0]].Points += 3;
                    break;
                case "loss":
                    _table[data[0]].Losses++;
                    _table[data[1]].Wins++;

                    _table[data[1]].Points += 3;
                    break;
                case "draw":
                    _table[data[0]].Draws++;
                    _table[data[1]].Draws++;

                    _table[data[0]].Points++;
                    _table[data[1]].Points++;
                    break;
            }
        }
    }

    static string StringifyTable()
    {
        var output = new List<string>();
        output.Add("Team                           | MP |  W |  D |  L |  P");

        foreach (KeyValuePair<string, Team> team in _table.OrderByDescending(i => i.Value.Points).ThenBy(i => i.Key))
        {
            var row = $"{team.Key,-31}|  {team.Value.MatchesPlayed} |  {team.Value.Wins} |  {team.Value.Draws} |  {team.Value.Losses} |{team.Value.Points,3}";
            output.Add(row);
        }

        return string.Join("\n", output);
    }

    public static void Tally(Stream inStream, Stream outStream)
    {
        var results = new List<string>();

        using (var reader = new StreamReader(inStream))

        {
            results = reader.ReadToEnd()
                              .Split(new[] { "\n" }, StringSplitOptions.RemoveEmptyEntries)
                              .Select(line => line.Trim())
                              .ToList();
        }

        ConstructTable(results.ToArray());
        UpdateTable(results.ToArray());

        using (var writer = new StreamWriter(outStream))
        {
            writer.NewLine = "\n";

            writer.Write(StringifyTable());
            writer.Flush();
        }
    }
}