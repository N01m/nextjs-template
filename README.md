# Next.js Template

A production-ready, minimal Next.js 15.5.9 template with TypeScript, ESLint, Prettier, Husky, and testing. Built following DRY and KISS principles for rapid project initialization without unnecessary overhead.

## Purpose

This is a clean, agnostic Next.js template that can be used for any project. Clone it, install dependencies, and start building. No platform lock-in, no excessive tooling, just the essentials.

## What's Included

### Core Stack

- **Next.js 15.5.9** with App Router
- **TypeScript** with strict mode enabled
- **Tailwind CSS** for styling
- **React 19**

### Code Quality

- **ESLint** with Next.js and TypeScript recommended rules
- **Prettier** with automatic import sorting
- **EditorConfig** for consistent editor settings
- **Path aliases** (`@/`) for clean imports

### Git Hooks (Husky)

- **Pre-commit**: Auto-format and lint staged files
- **Commit-msg**: Enforce conventional commit format

### Testing

- **Jest** configured for Next.js
- **React Testing Library**
- **@testing-library/jest-dom** for enhanced matchers

### Developer Experience

- VSCode settings with recommended extensions
- TypeScript strict mode
- Security headers pre-configured
- Clean project structure

## Project Structure

```
├── src/
│   ├── app/          # Next.js App Router pages and layouts
│   ├── components/   # Reusable React components
│   ├── lib/          # Utility functions and helpers
│   ├── hooks/        # Custom React hooks
│   ├── types/        # TypeScript type definitions
│   └── styles/       # Additional styles
├── public/           # Static assets
├── tests/            # Test files
└── ...config files
```

## Getting Started

1. **Use this template:**

   ```bash
   git clone <your-repo-url> my-project
   cd my-project
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables (optional):**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Start developing:**

   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## Available Scripts

| Command                 | Description                     |
| ----------------------- | ------------------------------- |
| `npm run dev`           | Start development server        |
| `npm run build`         | Build for production            |
| `npm start`             | Start production server         |
| `npm run lint`          | Run ESLint                      |
| `npm run lint:fix`      | Fix ESLint errors automatically |
| `npm run format`        | Format all files with Prettier  |
| `npm run format:check`  | Check if files are formatted    |
| `npm run type-check`    | Run TypeScript type checking    |
| `npm test`              | Run tests                       |
| `npm run test:watch`    | Run tests in watch mode         |
| `npm run test:coverage` | Generate test coverage report   |

## Features

### Path Aliases

Import using `@/` prefix for cleaner imports:

```typescript
import { Button } from "@/components/Button";
import { formatDate } from "@/lib/utils";
```

### Security Headers

Production-ready security headers configured in `next.config.ts`:

- Strict-Transport-Security
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy

### Git Hooks

Husky enforces code quality before commits:

- **Pre-commit**: Runs Prettier and ESLint on staged files
- **Commit-msg**: Validates commit messages follow conventional commits

### Conventional Commits

Commit messages must follow this format:

```
type(scope): subject

Examples:
feat: add user authentication
fix: resolve navigation bug
docs: update README
style: format code
refactor: simplify component logic
test: add unit tests for utils
chore: update dependencies
```

### VSCode Integration

Recommended extensions (auto-suggested on first open):

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- Code Spell Checker
- EditorConfig

Settings include format-on-save and auto-fix ESLint issues.

## Customization

This template is meant to be modified to fit your needs:

- Remove testing setup if not needed
- Swap Tailwind for another CSS solution
- Add state management (Redux, Zustand, etc.)
- Add your own tooling and libraries
- Adjust ESLint/Prettier rules in their config files

## Clean & Minimal

No CI/CD configuration, no platform-specific tools, no unnecessary dependencies. Just a solid foundation that works anywhere.

## License

MIT
