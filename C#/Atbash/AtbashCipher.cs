using System;
using System.Text;
using System.Linq;

public static class AtbashCipher
{
    const string CIPHER = "zyxwvutsrqponmlkjihgfedcba";
    const int BLOCK_SIZE = 5;

    static char EncodeLetter(char c)
    {
        if (!char.IsAsciiLetter(char.ToLower(c)))
        {
            return c;
        }

        int index = Convert.ToInt32(char.ToLower(c)) - 97;
        return CIPHER[index];
    }

    static string CleanString(string s)
    {
        return s.Replace(" ", "").Replace(".", "").Replace(",", "");
    }

    public static string Encode(string plainValue)
    {
        string encoded = "";
        int seperatorCounter = 0;

        foreach (char c in CleanString(plainValue))
        {
            encoded += EncodeLetter(c);
            seperatorCounter++;

            if (seperatorCounter == BLOCK_SIZE)
            {
                encoded += " ";
                seperatorCounter = 0;
            }
        }

        // Just in case it was exactly divisible by 5 and had an extra space put on the end
        return encoded.TrimEnd();
    }

    public static string Decode(string encodedValue)
    {
        string decoded = "";

        foreach (char c in CleanString(encodedValue))
        {
            decoded += EncodeLetter(c);
        }

        return decoded;
    }
}