using System;
using System.Collections.Generic;

public static class Strain
{
    public static IEnumerable<T> Keep<T>(this IEnumerable<T> collection, Func<T, bool> predicate)
    { 
        var kept = new List<T>();

        foreach(var item in collection) {
            if (predicate(item)) {
                kept.Add(item);
            }
        }

        return kept;
    }

    public static IEnumerable<T> Discard<T>(this IEnumerable<T> collection, Func<T, bool> predicate)
    {
        var kept = new List<T>();

        foreach (var item in collection)
        {
            if (!predicate(item))
            {
                kept.Add(item);
            }
        }

        return kept;
    }
}