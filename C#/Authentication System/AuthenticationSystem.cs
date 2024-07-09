using System.Collections.Generic;
using System.Collections.ObjectModel;

public class Authenticator
{
    private class EyeColor
    {
        public const string Blue = "blue";
        public const string Green = "green";
        public const string Brown = "brown";
        public const string Hazel = "hazel";
        public const string Grey = "grey";
    }

    private Identity admin;

    public Identity Admin
    {
        get { return admin; }
        set { admin = value; }
    }

    private readonly IDictionary<string, Identity> developers;

    public Authenticator(Identity admin)
    {
        this.admin = admin;

        // Initialize the mutable dictionary
        var mutableDevelopers = new Dictionary<string, Identity>
        {
            ["Bertrand"] = new Identity
            {
                Email = "bert@ex.ism",
                EyeColor = EyeColor.Blue
            },
            ["Anders"] = new Identity
            {
                Email = "anders@ex.ism",
                EyeColor = EyeColor.Brown
            }
        };

        developers = new ReadOnlyDictionary<string, Identity>(mutableDevelopers);
    }

    public IDictionary<string, Identity> GetDevelopers() => developers;
}

public struct Identity
{
    public string Email { get; set; }

    public string EyeColor { get; set; }
}
