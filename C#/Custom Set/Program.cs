using System;

var equal = new CustomSet([1, 3]).Equals(new CustomSet([3, 1]));
Console.WriteLine(equal); // true

var union = new CustomSet([1, 3]).Union(new CustomSet([2, 3]));
Console.WriteLine(union); // [1,2,3]

var difference = new CustomSet([3, 2, 1]).Difference(new CustomSet([2, 4]));
Console.WriteLine(difference); // [1, 3]

var intersection = new CustomSet([1, 2, 3]).Intersection(new CustomSet([4, 5, 6]));
Console.WriteLine(intersection); // []

var disjoint = new CustomSet([1, 2, 3]).Disjoint(new CustomSet([4, 5, 6]));
Console.WriteLine(disjoint); // true

var subsetTrue = new CustomSet([1, 2, 3]).Subset(new CustomSet([4, 1, 2, 3]));
Console.WriteLine(subsetTrue); // true

var subsetFalse = new CustomSet([1, 2, 3]).Subset(new CustomSet([4, 1, 3]));
Console.WriteLine(subsetFalse); // false