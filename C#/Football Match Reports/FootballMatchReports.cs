using System;

public static class PlayAnalyzer
{
    public static string AnalyzeOnField(int shirtNum)
    {
        string playerRole = "";

        switch (shirtNum)
        {
            case 1:
                playerRole = "goalie";
                break;
            case 2:
                playerRole = "left back";
                break;
            case 3:
            case 4:
                playerRole = "center back";
                break;
            case 5:
                playerRole = "right back";
                break;
            case 6:
            case 7:
            case 8:
                playerRole = "midfielder";
                break;
            case 9:
                playerRole = "left wing";
                break;
            case 10:
                playerRole = "striker";
                break;
            case 11:
                playerRole = "right wing";
                break;
            default:
                throw new ArgumentOutOfRangeException();
        }

        return playerRole;
    }

    public static string AnalyzeOffField(object report)
    {
        string message = "";

        switch (report)
        {
            case int timeRemaining:
                message = $"There are {timeRemaining} supporters at the match.";
                break;
            case string announcement:
                message = announcement;
                break;
            case Injury injury:
                message = $"Oh no! {injury.GetDescription()} Medics are on the field.";
                break;
            case Incident incident:
                message = incident.GetDescription();
                break;
            case Manager manager:
                message = (manager.Club == null) ? $"{manager.Name}" : $"{manager.Name} ({manager.Club})";
                break;
            default:
                throw new ArgumentException();
        }

        return message;
    }
}