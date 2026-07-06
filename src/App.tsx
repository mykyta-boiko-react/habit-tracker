import { useEffect, useState } from "react";
import { HabitForm } from "./components/HabitForm";
import { HabitList } from "./components/HabitList";
import { Header } from "./components/Header";
import { HabitProvider } from "./context/HabitProvider";
import { addWeeks, eachDayOfInterval, endOfWeek, startOfWeek } from "date-fns";

export default function App() {
    const [weekOffset, setWeekOffset] = useState(0)

    // "derived state", used as a variable
    const week = addWeeks(new Date(), weekOffset)
    const visibleDates = eachDayOfInterval({
        start: startOfWeek(week, { weekStartsOn: 1 }),
        end: endOfWeek(week, { weekStartsOn: 1 }),
    })

    // attach click listener for every time weekOffset changes
    useEffect(() => {
        const handler = () => console.log(weekOffset)
        document.addEventListener('click', handler)

        // clean up properly on unmount 
        return () => {
            document.removeEventListener('click', handler)
        }
    }, [weekOffset])

    return (
        <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
            <HabitProvider>
                <Header
                    visibleDates={visibleDates}
                    onPrev={() => setWeekOffset(o => o - 1)}
                    onNext={() => setWeekOffset(o => o + 1)}
                />
                <HabitForm />
                <HabitList visibleDates={visibleDates} />
            </HabitProvider>
        </div>
    )
}
