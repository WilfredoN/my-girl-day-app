# My Girl Day App

A almost simple application built with React, TypeScript, and Vite that utilizes Supabase for backend services.
Built for my girlfriend.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [pnpm](https://pnpm.io/) (v7 or higher)

## Setup

1. Clone the repository:

```bash
git clone https://github.com/WilfredoN/my-girl-day-app
cd my-girl-day-app
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables by copying the sample file:

```bash
cp .env.sample .env
```

4. Update the `.env` file with your specific values:

```
VITE_SUPABASE_URL=https://your-supabase-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
VITE_PHONE_NUMBER=your-phone-number
```

5. Press on the "Nova Poshta" logo to enter admin panel.

6. Enjoy.

## Development

Start the development server:

```bash
pnpm dev
```

The application will be available at [http://localhost:5173](http://localhost:5173).

## Building for Production

To create a production build:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Supabase
- Motion
