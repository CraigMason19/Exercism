var authenticator = new Authenticator();
var admin = authenticator.Admin;

Console.WriteLine(admin.Email);
Console.WriteLine(string.Join(", ", admin.NameAndAddress));

foreach(KeyValuePair<string, Identity> kvPair in authenticator.Developers)
{
    Console.WriteLine(kvPair);
}