using System;

public class Player
{
    public int RollDie()
    {
        var r = new System.Random();
        return r.Next(1, 18 + 1);
    }

    public double GenerateSpellStrength()
    {
        var r = new System.Random();
        return r.NextDouble() * 5;
    }
}