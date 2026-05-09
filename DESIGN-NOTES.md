# DESIGN-NOTES.md

## Week 1–3: Notes
*(Keep your existing content above this line)*

---

## Week 4: Component Architecture

### Component Tree

RootLayout (Server)
├── Header (Client)  ← owns isDark state + localStorage
│   └── Nav (Server)
├── <main>
│   ├── Hero (Server)
│   ├── Card × 3 (Server)  ← props: title, description, href, tech[]
│   └── AccordionSection (Client)  ← owns openIndex state
└── Footer (Server)
Contact Page
└── ContactForm (Client)  ← owns form fields + error + submitted state

### Component Inventory

| Component         | Type   | Holds State?                        | Notes                                        |
|-------------------|--------|-------------------------------------|----------------------------------------------|
| Header            | Client | ✅ isDark (boolean)                  | Reads/writes localStorage via useEffect      |
| Nav               | Server | ❌                                   | Uses Next.js `<Link>` for client-side routing|
| Hero              | Server | ❌                                   | Static headline + CTA button                 |
| Card              | Server | ❌                                   | Props: title, description, href, tech[]      |
| AccordionSection  | Client | ✅ openIndex (number or null)        | Refactored from Week 3 vanilla JS accordion  |
| ContactForm       | Client | ✅ form fields + error + submitted   | Controlled inputs with validation            |
| Footer            | Server | ❌                                   | Static copyright, no interactivity           |

### State Ownership Notes

- **isDark (theme)** — lives in `Header` because it controls the entire page's
  CSS variables via `document.documentElement.classList.toggle('dark', isDark)`.
  Persisted to `localStorage` using two `useEffect` hooks: one reads the saved
  value on mount, the other writes it whenever the value changes.

- **openIndex (accordion)** — lives in `AccordionSection` because no other
  component needs to know which FAQ item is open. Keeping it local avoids
  unnecessary prop drilling or context.

- **form fields, error, submitted** — live inside `ContactForm` because they
  are purely local UI state, never shared with any parent or sibling component.

### Server vs Client Decision Rule

> A component is **Client** only if it uses: event handlers, `useState`,
> `useEffect`, or browser-only APIs (`localStorage`, `window`, `document`).
> Everything else defaults to **Server** to keep the JavaScript bundle small.

### Why Component Architecture Matters

Refactoring from vanilla JS (Week 3) to React components (Week 4) changed how
state and UI stay in sync. Previously, theme toggling required manually querying
the DOM and calling `classList.toggle`. Now React re-renders only what changed,
automatically. A bug fixed inside `Card.tsx` is fixed everywhere the card is
used — no hunting across multiple HTML files.
