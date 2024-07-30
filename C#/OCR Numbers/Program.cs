var one =  "   \n" +
           "  |\n" +
           "  |\n" +
           "   ";

var garble = "       _     _           _ \n" +
             "  |  || |  || |     || || |\n" +
             "  |  | _|  ||_|  |  ||_||_|\n" +
             "                           ";

var OneToNine = "    _  _     _  _  _  _  _  _ \n" +
                "  | _| _||_||_ |_   ||_||_|| |\n" +
                "  ||_  _|  | _||_|  ||_| _||_|\n" +
                "                              ";

var multiple = "    _  _ \n" +
               "  | _| _|\n" +
               "  ||_  _|\n" +
               "         \n" +
               "    _  _ \n" +
               "|_||_ |_ \n" +
               "  | _||_|\n" +
               "         \n" +
               " _  _  _ \n" +
               "  ||_||_|\n" +
               "  ||_| _|\n" +
               "         ";

Console.WriteLine(OcrNumbers.Convert(one));
Console.WriteLine(OcrNumbers.Convert(garble));
Console.WriteLine(OcrNumbers.Convert(OneToNine));
Console.WriteLine(OcrNumbers.Convert(multiple));