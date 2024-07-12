using System;

public static class ErrorHandling
{
    public static void HandleErrorByThrowingException() => throw new Exception();

    public static int? HandleErrorByReturningNullableType(string input)
    {
        try
        {
            return Convert.ToInt32(input);
        }
        catch (Exception)
        {
            return null;
        }
    }

    public static bool HandleErrorWithOutParam(string input, out int result) => int.TryParse(input, out result);

    public static void DisposableResourcesAreDisposedWhenExceptionIsThrown(IDisposable disposableObject)
    {
        using (disposableObject)
        {
            throw new Exception();
        }
    }
}