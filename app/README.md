## app (demo)

This is a **React + TypeScript (Vite)** demo app used to validate that `@base-ui-kit/ui` components work in a real application during development.

### What it contains

- A registration form implemented with:
  - `react-hook-form`
  - `zod` validation
  - `axios` API call helper
- UI built with `@base-ui-kit/ui` components (`Button`, `Input`, `Checkbox`, `FormField`, `Card`, `Container`)

### Styles

The app imports UI kit styles once in `src/main.tsx`:

```ts
import "@base-ui-kit/ui/styles";
```

It also overrides some design tokens in `src/index.css` to demonstrate theming via CSS variables.

### Running the demo

From the repo root:

```bash
npm -w app run dev
```

### API base URL

The demo uses `VITE_API_URL` (defaults to `https://api.example.com`).

```bash
VITE_API_URL="https://api.example.com" npm -w app run dev
```

### How the UI kit is linked in dev

The Vite config aliases `@base-ui-kit/ui` to the UI kit **source** (`ui/src`) so changes in the UI package can be tested instantly without publishing.
