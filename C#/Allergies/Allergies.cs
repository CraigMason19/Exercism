using System;
using System.Collections.Generic;

public enum Allergen
{
    Eggs = 1,
    Peanuts = 2,
    Shellfish = 4,
    Strawberries = 8,
    Tomatoes = 16,
    Chocolate = 32,
    Pollen = 64,
    Cats = 128,
}

public class Allergies
{
    List<Allergen> _allergies = new List<Allergen>();

    public Allergies(int mask)
    {
        _allergies = Enum.GetValues(typeof(Allergen))
                         .Cast<Allergen>()
                         .Where(x => ((int)x & mask) != 0)
                         .ToList();

        //foreach (var allegen in Enum.GetValues(typeof(Allergen)))
        //{
        //    var result = (mask & (int)allegen);

        //    if (result != 0)
        //    {
        //        _allergies.Add((Allergen)allegen);
        //    }
        //}
    }

    public bool IsAllergicTo(Allergen allergen) => _allergies.Contains(allergen);

    public Allergen[] List() => _allergies.ToArray();
}