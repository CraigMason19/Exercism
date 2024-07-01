var carBuilderType = Type.GetType("Combined.CarBuilder");

Console.WriteLine(carBuilderType?.GetMethod("BuildBlue"));