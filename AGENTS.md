# AGENTS.md — react-anchorme

## Project Overview

React component library (v5.0.0) that uses [anchorme.js](https://github.com/alexcorvi/anchorme.js) to detect URLs, emails, and IP addresses in text and convert them into clickable links. Published as dual CJS/ESM via Rollup.

- **Runtime dependency:** `anchorme` (^3.0.8)
- **Peer dependency:** React 16.8+ through 19
- **Package manager:** pnpm (v10.6.5, pinned in `packageManager` field)
- **Node version:** v20.14.0 (see `.node-version`)

## Build / Lint / Test Commands

All commands use `pnpm`. Do not use `npm` or `yarn`.

```bash
# Install dependencies
pnpm install

# Build (Rollup, outputs to dist/)
pnpm build

# Lint (ESLint with autofix + Prettier)
pnpm lint

# Lint check only (no autofix)
pnpm lint:check

# Format with Prettier
pnpm prettier

# Run all tests
pnpm test

# Run a single test file
pnpm test -- src/utils.test.ts
pnpm test -- src/Anchorme.test.tsx

# Run a single test by name
pnpm test -- -t "should render link"

# Run tests with coverage
pnpm test:coverage

# Run tests in watch mode with coverage
pnpm test:watch

# Full pre-publish pipeline (lint + test + clean + build)
pnpm prepublishOnly
```

## Project Structure

```
src/
  index.ts            # Public API barrel — exports Anchorme, LinkComponent, LinkComponentProps
  types.ts            # Shared TypeScript types (AnchorProps, LinkComponentProps, LinkComponent)
  Anchorme.tsx        # Main component — parses text, splits into text/link segments
  Link.tsx            # Link subcomponent — renders <a> or custom component with protocol handling
  utils.ts            # Utility functions (getProtocol, truncateText)
  Anchorme.test.tsx   # Component tests (Testing Library)
  utils.test.ts       # Utility function unit tests
```

## Testing

- **Framework:** Jest with ts-jest preset
- **Environment:** jsdom
- **Rendering:** `@testing-library/react` + `@testing-library/jest-dom`
- **Config:** `jest.config.js` — minimal, just preset and testEnvironment
- **Test location:** Tests live alongside source files with `.test.ts` / `.test.tsx` suffix
- **Pattern:** Tests use top-level `it()` for component tests, `describe()` blocks for utility tests
- **Assertions:** Use `@testing-library/jest-dom` matchers (e.g. `toBeInTheDocument()`)
- **DOM queries:** Prefer `container.querySelector()` and `getByText()` from render result
- **Mocking:** Use `jest.fn()` with explicit type parameters: `jest.fn<ReturnType, [ArgTypes]>()`

### Test Conventions

- Import `@testing-library/jest-dom` at top of test files that use DOM matchers
- Define test constants at the top of the file (e.g., `const URL = 'http://www.example.com'`)
- Extract reusable assertion helpers as module-level functions (e.g., `expectLink()`)
- Component tests use `render()` from Testing Library, not `ReactDOM.render()`

## Code Style

### Formatting (Prettier — `.prettierrc`)

- **No semicolons** (`"semi": false`)
- **Tabs** for indentation (`"useTabs": true`)
- **Trailing commas** everywhere (`"trailingComma": "all"`)
- **Single quotes** (`"singleQuote": true`)

### Imports

- React imports use the classic style: `import React from 'react'`
- Named imports from React when needed: `import React, { useCallback, useMemo } from 'react'`
- Third-party imports first, then blank line, then local imports
- Local imports use relative paths without extensions: `'./types'`, `'./utils'`
- Barrel file (`index.ts`) re-exports with named exports: `export { default as Anchorme } from './Anchorme'`
- Type-only exports from barrel: `export { LinkComponent, LinkComponentProps } from './types'`

### TypeScript

- **Strict mode** enabled (`tsconfig.json` has `"strict": true`)
- **No unused locals or parameters** enforced
- Types defined with `type` keyword, not `interface` (project convention)
- Component props use type intersection (`& AnchorProps`) rather than `extends`
- Use `Omit<>` to exclude conflicting props from HTML element types
- `React.ElementType<Props>` for custom component type definitions
- `React.HTMLProps<HTMLAnchorElement>` as base for anchor-related prop types
- `React.ReactElement` as explicit return type on components when specified

### Naming Conventions

- **Components:** PascalCase (`Anchorme`, `Link`), one component per file
- **Files:** PascalCase for components (`Anchorme.tsx`, `Link.tsx`), camelCase for utilities (`utils.ts`, `types.ts`)
- **Test files:** Same name as source with `.test.ts` / `.test.tsx` suffix
- **Types:** PascalCase (`AnchorProps`, `LinkComponentProps`, `LinkComponent`)
- **Props type:** Named `Props` locally within component files
- **Constants:** camelCase for local constants, UPPER_CASE for test fixture values
- **Functions:** camelCase, exported as named exports from utility files
- **Default exports:** Only for main components (wrapped in `React.memo`)

### Components

- Functional components only, using arrow function syntax
- Use `React.memo()` for the main exported component: `export default React.memo(Anchorme)`
- Use `useCallback` and `useMemo` for memoization of parsing logic
- Destructure props with rest spreading: `({ children, ...rest }: Props)`
- Render via fragments: `<>{parsedText}</>`
- Nullish coalescing for defaults: `const Component = linkComponent ?? 'a'`

### Error Handling

- Development-only validation guarded by `process.env.NODE_ENV !== 'production'`
- Throw descriptive `Error` messages for invalid input in dev mode
- No runtime errors thrown in production builds

### ESLint

- TypeScript-ESLint with type-checking rules (`recommended-requiring-type-checking`)
- React and React Hooks plugins enabled
- Prettier integration via `eslint-config-prettier`
- Report unused disable directives enabled

## CI/CD

- **GitHub Actions** (`.github/workflows/tests.yml`): runs on push/PR to `master`
- Pipeline: install -> lint -> test -> build
- **Pre-commit hook** (Husky): runs `npm test` on every commit
- **lint-staged:** runs `prettier --write` and `eslint --fix` on staged `.js/.jsx/.ts/.tsx` files

## Publishing

- Uses `np` for releases (`pnpm release`)
- `prepublishOnly` script ensures lint + test + clean + build pass before publish
- Published files: `dist/` directory and `README.md` only (see `"files"` in package.json)
