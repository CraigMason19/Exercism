using System;
using System.Collections.Generic;
using System.Linq;

using _Helper;

public class Generator
{
    public static IEnumerable<char> LoopString(string str)
    {
        int index = 0;

        while (true)
        {
            if (index == str.Length)
            {
                index = 0;
            }

            yield return str[index++];
        }
    }
}

public class SimpleCipher
{
    private string _key = "";

    public SimpleCipher()
    {
        this._key = GenerateKey();
    }

    public SimpleCipher(string key)
    {
        this._key = key;
    }

    private string GenerateKey()
    {
        var randomLetters = new char[100].Select(c => Letters.GetRandomCharacter());
        return string.Join("", randomLetters);
    }

    public string Key
    {
        get
        {
            return this._key;
        }
    }

    private string Transform(string message, char operation)
    {
        var generator = Generator.LoopString(this._key);
        var enumerator = generator.GetEnumerator();

        string output = "";

        foreach (char c in message)
        {
            enumerator.MoveNext();
          
            output += Letters.LetterFromIndex(Letters.IndexFromLetter(c) + (operation == '+' ? 1 : -1) * Letters.IndexFromLetter(enumerator.Current));
        }

        return output;
    }

    public string Encode(string plaintext)
    {
        return this.Transform(plaintext, '+');
    }

    public string Decode(string ciphertext)
    {
        return this.Transform(ciphertext, '-');
    }
}