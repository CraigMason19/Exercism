using System;
using System.Collections.Generic;

public enum Plant
{
    Violets,
    Radishes,
    Clover,
    Grass
}

public static class PlantExtensions
{
    public static Plant ToPlant(this char plantCode)
    {
        return plantCode switch
        {
            'V' => Plant.Violets,
            'R' => Plant.Radishes,
            'C' => Plant.Clover,
            'G' => Plant.Grass,
            _ => throw new ArgumentException($"Invalid plant code: {plantCode}")
        };
    }
}

public class KindergartenGarden
{
    public static readonly List<string> DEFAULT_STUDENTS = new List<string>() {
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Eve",
        "Fred",
        "Ginny",
        "Harriet",
        "Ileana",
        "Joseph",
        "Kincaid",
        "Larry",
    };

    public string[] rows { get; }

    public KindergartenGarden(string diagram)
    {
        this.rows = diagram.Split("\n");
    }

    public IEnumerable<Plant> Plants(string student)
    {
        int index = DEFAULT_STUDENTS.IndexOf(student) * 2;

        var plants = new List<Plant>
        {
            this.rows[0][index].ToPlant(),
            this.rows[0][index+1].ToPlant(),
            this.rows[1][index].ToPlant(),
            this.rows[1][index+1].ToPlant(),
        };
        
        return plants;
    }
}