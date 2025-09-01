# Development Guide

This guide will help you set up and run the natatae.me project locally using pnpm and deploy to Vercel.

## Prerequisites

Before you begin, make sure you have the following installed:

- [NVM](https://github.com/nvm-sh/nvm) (Node Version Manager)
- [Node.js](https://nodejs.org/) (v22.19.0 - managed via NVM)
- [pnpm](https://pnpm.io/) (v9.0+ - will be installed after Node.js)
- [VS Code](https://code.visualstudio.com/) (recommended editor)

### Installing NVM

```bash
# macOS/Linux
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
# or
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash

# Add to your shell profile (~/.bashrc, ~/.zshrc, etc.)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Reload your shell configuration
source ~/.bashrc  # or ~/.zshrc
```

For Windows users, use [nvm-windows](https://github.com/coreybutler/nvm-windows) instead.

### Setting Up Node.js with NVM

```bash
# Navigate to the project directory
cd natatae-me

# Install and use the Node version specified in .nvmrc
nvm install  # Installs the version from .nvmrc
nvm use      # Switches to the project's Node version

# Verify Node version
node --version
```

### Installing pnpm

Once you have the correct Node version:

```bash
# Install globally via npm
npm install -g pnpm@

# Verify installation
pnpm --version
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/wewillcraft/natatae-me.git
cd natatae-me
```

### 2. Set Up Node Version

```bash
# Automatically use the correct Node version
nvm use
# If the version isn't installed yet
nvm install

# Verify you're using the right version
node --version
```

### 3. Install Dependencies

```bash
# Install all dependencies
pnpm install
```

### 4. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your API keys:

```env
# Database (Convex)
NEXT_PUBLIC_CONVEX_URL=https://your-app.convex.cloud
CONVEX_DEPLOY_KEY=your-deploy-key

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx
CLERK_SECRET_KEY=sk_test_xxx

# Maps (Mapbox)
NEXT_PUBLIC_MAPBOX_TOKEN=pk.xxx

# Image Storage (Cloudinary)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud
CLOUDINARY_API_SECRET=xxx

# Analytics (Optional)
NEXT_PUBLIC_MIXPANEL_TOKEN=xxx
NEXT_PUBLIC_SENTRY_DSN=https://xxx
```

### 5. Set Up the Database (Convex)

In a separate terminal:

```bash
# Run Convex development server
pnpm convex dev
```

This will:

- Connect to your Convex project (or create a new one)
- Watch for changes in `convex/` directory
- Push schema and function updates automatically

### 6. Start Development Server

```bash
# Start Next.js development server
pnpm dev
```

The application will be available at:

- Frontend: http://localhost:3000
- Convex Dashboard: https://dashboard.convex.dev

## Project Configuration

### package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "biome check .",
    "lint:fix": "biome check --apply .",
    "format": "biome format --write .",
    "format:check": "biome format .",
    "type-check": "tsc --noEmit",
    "convex": "convex dev",
    "convex:deploy": "convex deploy",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest run --coverage"
  }
}
```

## Development Workflow

### Available Commands

```bash
# Development
pnpm dev              # Start Next.js dev server
pnpm convex           # Start Convex dev server (run in separate terminal)

# Building
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run Biome linter
pnpm lint:fix         # Fix linting issues
pnpm format           # Format code with Biome
pnpm format:check     # Check formatting
pnpm type-check       # Run TypeScript compiler

# Testing
pnpm test             # Run tests
pnpm test:ui          # Run tests with UI
pnpm test:coverage    # Generate coverage report

# Deployment
pnpm convex:deploy    # Deploy Convex functions to production
pnpm vercel           # Deploy to Vercel
```

### Running Multiple Processes

For development, you'll need two terminal windows:

**Terminal 1 - Convex Backend:**

```bash
pnpm convex
```

**Terminal 2 - Next.js Frontend:**

```bash
pnpm dev
```

**Pro tip:** Use a tool like `concurrently` to run both:

```bash
pnpm add -D concurrently
# Add to package.json scripts:
"dev:all": "concurrently \"pnpm convex\" \"pnpm dev\""
```

## Project Structure

```
natatae-me/
├── app/                 # Next.js 15 App Router
│   ├── (auth)/          # Authentication routes
│   ├── (main)/          # Main application routes
│   ├── api/             # API routes
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── ui/              # Reusable UI components
│   └── features/        # Feature-specific components
├── convex/              # Convex backend
│   ├── _generated/      # Auto-generated types
│   ├── schema.ts        # Database schema
│   └── *.ts             # Server functions
├── lib/                 # Utilities and helpers
├── public/              # Static assets
├── styles/              # Global styles
├── tests/               # Test files
├── .env.local           # Environment variables (not committed)
├── .gitignore           # Git ignore rules
├── biome.json           # Biome formatter/linter config
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies and scripts
├── pnpm-lock.yaml       # pnpm lock file
├── tsconfig.json        # TypeScript configuration
└── vercel.json          # Vercel deployment config
```

## VS Code Setup

### Required Extensions

Install the recommended extensions from `.vscode/extensions.json`:

- **Biome** - Code formatter and linter
- **Tailwind CSS IntelliSense** - Tailwind autocomplete
- **Error Lens** - Inline error display
- **Pretty TypeScript Errors** - Better error messages
- **GitLens** - Git supercharged

### Workspace Settings

VS Code is pre-configured in `.vscode/settings.json`:

- Biome as default formatter
- Auto-formatting on save
- Tailwind CSS IntelliSense configured
- TypeScript using workspace version

## Common Development Tasks

### Adding a New Page

1. Create a new directory in `app/(main)/`:

```bash
mkdir -p app/(main)/about
```

2. Add a `page.tsx` file:

```typescript
// app/(main)/about/page.tsx
export default function AboutPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">About natatae.me</h1>
      {/* Your content */}
    </div>
  );
}
```

### Adding Convex Functions

1. Create a new file in `convex/`:

```typescript
// convex/toilets.ts
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("toilets").collect();
  },
});

