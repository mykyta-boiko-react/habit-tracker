import { useState, type SubmitEvent } from "react";
import { Button } from "./Button";

type HabitFormProps = {
    addHabit: (name: string) => void
}

export function HabitForm({ addHabit }: HabitFormProps) {
    // adds a state variable to your component
    // state - the only thing that causes an application to rerender
    // [state, setState] = useState(initialValue)
    // every time name changes (via setName), React re-renders the HabitForm component
    const [name, setName] = useState('')

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault()

        const habitToAdd = name.trim()
        if (habitToAdd === '') return

        setName('')
        addHabit(habitToAdd)
    }

    return <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
            value={name}
            onChange={e => setName(e.target.value)}
            className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            placeholder="New habit..."
        />
        <Button
            disabled={name.trim() === ''}
            className="rounded-lg px-4 py-2 font-medium"
        >Add habit</Button>
    </form>
}
