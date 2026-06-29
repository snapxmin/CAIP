# CAIP

CAIP is a Coding Agent Intelligence Platform portal MVP.

It positions CAIP as infrastructure for the Coding Agent era: a platform that
helps developers, engineering managers, product managers, and decision makers
evaluate, govern, operationalize, and measure coding agents.

## MVP Focus

- Agent Benchmark Center: compare agents by real engineering scenarios.
- Workflow Marketplace: turn expert prompts and workflows into reusable assets.
- Enterprise ROI Dashboard: measure contribution, efficiency, governance cost,
  and adoption impact.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint

## Getting Started

```bash
npm install
npm run dev
```

Open <http://localhost:3000> to view the landing page.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
```

## Project Structure

```text
app/
  layout.tsx       Root layout and metadata
  page.tsx         Landing page composition
  globals.css      Global Tailwind styles
components/
  landing/         Landing page sections
content/
  landing.ts       Structured Chinese positioning copy
```