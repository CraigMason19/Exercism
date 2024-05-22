var ch = new ClaimsHandler();

var longer = new Plot(new Coord(10, 1), new Coord(20, 1), new Coord(10, 2), new Coord(20, 2));
var shorter = new Plot(new Coord(1, 1), new Coord(2, 1), new Coord(1, 2), new Coord(2, 2));

ch.StakeClaim(longer);
ch.StakeClaim(shorter);


var result = ch.GetClaimWithLongestSide().Equals(longer);
Console.WriteLine(result);