using System;

static class Badge
{
    public static string Print(int? id, string name, string? department)
    {
        var dept = (department ?? "OWNER").ToUpper();

        if (id != null)
        {
            return $"[{id}] - {name} - {dept}";
        }

        return $"{name} - {dept}";
    }
}