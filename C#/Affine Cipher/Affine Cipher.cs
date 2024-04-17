using System;
using System.Linq;

public static class AffineCipher
{
    static readonly string _punctuation = ". ,-_;:";

    static int IndexFromLetter(char letter)
    {
        return char.ToLower(letter) - 97;
    }

    static char LetterFromIndex(int index)
    {
        // C# modulus operate doesn't work for negative numbers
        // e.g. -9 % 26 = -9 -> default C#
        //      -9 % 26 = 17 -> What is wanted
        int i = ((index % 26) + 26) % 26;

        return "abcdefghijklmnopqrstuvwxyz"[i];
    }

    public static string BlockFormat(string s, int blockSize = 5)
    {
        int seperatorCounter = 0;
        string formatted = "";

        for (int i = 0; i < s.Length; i++)
        {
            formatted += s[i];
            seperatorCounter++;

            if (seperatorCounter == blockSize)
            {
                formatted += " ";
                seperatorCounter = 0;
            }
        }

        // Just in case it was exactly divisible by 5 and had an extra space put on the end
        return formatted.TrimEnd();
    }

    // Modular Multiplicative Inverse
    static int MMI(int n)
    {
        int x = 1;

        while ((n * x) % 26 != 1)
        {
            x++;
        };

        return x;
    }

    // Co-Prime OR relatively prime
    static bool AreCoPrime(int a, int b)
    {
        int smallest = a > b ? a : b;

        for (int i = 2; i < smallest; i++)
        {
            bool condition1 = a % i == 0;
            bool condition2 = b % i == 0;

            if (condition1 && condition2)
            {
                return false;
            };
        };

        return true;
    }

    public static char EncodeLetter(char letter, int a, int b)
    {
        if (!char.IsAsciiLetter(letter))
        {
            return letter;
        }

        int result = (a * IndexFromLetter(letter) + b) % 26;
        return LetterFromIndex(result);
    }

    public static char DecodeLetter(char letter, int a, int b)
    {
        if (!char.IsAsciiLetter(letter))
        {
            return letter;
        }

        int result = MMI(a) * (IndexFromLetter(letter) - b) % 26;
        return LetterFromIndex(result);
    }

    public static string Encode(string plainText, int a, int b)
    {
        if (!AreCoPrime(a, 26))
        {
            throw new ArgumentException("a and m must be coprime.");
        }

        var result = plainText.Select(c => _punctuation.Contains(c) ? '\0' : EncodeLetter(c, a, b))
                              .Where(c => c != '\0');

        return BlockFormat(String.Join("", result));
    }

    public static string Decode(string cipheredText, int a, int b)
    {
        if (!AreCoPrime(a, 26))
        {
            throw new ArgumentException("a and m must be coprime.");
        }

        var result = cipheredText.Select(c => _punctuation.Contains(c) ? '\0' : DecodeLetter(c, a, b))
                                 .Where(c => c != '\0');

        return String.Join("", result);
    }
}