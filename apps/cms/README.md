# CMS Backend

Strapi 5 headless CMS for ONPCP.

## First-Time Setup

1. Start the development server:
```bash
npm run develop
```

2. Open http://localhost:1337/admin

3. Create your admin account

4. Configure content types (see main README.md)

## Development

```bash
npm run develop
```

## Building for Production

```bash
npm run build
npm run start
```

## Environment Variables

Copy `.env.example` to `.env` and configure all variables.

Generate secure keys:
```bash
npm run strapi generate
```

## Content Types

See the main README.md for detailed content type schemas.

## API Tokens

Generate tokens in Settings → API Tokens for frontend access.
