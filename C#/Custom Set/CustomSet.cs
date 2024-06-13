using System;
using System.Collections.Generic;
using System.Linq;

public static class SetHelper
{
    public static int[] Uniqueify(int[] arr)
    {
        List<int> uniqueList = new List<int>();

        foreach (int value in arr)
        {
            if (!uniqueList.Contains(value))
            {
                uniqueList.Add(value);
            }
        }

        return uniqueList.ToArray();
    }

    public static bool ListsAreEqual<T>(List<T> list1, List<T> list2)
    {
        if (ReferenceEquals(list1, list2))
        {
            return true;
        }

        if (list1 == null || list2 == null)
        {
            return false;
        }

        list1.Sort();
        list2.Sort();

        return list1.Count == list2.Count && list1.SequenceEqual(list2);
    }
}

/// <summary>
/// Deliberately not using a HashSet for learning purposes.
/// </summary>
public class CustomSet
{
    public readonly List<int> Data;

    public CustomSet(params int[] values)
    {
        this.Data = SetHelper.Uniqueify(values).ToList();
    }

    public override bool Equals(Object obj)
    {
        if (obj == null || !(obj is CustomSet))
            return false;
        else
            return SetHelper.ListsAreEqual(this.Data, ((CustomSet)obj).Data);
    }

    public override int GetHashCode() => this.Data.GetHashCode();

    public bool Empty() => this.Data.Count == 0;

    public bool Contains(int value) => this.Data.Contains(value);

    public CustomSet Add(int value)
    {
        if (!this.Data.Contains(value))
        {
            this.Data.Add(value);
        }

        return new CustomSet(this.Data.ToArray());
    }

    public bool Subset(CustomSet right)
    {
        foreach(var element in this.Data)
        {
            if(!right.Contains(element))
            {
                return false;
            }
        }

        return true;
    }

    public bool Disjoint(CustomSet right)
    {
        return this.Intersection(right).Data.Count == 0;
    }

    public CustomSet Intersection(CustomSet right)
    {
        var data = this.Data.Where(element => right.Contains(element) == true);

        return new CustomSet(data.Order().ToArray());
    }

    public CustomSet Difference(CustomSet right)
    {
        var data = this.Data.Where(element => right.Contains(element) == false);

        return new CustomSet(data.Order().ToArray());
    }

    public CustomSet Union(CustomSet right)
    {
        var unique = SetHelper.Uniqueify(this.Data.Concat(right.Data).ToArray());

        return new CustomSet(unique.Order().ToArray());
    }

    public override string ToString()
    {
        return $"CustomSet([{string.Join(", ", this.Data.ToArray())}])";
    }
}