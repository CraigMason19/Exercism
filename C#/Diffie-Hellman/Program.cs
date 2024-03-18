using System.Numerics;

var p = new BigInteger(23);
var g = new BigInteger(5);

var alicePrivateKey = DiffieHellman.PrivateKey(p);
var bobPrivateKey = DiffieHellman.PrivateKey(p);

var alicePublicKey = DiffieHellman.PublicKey(p, g, alicePrivateKey);
var bobPublicKey = DiffieHellman.PublicKey(p, g, bobPrivateKey);

var secretA = DiffieHellman.Secret(p, bobPublicKey, alicePrivateKey);
var secretB = DiffieHellman.Secret(p, alicePublicKey, bobPrivateKey);

Console.WriteLine($"p={p} g={g}\n");

Console.WriteLine("Alice");
Console.WriteLine($"\tprivate:{alicePrivateKey} public:{alicePublicKey} secret:{secretA}");

Console.WriteLine("Bob");
Console.WriteLine($"\tprivate:{bobPrivateKey} public:{bobPublicKey} secret:{secretB}");