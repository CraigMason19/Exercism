using _Helper;

var matrix = new[,]
{
    { 6, 7, 8 },
    { 5, 5, 5 },
    { 7, 5, 6 }
};

var result = SaddlePoints.Calculate(matrix);

foreach(var point in result)
{
    Console.WriteLine(point);
}