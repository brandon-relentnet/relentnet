# Project Context: Relentnetv2

## Project Overview

**Relentnetv2** is a modern frontend application built using the React ecosystem, specifically leveraging the **TanStack** suite of tools. It uses **Vite** for a fast development experience and build process.

**Key Technologies:**
*   **Framework:** React 19
*   **Build Tool:** Vite 7
*   **Language:** TypeScript
*   **Routing:** TanStack Router (File-based routing)
*   **Form Management:** TanStack Form
*   **Styling:** Tailwind CSS 4 (using `@tailwindcss/vite`)
*   **Testing:** Vitest
*   **Particles:** tsparticles (for visual effects like `StarParticles`)

## Building and Running

The project uses `npm` for dependency management and script execution.

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server on port 3000. |
| `npm run build` | Builds the application for production (runs `vite build` and `tsc`). |
| `npm run preview` | Previews the production build locally. |
| `npm run test` | Runs the test suite using Vitest. |
| `npm run lint` | Runs ESLint. |
| `npm run format` | Runs Prettier. |
| `npm run check` | Runs both Prettier (write) and ESLint (fix). |

## Development Conventions

### Routing
This project uses **TanStack Router** with **file-based routing**.
*   **Routes Directory:** `src/routes/`
*   **Root Layout:** `src/routes/__root.tsx` defines the main layout, including the `<Outlet />` and global components like `<StarParticles />` and Devtools.
*   **New Routes:** Adding a file to `src/routes/` automatically generates the route.
*   **Navigation:** Use the `<Link />` component from `@tanstack/react-router` for SPA navigation.

### Styling
*   **Tailwind CSS 4:** The project uses the latest Tailwind CSS version via the Vite plugin.
*   **Global Styles:** Defined in `src/styles.css`. This file includes the `@import "tailwindcss";` directive and custom animations (e.g., `.animate-fade-in-up`).
*   **Theme:** The project seems to use a dark/space theme implied by `stars_background.jpg` and `<StarParticles />`.

### Code Quality & Formatting
*   **Linting:** ESLint is configured with `@tanstack/eslint-config`.
*   **Formatting:** Prettier is used for code formatting.
*   **Pre-commit/Check:** Run `npm run check` to ensure code quality before committing.

### File Structure & Aliases
*   **Alias:** The `@` symbol is configured in `vite.config.ts` to resolve to the `src/` directory (e.g., `import X from '@/components/X'`).
*   **Components:** Reusable UI components are located in `src/components/`.
*   **Hooks:** Custom hooks are located in `src/hooks/`.

## Key Files
*   `vite.config.ts`: Vite configuration including plugins for React, Tailwind, and TanStack Router.
*   `src/routes/__root.tsx`: The application shell.
*   `src/main.tsx`: Entry point for the React application.
*   `src/styles.css`: CSS entry point.
