# NurtureNet frontend

The NurtureNet frontend is built with Next.js, React, TypeScript, and Tailwind
CSS. It is the foundation for a child-focused digital safety and content
curation application.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the temporary
verification page.

The backend API URL is configured with `NEXT_PUBLIC_API_URL` in `.env.local`.

## Checks

Run the available quality checks with:

```bash
npm run lint
npx tsc --noEmit
npm run build
```
