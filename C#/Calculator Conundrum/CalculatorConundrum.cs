using System;

public static class SimpleCalculator
{
    public static string Calculate(int operand1, int operand2, string operation)
    {
        var result = operation switch
        {
            null => throw new ArgumentNullException(),
            "" => throw new ArgumentException(),
            _ => "",
        };

        int calculation = 0;

        if(operation == "+")
        {
            calculation = SimpleOperation.Addition(operand1, operand2);
        }

        else if(operation == "*")
        {
            calculation = SimpleOperation.Multiplication(operand1, operand2);
        }

        else if (operation == "/")
        {
            try
            {
                calculation = SimpleOperation.Division(operand1, operand2);
            }
            catch (DivideByZeroException)
            {
                return "Division by zero is not allowed.";
            }
        }

        else
        {
            throw new ArgumentOutOfRangeException();
        }

        return $"{operand1} {operation} {operand2} = {calculation}";
    }
}