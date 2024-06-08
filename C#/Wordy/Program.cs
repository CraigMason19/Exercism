using System;

string[] inputs = {
    "What is 5?",
    "What is 1 plus 1?",
    "What is 53 plus 2?",
    "What is -1 plus -10?",
    "What is 123 plus 45678?",
    "What is 4 minus -12?",
    "What is -3 multiplied by 25?",
    "What is 33 divided by -3?",
    "What is 1 plus 1 plus 1?",
    "What is 1 plus 5 minus -2?",
    "What is 20 minus 4 minus 13?",
    "What is 17 minus 6 plus 3?",
    "What is 2 multiplied by -2 multiplied by 3?",
    "What is -3 plus 7 multiplied by -2?",
    "What is -12 divided by 2 divided by -3?",

    // Error: Unknown operation
    "What is 52 cubed?",
    "Who is the President of the United States?", 

    // Error: Syntax Error
    "What is 1 plus?",
    "What is?",
    "What is 1 plus plus 2?",
    "What is 1 plus 2 1?",
    "What is 1 2 plus?",
    "What is plus 1 2?",
};

foreach(var  input in inputs)
{
    try
    {
        var result = Wordy.Answer(input);
        Console.WriteLine($"{input} -> {result}");
    }
    catch (Exception e)
    {
        Console.WriteLine($"{input} -> {e.Message}");
    }
}