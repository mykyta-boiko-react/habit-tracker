import { Button } from "./Button";

export function Header() {
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
            <span style={subheadingStyles}>1 / 1 done today</span>
        </div>

        <div className="flex flex-col gap-1 items-end">
            <span style={subheadingStyles}>July 6 - July 12</span>
            <div className="flex items-center gap-3">
                <Button>Prev</Button>
                <Button>Next</Button>
            </div>
        </div>
    </header>
}