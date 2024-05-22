using System;
using System.Collections.Generic;
using System.Linq;

public struct Coord
{
    public Coord(ushort x, ushort y)
    {
        X = x;
        Y = y;
    }

    public ushort X { get; }

    public ushort Y { get; }

    public static bool operator ==(Coord a, Coord b)
    {
        return a.X == b.X && a.Y == b.Y;
    }

    public static bool operator !=(Coord a, Coord b)
    {
        return !(a == b);
    }

    public override bool Equals(object obj)
    {
        if (obj is Coord other)
        {
            return this == other;
        }

        return false;
    }

    public override int GetHashCode()
    {
        return HashCode.Combine(X, Y);
    }
}

public struct Plot
{
    private Coord a;
    private Coord b;
    private Coord c;
    private Coord d;

    public Plot(Coord a, Coord b, Coord c, Coord d)
    {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    public ushort LargestSide()
    {
        ushort max = 0;

        foreach(var coord in new Coord[] {a,b,c,d})
        {
            max = coord.X > max ? coord.X : max;
            max = coord.Y > max ? coord.Y : max;
        }

        return max;
    }

    public override bool Equals(object obj)
    {
        if (obj is Plot other)
        {
            return a == other.a && b == other.b && c == other.c && d == other.d;
        }

        return false;
    }

    public override int GetHashCode()
    {
        return HashCode.Combine(a, b, c, d);
    }
}

public class ClaimsHandler
{
    List<Plot> _plots = new List<Plot>();

    public void StakeClaim(Plot plot)
    {
        _plots.Add(plot);
    }

    public bool IsClaimStaked(Plot plot)
    {
        return _plots.Contains(plot);
    }

    public bool IsLastClaim(Plot plot)
    {
        return _plots.Last().Equals(plot);
    }

    public Plot GetClaimWithLongestSide()
    {
        return _plots.OrderByDescending(plot => plot.LargestSide()).FirstOrDefault();
    }
}
