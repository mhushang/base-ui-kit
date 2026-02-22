## base-ui-kit (monorepo)

This repository is a small **monorepo** with:

- **`ui/`**: `@base-ui-kit/ui` — a React UI kit (typed, tested, documented, tree-shakable, CSS-isolated, themeable via CSS variables)
- **`app/`**: demo **React + TypeScript (Vite)** app for developing/testing the UI kit in real usage

### Requirements

- **Node**: Vite 7 recommends **Node 20+** (Node 18 may work but you’ll see warnings)
- **Package manager**: this repo is currently wired with **npm workspaces** (`npm -w ...`)

### Install

From the repo root:

```bash
npm install
```

### Monorepo scripts (root)

- **Lint**: `npm run lint`
- **Test** (UI kit): `npm run test`
- **Build** (UI + demo app): `npm run build`
- **Full check**: `npm run verify`

### Dev workflow

Run the demo app:

```bash
npm -w app run dev
```

The demo app is configured to import the UI kit **from source** during development, so you can iterate on `ui/src/**` and see changes immediately.

### Git hooks (Husky)

Husky is enabled at the repo root:

- **pre-commit**: `ui` lint + unit tests, then `app` lint
- **pre-push**: `ui` lint + unit tests + build, then `app` lint + build

If a hook fails, the commit/push will be blocked until the checks pass.
