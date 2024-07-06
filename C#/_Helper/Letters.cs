using System;

namespace _Helper
{
    public class Letters
    {
        public const string Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        public const string Lower = "abcdefghijklmnopqrstuvwxyz";

        static bool IsLetter(char c) => char.IsLetter(c);

        public static char GetRandomCharacter(string chars = Lower)
        {
            Random rand = new Random();
            int num = rand.Next(0, chars.Length);
            return chars[num];
        }

        public static int IndexFromLetter(char letter)
        {
            return char.ToLower(letter) - 97;
        }

        public static int PositionFromLetter(char letter)
        {
            return char.ToLower(letter) - 97 + 1;
        }

        public static char LetterFromIndex(int index, bool toUppercase)
        {
            // C# modulus operate doesn't work for negative numbers
            // e.g. -9 % 26 = -9 -> default C#
            //      -9 % 26 = 17 -> What is wanted
            int i = ((index % 26) + 26) % 26;

            return (toUppercase == false) ? Lower[i] : Upper[i];
        }
    }
}