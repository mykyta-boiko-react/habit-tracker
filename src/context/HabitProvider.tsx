import { isSameDay } from "date-fns";
import { type ReactNode } from "react";
import { HabitContext, type Habit } from "./useHabits";
import { useLocaleStorage } from "../hooks/useLocaleStorage";

type HabitProviderProps = {
    children: ReactNode
}

export function HabitProvider({ children }: HabitProviderProps) {
    // habits is immutable
    const [habits, setHabits] = useLocaleStorage<Habit[]>("Habits", [])

    const addHabit = (name: string) => {
        const newHabit = { id: crypto.randomUUID(), name: name, completions: []}

        // setHabits([...habits, newHabit]) -> small chance that habits is stale
        // curr is always the latest value of the state (React guarantees this)
        setHabits(curr => [...curr, newHabit])
    }

    const deleteHabit = (id: string) => {
        setHabits(curr => curr.filter(habit => habit.id !== id))
    }

    const toggleHabit = (id: string, date: Date) => {
        setHabits(curr => (
            curr.map(h => {
                if (h.id !== id) return h
                
                const alreadyDone = h.completions.some(d => isSameDay(d, date))
                const completions = alreadyDone
                    // remove  
                    ? h.completions.filter(c => !isSameDay(c, date))
                    // add 
                    : [...h.completions, date]

                // standard immutable update pattern in React
                return { ...h, completions }
            })
        ))
    }

    /*
    Way 1 (Traditional)
    <HabitContext.Provider value={value}>

    Way 2 (Shorthand - Modern)
    <HabitContext value={value}>
    */
    return (
        <HabitContext value={{ habits, addHabit, deleteHabit, toggleHabit }}>
            {children}
        </HabitContext>
    )
}
