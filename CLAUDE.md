# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript component library for the Understory Backoffice project, built with Vite and organized as a monorepo. The project uses Storybook for component development and documentation, with Vitest for testing directly in Storybook stories.

## Project Structure

```
packages/
├── components/       # Reusable React components (e.g., ButtonGroup.tsx)
├── storybook/        # Storybook configuration and component stories
│   ├── .storybook/   # Storybook config (main.ts, preview.ts, vitest.setup.ts)
│   ├── stories/      # Component stories and examples
│   └── pages/        # Documentation pages (MDX)
└── tokens/           # Design tokens package
    └── src/          # Token source files
```

## Development Commands

### Running the Development Server
```bash
npm run dev                # Start Vite dev server
npm run storybook          # Start Storybook on port 6006
```

### Building
```bash
npm run build              # Build production bundle with Vite
npm run build-storybook    # Build static Storybook site
```

### Type Checking and Linting
```bash
npm run check-types        # Run TypeScript compiler without emitting files
npm run lint               # Run ESLint on all files
```

### Testing
This project uses Storybook + Vitest integration for component testing. Tests are defined directly in story files and run in a browser environment (Playwright + Chromium).

```bash
# Run all tests (Storybook stories with Vitest)
npx vitest

# Run tests in watch mode
npx vitest --watch

# Run tests for a specific story file
npx vitest Button.stories
```

Test configuration:
- Tests run in browser using Playwright (headless Chromium)
- Vitest setup: `packages/storybook/.storybook/vitest.setup.ts`
- Includes a11y testing via `@storybook/addon-a11y` (currently set to 'todo' mode)

### Preview
```bash
npm run preview            # Preview production build locally
```

## Architecture

### Monorepo Structure
- This is a simple monorepo without a dedicated workspace tool (no Lerna, no pnpm workspaces)
- Uses Turbo for build orchestration (see `turbo.json`)
- Package manager: npm@8.5.0 (enforced via `packageManager` field)

### TypeScript Configuration
- Composite TypeScript config with references:
  - `tsconfig.json` - Root config with project references
  - `tsconfig.app.json` - Application code config
  - `tsconfig.node.json` - Node/build tool config
- Strict mode enabled with additional strict checks (`noUnusedLocals`, `noUnusedParameters`, etc.)
- Module resolution: "bundler" mode for Vite compatibility

### Component Development with Storybook
- Stories are located in `packages/storybook/stories/`
- Story format: Uses CSF3 (Component Story Format 3) with TypeScript
- Stories are configured in `packages/storybook/.storybook/main.ts`
- Static assets served from `packages/storybook/assets/`
- Documentation pages (MDX) in `packages/storybook/pages/`

**Storybook Addons:**
- `@storybook/addon-docs` - Auto-generated documentation
- `@storybook/addon-a11y` - Accessibility testing
- `@storybook/addon-vitest` - Vitest integration for testing stories
- `@chromatic-com/storybook` - Visual regression testing support

### Component Architecture
- Components are written in React 19 with TypeScript
- Location: Reusable components go in `packages/components/`
- Example components with stories are in `packages/storybook/stories/`
- Components should be exported as default exports

### ESLint Configuration
Uses flat config format (`eslint.config.js`) with:
- TypeScript ESLint recommended rules
- React Hooks recommended rules
- React Refresh plugin for Vite HMR
- Storybook-specific rules
- Ignores `dist/` directory

### Testing Philosophy
- Tests are written as Storybook stories using the `@storybook/addon-vitest` integration
- This allows visual and interaction testing in the same place
- Stories serve as both documentation and test cases
- A11y tests run automatically via the a11y addon (currently in 'todo' mode - violations shown but don't fail CI)

## Key Dependencies

- **React 19** - Latest React with new hooks and features
- **Vite 7** - Fast build tool and dev server
- **Storybook 9** - Component development environment
- **Vitest 3** - Unit testing framework with browser mode
- **Playwright** - Browser automation for Vitest browser tests
- **TypeScript 5.8** - Type checking and inference

## Notes for Development

- When creating new components, add them to `packages/components/` and create corresponding stories in `packages/storybook/stories/`
- The main application entry point is `packages/tokens/src/main.tsx` which mounts to `index.html`
- Currently the `tokens` package contains a simple demo app that imports components from the `components` package
- Storybook config uses `getAbsolutePath()` helper to resolve addon paths correctly in the monorepo
- The project uses React 19's new JSX transform (`jsx: "react-jsx"`), so no need to import React in component files
