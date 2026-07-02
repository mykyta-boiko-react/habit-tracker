# Habit Tracker

A simple web app for tracking daily habits. Add habits, mark them complete for each day of the week, and see your current streak.

## Features

- Add and remove habits
- Toggle completion for each day of the current week
- Streak counter based on consecutive completed days
- Future dates are disabled

## Tech Stack

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [date-fns](https://date-fns.org/) for date handling

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
├── App.tsx              # Main app state and handlers
├── components/
│   ├── Button.tsx       # Reusable button component
│   ├── HabitForm.tsx    # Form for adding new habits
│   ├── HabitList.tsx    # Habit list and weekly completion grid
│   └── Header.tsx       # App header
└── main.tsx             # App entry point
```
