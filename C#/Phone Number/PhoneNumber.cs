using System;
using System.Text.RegularExpressions;

public class PhoneNumber
{
    public static string Clean(string phoneNumber)
    {
        // Empty
        if (string.IsNullOrWhiteSpace(phoneNumber))
        {
            throw new ArgumentException("Invalid phone number");
        }

        // Letters
        if(Regex.IsMatch(phoneNumber, "[a-zA-Z]"))
        {
            throw new ArgumentException("Letters are not permitted");
        }

        // Punctuation
        if (Regex.IsMatch(phoneNumber, "[@:!]"))
        {
            throw new ArgumentException("Punctuations are not permitted");
        }

        string pattern = @"[+]?\d{3,}";
        string result = string.Concat(Regex.Matches(phoneNumber, pattern));

        // Length Checks
        if (result.Length > 11)
        {
            throw new ArgumentException("More than 11 digits");
        }

        else if (result.Length < 10)
        {
            throw new ArgumentException("Incorrect number of digits");
        }

        if (result.Length == 11 && !(result[0] == '1'))
        {
            throw new ArgumentException("11 digits must start with 1");
        }

        else if (result.Length == 11)
        {
            return result.Substring(1);
        }

        // Area Code
        if (result[0] == '0' || result[0] == '1')
        {
            throw new ArgumentException("Area code cannot start with 0 or 1");
        }

        // Exchange Code
        if (result[3] == '0' || result[3] == '1')
        {
            throw new ArgumentException("Exchange code cannot start with 0 or 1");
        }

        return result;
    }
}