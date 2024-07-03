string Stringify(ComplexNumber c)
{
    return $"ComplexNumber => [{c.Real()}, {c.Imaginary()}]";
}

var a = new ComplexNumber(1, 2);
var b = new ComplexNumber(3, 4);

Console.WriteLine(Stringify(a.Mul(b))); // -5, 10
Console.WriteLine(Stringify(b.Conjugate())); // 3, -4
Console.WriteLine(Stringify(new ComplexNumber(1, 0).Exp())); // 2.718281828459045 Math.E,