export const add = mutation({
  args: {
    name: v.string(),
    location: v.object({
      lat: v.number(),
      lng: v.number(),
    }),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("toilets", args);
  },
});
```

2. Use in React components:

```typescript
// components/ToiletList.tsx
"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export function ToiletList() {
  const toilets = useQuery(api.toilets.list);

  if (!toilets) return <div>Loading...</div>;

  return (
    <ul>
      {toilets.map((toilet) => (
        <li key={toilet._id}>{toilet.name}</li>
      ))}
    </ul>
  );
}
```

### Working with pnpm

#### Why pnpm?

- **Faster installations** - Up to 2x faster than npm
- **Disk space efficient** - Uses hard links to save space
- **Strict dependencies** - Prevents phantom dependencies
- **Monorepo support** - Built-in workspace support
- **Works great with NVM** - Each Node version can have its own pnpm

#### Useful pnpm Commands

```bash
# Add dependencies
pnpm add package-name
pnpm add -D dev-package-name

# Remove dependencies
pnpm remove package-name

# Update dependencies
pnpm update                 # Update all
pnpm update package-name    # Update specific

# Check outdated packages
pnpm outdated

# Run scripts
pnpm run script-name
pnpm script-name           # Shorthand

# Clean install
pnpm install --frozen-lockfile  # CI/production
```

## Testing

### Running Tests

```bash
# Run all tests
pnpm test

# Watch mode
pnpm test:watch

# With UI
pnpm test:ui

# Coverage
pnpm test:coverage
```

### Writing Tests

```typescript
// app/__tests__/home.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders the heading", () => {
    render(<HomePage />);
    expect(screen.getByText("NATATAE ME!")).toBeInTheDocument();
  });
});
```

## Deployment

### Deploy to Vercel

#### Initial Setup

1. Install Vercel CLI:

```bash
pnpm add -g vercel
```

2. Link your project:

```bash
vercel link
```

3. Configure environment variables in Vercel Dashboard or CLI:

```bash
vercel env add NEXT_PUBLIC_CONVEX_URL
vercel env add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
# Add all other env variables
```

#### Deploy

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

#### Automatic Deployments

Connect your GitHub repository to Vercel for automatic deployments:

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure environment variables
4. Deploy!

Every push to `main` will trigger a production deployment.
Pull requests will get preview deployments.

### Deploy Convex Functions

```bash
# Deploy to production
pnpm convex:deploy

# Or use the Convex dashboard
npx convex dashboard
```

## Troubleshooting

### Common Issues

#### Node Version Issues

If you encounter Node version errors:

```bash
# Check current Node version
node --version

# Check required version
cat .nvmrc

# Switch to correct version
nvm use

# If version not installed
nvm install
```

#### pnpm Not Found

If pnpm is not found after installation:

```bash
# Re-enable Corepack
corepack enable

# Or reinstall globally
npm install -g pnpm@9.12.2

# Check PATH includes pnpm
which pnpm
```

#### "Module not found" errors

Clear node_modules and reinstall:

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

#### Port 3000 already in use

Kill the process or use a different port:

```bash
# Find and kill process on port 3000
lsof -i :3000
kill -9 <PID>

# Or use different port
PORT=3001 pnpm dev
```

#### Convex connection issues

1. Check your `NEXT_PUBLIC_CONVEX_URL` is correct
2. Ensure Convex dev server is running
3. Try `pnpm convex dev --once` to reinitialize

#### TypeScript errors in VS Code

1. Restart TypeScript server: Cmd+Shift+P → "TypeScript: Restart TS Server"
2. Check you're using workspace TypeScript version

### Performance Tips

- Use `sharp` for image optimization: `pnpm add sharp`
- Enable SWC minification in `next.config.js`
- Use React Server Components where possible
- Implement proper caching strategies
- Use `next/dynamic` for code splitting

## NVM Tips and Tricks

### Auto-switch Node Versions

Add this to your shell profile for automatic version switching:

```bash
# ~/.zshrc or ~/.bashrc
# Automatically call 'nvm use' when entering a directory with .nvmrc
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

## Best Practices

### Code Quality

- Run `pnpm lint:fix` before committing
- Ensure `pnpm type-check` passes
- Write tests for critical features
- Use conventional commits for clear history

### Security

- Never commit `.env.local`
- Use environment variables for all secrets
- Validate and sanitize user inputs
- Keep dependencies updated regularly

### Performance

- Optimize images with Next.js Image component
- Use static generation where possible
- Implement proper loading states
- Monitor bundle size with `@next/bundle-analyzer`

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Convex Documentation](https://docs.convex.dev/)
- [pnpm Documentation](https://pnpm.io/)
- [Vercel Documentation](https://vercel.com/docs)
- [Project GitHub](https://github.com/wewillcraft/natatae-me)

## Getting Help

- Open an issue on [GitHub](https://github.com/wewillcraft/natatae-me/issues)
- Check existing issues and discussions

---

Happy coding! May your builds be fast and your toilets be clean! 🚽⚡
