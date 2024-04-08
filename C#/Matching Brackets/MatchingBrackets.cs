using System;
using System.Collections.Generic;
using System.Linq;

public static class MatchingBrackets
{
    static readonly Dictionary<char, char> _brackets = new Dictionary<char, char>{
            { '[', ']' },
            { '{', '}' },
            { '(', ')' },
        };

    static string OnlyBrackets(string s)
    {
        char[] b = _brackets.Keys.Union(_brackets.Values).ToArray();
        return string.Join("", s.Where(c => b.Contains(c)));
    }

    public static bool IsPaired(string input)
    {
        if (string.IsNullOrEmpty(input)) { return true; }

        Stack<char> bracketsStack = new Stack<char>();
        string extraBrackets = "";

        foreach(char c in OnlyBrackets(input))
        {
            if(_brackets.ContainsKey(c))
            {
                bracketsStack.Push(c);
                continue;

            }

            if (bracketsStack.Count > 0)
            {
                if (c == _brackets[bracketsStack.Peek()])
                {
                    bracketsStack.Pop();
                    continue;
                }
            }

            extraBrackets += c;
        }

        return bracketsStack.Count == 0 && extraBrackets.Length == 0;
    }
}