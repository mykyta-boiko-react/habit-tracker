import { parseISO } from "date-fns";
import { useEffect, useState } from "react";

export function useLocaleStorage<T>(key: string, initialValue: T) {
    // () => executed only during the initial render of the component on mount
    // without the function wrapper, those expensive operations would execute on every render
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key)
            if (item == null) return initialValue

            return JSON.parse(
                item,
                // it recursively walks the entire parsed JSON tree and calls the reviver for every property
                // ex.:
                // dateReviver("name", "Habit 1")
                // dateReviver("0", "2026-07-05T12:00:00.000Z") ~ date in the array at index 0
                dateReviver
            )
        } catch {
            return initialValue
        }
    })

    // run side effect for state that changes
    // dependencies
    // - [] empty array     : runs once when a components renders and then it never runs again
    // - [storedValue[]     : runs every time storedValue changes
    // - [storedValue, key] : runs every time storedValue or key changes
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue))
    }, [storedValue, key])

    // treat this array as a fixed tuple, not a normal arraya
    return [storedValue, setStoredValue] as const
}

function dateReviver(_key: string, value: unknown) {
    if (
        typeof value === "string" &&
        // regular expression checking for ISO-formatted date
        /^\d{4}-\d{2}-\d{2}T/.test(value)
    ) {
        return parseISO(value);
    }

    return value;
}
