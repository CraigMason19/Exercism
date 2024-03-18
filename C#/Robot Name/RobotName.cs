using System;
using System.Collections.Generic;

public class Helper
{
    public static char RandomLetter()
    {
        string alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        Random rnd = new Random();
        int index = rnd.Next(0, alphabet.Length);
        return alphabet[index];
    }

    public static int RandomNumber() 
    {
        Random rnd = new Random();
        return rnd.Next(1, 10);
    }
}

public class Robot
{
    protected static HashSet<string> _usedNames = new HashSet<string>();

    string _name = "UNDEFINED";
    public string Name
    {
        get
        {
            return _name;
        }
    }

    private static string GenerateName()
    {
        while (true)
        {
            var name = $"{Helper.RandomLetter()}{Helper.RandomLetter()}{Helper.RandomNumber()}{Helper.RandomNumber()}{Helper.RandomNumber()}";
        
            if(!_usedNames.Contains(name))
            {
                _usedNames.Add(name);
                return name;
            }
        }
    }

    public Robot()
    {
        _name = GenerateName();
    }

    public void Reset()
    {
        _name = GenerateName();
    }
}