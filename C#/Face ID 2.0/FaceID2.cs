using System;
using System.Collections.Generic;

public class FacialFeatures
{
    public string EyeColor { get; }
    public decimal PhiltrumWidth { get; }

    public FacialFeatures(string eyeColor, decimal philtrumWidth)
    {
        EyeColor = eyeColor;
        PhiltrumWidth = philtrumWidth;
    }

    public override bool Equals(object obj)
    {
        if (obj is FacialFeatures other)
        {
            if (EyeColor == other.EyeColor && PhiltrumWidth == other.PhiltrumWidth)
            {
                return true;
            }
        }

        return false;
    }

    public override int GetHashCode()
    {
        return EyeColor.GetHashCode() ^ PhiltrumWidth.GetHashCode();
    }
}

public class Identity
{
    public string Email { get; }
    public FacialFeatures FacialFeatures { get; }

    public Identity(string email, FacialFeatures facialFeatures)
    {
        Email = email;
        FacialFeatures = facialFeatures;
    }
    public override bool Equals(object obj)
    {
        if (obj is Identity other)
        {
            if (Email == other.Email && FacialFeatures.Equals(other.FacialFeatures))
            {
                return true;
            }
        }

        return false;
    }

    public override int GetHashCode()
    {
        return Email.GetHashCode() ^ FacialFeatures.GetHashCode();
    }
}

public class Authenticator
{
    private HashSet<Identity> _identities = new HashSet<Identity>();

    public static bool AreSameFace(FacialFeatures faceA, FacialFeatures faceB)
    {
        return faceA.Equals(faceB);
    }

    public bool IsAdmin(Identity identity)
    {
        var admin = new Identity("admin@exerc.ism", new FacialFeatures("green", 0.9m));
        return identity.Equals(admin);
    }

    public bool Register(Identity identity)
    {
        var result = _identities.Add(identity);
        return result;
    }

    public bool IsRegistered(Identity identity)
    {
        return _identities.Contains(identity);
    }

    public static bool AreSameObject(Identity identityA, Identity identityB)
    {
        return object.ReferenceEquals(identityA, identityB);
    }
}