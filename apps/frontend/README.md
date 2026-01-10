# Frontend Setup

Next.js 16 frontend application for ONPCP.

## Features

- Multi-language support (Arabic, English, French)
- RTL support for Arabic
- Strapi CMS integration
- Modern UI with Tailwind CSS
- Radix UI components

## Development

```bash
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your-token-here
```

## Building

```bash
npm run build
```

## Deployment

See main README.md for deployment instructions.

