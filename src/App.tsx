import { useState } from "react";
import { HabitForm } from "./components/HabitForm";
import { HabitList, type Habit } from "./components/HabitList";
import { Header } from "./components/Header";
import { isSameDay } from "date-fns";

export default function App() {
    // habits is immutable
    const [habits, setHabits] = useState<Habit[]>([])

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

    return <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
        <Header />
        <HabitForm addHabit={addHabit}/>
        <HabitList
            habits={habits}
            deleteHabit={deleteHabit}
            toggleHabit={toggleHabit}
        />
    </div>
}
 