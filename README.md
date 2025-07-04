# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# City Finder

A Nuxt.js application for finding and managing city businesses.

## Environment Variables

### Required for Production

The application requires the following environment variables to be set in production:

1. **AUTH_SECRET**: A secure random string used for session encryption
   - This is required for the authentication system to work properly
   - Generate a secure random string (at least 32 characters)
   - Set this in your Cloudflare Workers environment variables

### Local Development

Create a `.env` file in the root directory with:

```env
NUXT_PUBLIC_SITE_URL=http://localhost:3000
AUTH_SECRET=your-secure-secret-key-here
```

## Deployment

1. Set the `AUTH_SECRET` environment variable in your Cloudflare Workers dashboard
2. Deploy using: `npm run deploy`

## Authentication Fix

If you're getting 500 errors on login in production, make sure:
1. The `AUTH_SECRET` environment variable is set
2. The secret is at least 32 characters long
3. The secret is consistent across deployments
