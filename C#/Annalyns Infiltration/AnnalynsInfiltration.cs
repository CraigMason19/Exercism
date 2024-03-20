using System;

static class QuestLogic
{
    public static bool CanFastAttack(bool knightIsAwake)
    {
        return !knightIsAwake;
    }

    public static bool CanSpy(bool knightIsAwake, bool archerIsAwake, bool prisonerIsAwake)
    {
        if (!knightIsAwake && !archerIsAwake && !prisonerIsAwake)
        {
            return false;
        }
        return true;
    }

    public static bool CanSignalPrisoner(bool archerIsAwake, bool prisonerIsAwake)
    {
        if (!archerIsAwake && prisonerIsAwake)
            return true;

        return false;
    }

    public static bool CanFreePrisoner(bool knightIsAwake, bool archerIsAwake, bool prisonerIsAwake, bool petDogIsPresent)
    {
        if (petDogIsPresent)
        {
            // Every one is awake
            if (knightIsAwake && archerIsAwake && prisonerIsAwake)
            {
                return false;
            }
            // Every one is asleep
            if (!knightIsAwake && !archerIsAwake && !prisonerIsAwake)
            {
                return true;
            }
            // Only prisoner awake
            if (!knightIsAwake && !archerIsAwake && prisonerIsAwake)
            {
                return true;
            }
            // Only knight awake
            if (knightIsAwake && !archerIsAwake && !prisonerIsAwake)
            {
                return true;
            }
            // Only archer asleep
            if (knightIsAwake && !archerIsAwake && prisonerIsAwake)
            {
                return true;
            }
        }

        else
        {
            // Every one is asleep
            if (!knightIsAwake && !archerIsAwake && !prisonerIsAwake)
            {
                return false;
            }
            // Only prisoner awake
            if (!knightIsAwake && !archerIsAwake && prisonerIsAwake)
            {
                return true;
            }
        }


        return false;
    }
}