import { createContext, useContext } from "react";

export type Habit = { id: string, name: string, completions: Date[] }

type HabitContextType = {
    habits: Habit[],
    addHabit: (name: string) => void,
    deleteHabit: (id: string) => void,
    toggleHabit: (id: string, date: Date) => void
}

export const HabitContext =  createContext<null | HabitContextType>(null);

// this is the "safe getter"
export function useHabits() {
    const context = useContext(HabitContext)
    if (context === null) throw Error('useHabits must be used within a HabitProvider');

    return context;
}
