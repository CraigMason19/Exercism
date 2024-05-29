using System;

string[] tests = {
    "test123",
    "@123",
    "(613)-995-0253",
    "613-995-0253",
    "1 613 995 0253",
    "613.995.0253",
};

foreach (string test in tests )
{
	try
	{
        Console.WriteLine($"{test} -> {PhoneNumber.Clean(test)}");
    }
    catch (Exception e)
	{
        Console.WriteLine($"{test}");
        Console.WriteLine($"{e.InnerException} {e.Message}");
    }
}