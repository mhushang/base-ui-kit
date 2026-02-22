## @base-ui-kit/ui

A **React UI kit** that aims to be:

- **Typed** (TypeScript-first)
- **Tested** (Vitest + Testing Library)
- **Documented** (Storybook stories)
- **Tree-shakable** (ESM build with explicit exports)
- **CSS isolated** (CSS Modules per component)
- **Themeable** (design tokens via **CSS variables**)

### Install

Inside this monorepo it’s consumed via workspaces. In another project you would install it as a dependency.

### Usage

Import styles once at your application root:

```ts
import "@base-ui-kit/ui/styles";
```

Then import components:

```tsx
import {
  Button,
  Input,
  Checkbox,
  FormField,
  Card,
  Container,
} from "@base-ui-kit/ui";
```

### Theming (CSS variables)

Tokens live in `src/styles/tokens.css` and are applied by `src/styles/globals.css`.
To theme the UI kit, override variables in your app:

```css
:root {
  --color-primary-500: #6366f1;
  --color-primary-600: #4f46e5;
  --color-primary-700: #4338ca;
}
```

### Scripts

From the repo root:

```bash
npm -w ui run lint
npm -w ui run test
npm -w ui run test:run
npm -w ui run test:coverage
npm -w ui run build
```

Storybook (requires a compatible Node/Vite runtime):

```bash
npm -w ui run storybook
```

### Build output

`npm -w ui run build` produces:

- `dist/index.js` (ESM)
- `dist/index.cjs` (CJS)
- `dist/index.d.ts` (types)
- `dist/index.css` (library styles, exported as `@base-ui-kit/ui/styles`)
