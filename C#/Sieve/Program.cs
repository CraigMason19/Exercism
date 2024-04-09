const int LIMIT = 1001;
var primes = Sieve.Primes(LIMIT);

Console.WriteLine($"Primes below {LIMIT}: {primes.Count()}");
Console.WriteLine(string.Join(", ", primes));