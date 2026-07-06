# Habit Tracker

A simple web app for tracking daily habits. Add habits, mark them complete day by day, browse past weeks, and see your current streak. Data is saved in the browser so it persists across reloads.

## Features

- Add and remove habits
- Toggle completion for each day in the visible week
- Navigate between weeks with previous/next controls
- Daily progress summary (habits completed today)
- Streak counter based on consecutive completed days
- Future dates are disabled
- Habits and completions persist in `localStorage`

## Tech Stack

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [date-fns](https://date-fns.org/) for date handling
- [tailwind-merge](https://github.com/dcastil/tailwind-merge) for class name merging

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── App.tsx                  # Week navigation and layout
├── components/
│   ├── Button.tsx           # Reusable button with variants
│   ├── Button.module.css    # Button base styles
│   ├── HabitForm.tsx        # Form for adding new habits
│   ├── HabitList.tsx        # Habit list and weekly completion grid
│   └── Header.tsx           # Title, progress, and week controls
├── context/
│   ├── HabitProvider.tsx    # Habit state and actions via React Context
│   └── useHabits.ts         # Context definition and hook
├── hooks/
│   └── useLocaleStorage.ts  # localStorage-backed state with Date parsing
└── main.tsx                 # App entry point
```

## Architecture

- **React Context** — habit state and actions (`addHabit`, `deleteHabit`, `toggleHabit`) are provided through `HabitProvider` and consumed via the `useHabits` hook.
- **localStorage** — the `useLocaleStorage` hook syncs habits to the browser; completion dates are restored from JSON using a custom reviver.
- **Derived state** — the visible week is computed from a `weekOffset` value rather than stored separately.
