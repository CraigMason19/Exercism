using System;
using System.Collections;
using System.Collections.Generic;

List<string> inputs = new()
{
  "reserved words like constructor and toString ok?",
  " multiple   whitespaces",
  "First: don't laugh. Then: don't cry. You're getting it.",
  "go Go GO Stop stop",
};

foreach (string input in inputs)
{
    var d = WordCount.CountWords(input);

    Console.WriteLine(input);

    foreach (KeyValuePair<string, int> kvp in d)
    {
        Console.WriteLine("\tK:{0}, V:{1}", kvp.Key, kvp.Value);
    }
};