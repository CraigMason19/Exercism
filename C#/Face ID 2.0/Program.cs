var faceA = new FacialFeatures("green", 0.9m);
var faceB = new FacialFeatures("blue", 0.9m);

Console.WriteLine(Authenticator.AreSameFace(faceA, new FacialFeatures("green", 0.9m)));
Console.WriteLine(Authenticator.AreSameFace(faceA, faceB));

var authenticator = new Authenticator();

Console.WriteLine(authenticator.IsAdmin(new Identity("admin@exerc.ism", new FacialFeatures("green", 0.9m))));
Console.WriteLine(authenticator.IsAdmin(new Identity("admin@thecompetition.com", new FacialFeatures("green", 0.9m))));