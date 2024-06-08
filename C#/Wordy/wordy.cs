using System;
using System.Collections.Generic;
using System.Linq;

public enum Type
{
    Operand,
    Operation,
}

public record Component
{
    public string value { get; init; }
    public Type Type { get; init; }
}

public static class Wordy
{
    public static readonly string[] ValidOperations = { "plus", "minus", "multiply", "divide" };

    private static bool HasAlternatingTypes(List<Component> arr)
    {
        if (arr.Count() == 0) return false;

        for (int i = 1; i < arr.Count; i++) {
            if (arr[i].Type == arr[i - 1].Type) {
                return false;
            }
        }

        return true;
    }

    private static int CalculateResult(List<Component> arr)
    {
        int result = Convert.ToInt32(arr.First().value);

        for (int i = 1; i < arr.Count() - 1; i += 2)
        {
            switch(arr[i].value) {
                case "plus": 
                    result += Convert.ToInt32(arr[i + 1].value);
                    break;

                case "minus": 
                    result -= Convert.ToInt32(arr[i + 1].value);
                    break;

                case "multiply":
                    result *= Convert.ToInt32(arr[i + 1].value);
                    break;

                case "divide":
                    try
                    {
                        result /= Convert.ToInt32(arr[i + 1].value);
                    }
                    catch (Exception)
                    {
                        throw new DivideByZeroException("Division by zero error");
                    }

                break;

                default: {
                    throw new ArgumentException("Unknown operation");
                }
            }
        }

        return result;
    }

    public static int Answer(string input)
    {
        string[] components = input.Replace("?", "")
            .Replace("multiplied by", "multiply")
            .Replace("divided by", "divide")
            .ToLower().Split(" ");

        if (components[0] != "what")
        {
            throw new ArgumentException("Unknown operation");
        }

        components = components.Skip(2).ToArray();


        var data = new List<Component>();

        for (int i = 0; i < components.Count(); i++)
        {
            int result;
            bool conversionSucceeded = Int32.TryParse(components[i], out result);
            Type t = Type.Operand;

            if (!conversionSucceeded)
            {
                if (!ValidOperations.Contains(components[i]))
                {
                    throw new ArgumentException("Unknown operation");
                }

                t = Type.Operation;
            }

            Component c = new Component()
            {
                value = components[i],
                Type = t,
            };

            data.Add(c);
        }

        if (!HasAlternatingTypes(data) || data.Count() == 0 || data.Count() % 2 == 0)
        {
            throw new ArgumentException("Syntax error");
        }

        return CalculateResult(data);
    }
} 