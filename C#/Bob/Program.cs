string[] messages = [
  "It's OK if you don't want to go work for NASA.",
  "I HATE THE DENTIST",
  "Hey Bob, fancy going for tea?",
  "STOP DOING THAT!",
  "   ",
];

foreach(var message in messages)
{
    Console.WriteLine($"\nMessage: {message}");
    Console.WriteLine($"Response: {Bob.Response(message)}");
}