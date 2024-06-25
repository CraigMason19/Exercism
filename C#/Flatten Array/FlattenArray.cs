using System;
using System.Collections;

public static class FlattenArray
{
    public static IEnumerable Flatten(IEnumerable input)
    {
        foreach (var element in input)
        {
            if (element is IEnumerable nested)
            {
                foreach (var nestedElement in Flatten(nested))
                {
                    yield return nestedElement;
                }
            }
            else
            {
                if (element != null)
                {
                    yield return element;
                }
            }
        }
    }
}