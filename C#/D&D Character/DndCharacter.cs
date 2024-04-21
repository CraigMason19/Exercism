using System;
using System.Collections.Generic;
using System.Linq;

public static class Dice
{
    private static Random _rnd = new Random();

    public static int RollDice()
    {
        return _rnd.Next(1, 7);
    }

    public static List<int> DicePool(int numDice)
    {
        var dice = new List<int>();

        for (int i = 1; i <= numDice; i++)
        {
            dice.Add(RollDice());
        }

        return dice;
    }
}

public class DndCharacter
{
    public int Strength { get; }
    public int Dexterity { get; }
    public int Constitution { get; }
    public int Intelligence { get; }
    public int Wisdom { get; }
    public int Charisma { get; }
    public int Hitpoints { get; }

    public DndCharacter()
    {
        this.Strength = Ability();
        this.Dexterity = Ability();
        this.Constitution = Ability();
        this.Intelligence = Ability();
        this.Wisdom = Ability();
        this.Charisma = Ability();
        this.Hitpoints = 10 + Modifier(this.Constitution);
    }

    public static int Modifier(int score)
    {
        if (score < 3)
        {
            throw new ArgumentException("Ability scores must be at least 3");
        }

        else if (score > 18)
        {
            throw new ArgumentException("Ability scores can be at most 18");
        }

        return (int)Math.Floor((double)(score - 10) / 2);
    }

    public static int Ability()
    {
        var dice = Dice.DicePool(4).OrderByDescending(d => d).ToList();
        dice.RemoveAt(dice.Count - 1);
        return dice.Sum();
    }

    public static DndCharacter Generate()
    {
        return new DndCharacter();
    }

    public override string ToString()
    {
        string output = "";

        output += $"Strength:     {this.Strength,2}\n";
        output += $"Dexterity:    {this.Dexterity,2}\n";
        output += $"Constitution: {this.Constitution,2}\n";
        output += $"Intelligence: {this.Intelligence,2}\n";
        output += $"Wisdom:       {this.Wisdom,2}\n";
        output += $"Charisma:     {this.Charisma,2}\n";
        output += $"Hitpoints:    {this.Hitpoints,2}\n";

        return output;
    }
}