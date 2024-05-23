using System;
using System.Collections.Generic;

// 00001 = wink
// 00010 = double blink
// 00100 = close your eyes
// 01000 = jump
// 10000 = Reverse the order of the operations in the secret handshake.

public static class SecretHandshake
{
    public static readonly string[] Actions = ["jump", "close your eyes", "double blink", "wink"];
    public static readonly int CodeLength = 5;

    public static string ToBinary(int value)
    {
        return Convert.ToString(value, 2).PadLeft(CodeLength, '0');
    }

    public static string[] Commands(int commandValue)
    {
        var actions = new List<string>();
        var binary = ToBinary(commandValue);

        for (int i = 1; i < CodeLength; i++)
        {
            if (binary[i] == '1')
            {
                actions.Add(Actions[i - 1]);
            }
        }

        if(binary[0] == '1' == false)
        {
            actions.Reverse();
        }

        return actions.ToArray();
    }
}