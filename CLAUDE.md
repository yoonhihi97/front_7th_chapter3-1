# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a monorepo project for learning UI component modularization and design systems (Chapter 3-1). It demonstrates the migration from a legacy design system to a modern design system using TailwindCSS, CVA, shadcn/ui, and Storybook.

**Key Goal**: Understand the problems of legacy systems and learn to build modern design systems by comparing "before" (legacy) and "after" (modern) implementations.

## Monorepo Structure

This project uses pnpm workspaces with two main packages:

- **packages/before/**: Legacy design system with problematic patterns (Atomic Design folders, mixed styling, hardcoded values)
- **packages/after/**: Modern design system implementation target (shadcn/ui, TailwindCSS, CVA, Storybook)

Both packages share the same component structure:
- Component folders: `atoms/`, `molecules/`, `organisms/` (note: this structure is for learning purposes; the assignment teaches that production systems typically use flat `components/ui/` structure like shadcn/ui)
- Page: `ManagementPage.tsx` (post management interface)

## Common Commands

### Development
```bash
# Run before package (legacy system)
pnpm dev
# or
pnpm dev:before

# Run after package (modern system)
pnpm dev:after

# Run Storybook (only available in after package)
pnpm storybook
```

### Build
```bash
# Build all packages
pnpm build

# Build specific package
pnpm build:before
pnpm build:after

# Build Storybook
pnpm build-storybook
```

### Testing
```bash
# Run tests in watch mode (all packages)
pnpm test

# Run tests once (all packages)
pnpm test:run

# Run tests for specific package
pnpm test:before
pnpm test:after
pnpm test:run:before
pnpm test:run:after
```

### Linting
```bash
pnpm lint
```

## Architecture and Design Patterns

### Legacy System (before/)

The legacy system demonstrates common anti-patterns:

1. **Atomic Design Folder Structure**: Components are organized into `atoms/`, `molecules/`, `organisms/` folders, which creates:
   - Import path complexity: `../../../components/atoms/Button`
   - Classification debates: "Is this atom or molecule?"
   - Refactoring friction when moving components between categories

2. **Mixed Styling Approaches**:
   - Inline styles with hardcoded values
   - CSS Modules
   - Direct color codes (#007bff, #d32f2f)
   - No design tokens or centralized theme

3. **Inconsistent Component APIs**:
   - Different prop names across similar components (`helpText` vs `help` vs `description`)
   - Varying patterns for the same concepts
   - Manual validation and type checking

### Modern System (after/)

The modern system should implement:

1. **Flat Component Structure**: Use `components/ui/` instead of atomic design folders (following shadcn/ui pattern)

2. **TailwindCSS + CVA**:
   - Utility-first styling
   - Variants pattern with Class Variance Authority
   - Design tokens through Tailwind config
   - Type-safe variant props

3. **shadcn/ui Integration**:
   - Radix UI-based accessible components
   - Composable component architecture
   - Copy-paste component philosophy
   - CLI-based component installation: `npx shadcn-ui@latest add [component]`

4. **Storybook Documentation**:
   - Component stories with args and controls
   - Accessibility addon integration
   - Auto-generated documentation

## Technology Stack

- **Framework**: React 19
- **Build Tool**: Vite 7
- **Language**: TypeScript 5.9
- **Package Manager**: pnpm (workspace mode)
- **Testing**: Vitest + @testing-library/react
- **Linting**: ESLint 9 (flat config)

### After Package Additional Tools
- TailwindCSS v4 (expected)
- CVA (Class Variance Authority)
- shadcn/ui
- Storybook
- Radix UI (via shadcn/ui)

## Testing Configuration

Both packages use Vitest with:
- **Environment**: jsdom
- **Setup file**: `src/test/setup.ts`
- **Globals**: enabled
- **CSS support**: enabled

## Module Resolution

Both packages use Vite path alias:
```typescript
"@": "./src"
```

Use `@/components/...` instead of relative imports for cleaner code.

## Assignment Context

This is a learning assignment focusing on:

1. **Understanding Atomic Design**: Learn the concept of component composition, but recognize that strict folder hierarchies can be counterproductive
2. **Experiencing CSS pain points**: Feel the maintenance burden of hardcoded styles
3. **Learning modern tooling**: TailwindCSS utility classes, CVA variants, shadcn/ui philosophy
4. **Documentation practice**: Write Storybook stories for component libraries

### Required Implementation
- Migrate `ManagementPage` from before to after
- Implement design system in after package
- Create Storybook stories for main components
- Document before/after comparison in README

### Optional Challenges
- Dark mode support with toggle
- Figma design token integration
- Complex component implementation (AutoComplete, DatePicker)
- React Hook Form + Zod validation
- Storybook interaction tests or a11y addon

## Important Notes

- The "before" package should remain unchanged (reference for comparison)
- Work primarily in the "after" package for implementations
- When adding shadcn/ui components, they will be placed in `components/ui/`
- The project deliberately shows anti-patterns in "before" to teach better practices
