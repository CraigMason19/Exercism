using System;
using System.Text;

public static class RotationalCipher
{
    public static readonly string letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    public static char RotateLetter(char c, int shiftKey)
    {
        if (shiftKey == 0 || shiftKey == 26 || !char.IsLetter(c))
        {
            return c;
        }

        int index = (letters.IndexOf(char.ToLower(c)) + shiftKey) % 26;
     
        return char.IsLower(c) ? letters[index] : letters[index+26];
    }

    public static string Rotate(string text, int shiftKey)
    {
        if(shiftKey == 0 || shiftKey == 26)
        {
            return text;
        }

        StringBuilder sb = new StringBuilder("");
        foreach(char c in text)
        {
            sb.Append(RotateLetter(c, shiftKey));
        }

        return sb.ToString();
    }
}