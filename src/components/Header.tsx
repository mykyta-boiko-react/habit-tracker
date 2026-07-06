import { format, isToday } from "date-fns";
import { useHabits } from "../context/useHabits";
import { Button } from "./Button";

type HeaderProps = {
    visibleDates: Date[],
    onPrev: () => void,
    onNext: () => void
}

export function Header({ visibleDates, onPrev, onNext }: HeaderProps) {
    const { habits } = useHabits()

    const doneToday = habits.filter(h => h.completions.some(c => isToday(c))).length
    const dateRange = `${format(visibleDates[0], 'MMM d')} - ${format(visibleDates.at(-1)!, 'MMM d')}`

    // inline styles
    const headingStyles = {
        color: "white",
        fontSize: "1.875rem",
        fontWeight: 500
    };
    const subheadingStyles = {
        color: "#9f9fa9",
        fontSize: "0.875rem",
        lineHeight: "calc(1.25 / 0.875)"
    }

    // return header component
    return <header className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
            <h1 style={headingStyles}>Habit Tracker</h1>
            <span style={subheadingStyles}>{doneToday} / {habits.length} done today</span>
        </div>

        <div className="flex flex-col gap-1 items-end">
            <span style={subheadingStyles}>{dateRange}</span>
            <div className="flex items-center gap-3">
                <Button onClick={onPrev}>Prev</Button>
                <Button
                    onClick={onNext}
                    disabled={visibleDates.some(d => isToday(d))}
                >
                    Next
                </Button>
            </div>
        </div>
    </header>
}
