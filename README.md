# Pocket Counter

A small React toy: increase or decrease a number between 0 and 99, see the last
change time, or reset it. State lives in memory; refreshing starts over.
No API, account, environment variables, or external services are required.
Written independently from scratch, without private application code or copied
third-party boilerplate.

## Run

Use Node.js 22 and npm 10.

```sh
npm ci --ignore-scripts
npm run dev
```

Open http://localhost:5173.

```sh
npm test
npm run build
npm run preview
# Or:
docker build -t pocket-counter .
docker run --rm -p 8080:80 pocket-counter
```

The container serves the page at http://localhost:8080.

## Deliberately small

- `demo/counter.tsx`: one component and a tiny Zustand store.
- `demo/entry.tsx`: React entry point.
- `demo/style.css`: plain CSS.
- `demo/counter.test.tsx`: interaction checks.

Uses React/React DOM, Zustand, Day.js, React Icons, Vite, and TypeScript.
Tests use Vitest, Testing Library, and jsdom. The larger dependency manifest is
intentionally retained as a dependency fixture; most packages are unused.
Installation skips lifecycle scripts; Vite uses its platform-specific esbuild
package. This frontend is independent of the companion NestJS demo.
