# ONPCP Monorepo

المنظمة الوطنية للوقاية من الفساد وحماية الممتلكات العامة

A modern full-stack application with Next.js frontend and Strapi CMS backend in a monorepo architecture.

## 📦 Project Structure

```
ONPCP/
├── apps/
│   ├── frontend/          # Next.js 16 frontend application
│   └── cms/              # Strapi 5 CMS backend
├── packages/
│   └── types/            # Shared TypeScript types
├── package.json          # Root workspace configuration
└── README.md            # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js 20 or higher
- npm 10 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/ONPCP.git
cd ONPCP

# Install all dependencies
npm install

# Build shared packages
npm run build --workspace=packages/types
```

### Development

Start both frontend and CMS in development mode:

```bash
npm run dev
```

This will start:
- **Frontend**: http://localhost:3000
- **CMS Admin**: http://localhost:1337/admin

Or run them individually:

```bash
# Start only frontend
npm run dev:frontend

# Start only CMS
npm run dev:cms
```

### First-Time CMS Setup

1. Start the CMS: `npm run dev:cms`
2. Open http://localhost:1337/admin
3. Create your admin user account
4. Configure content types (see [CMS Configuration](#cms-configuration) below)

## 📋 Available Scripts

### Root Level (Monorepo)

- `npm run dev` - Start both apps in development mode
- `npm run build` - Build all apps for production
- `npm run start` - Start all apps in production mode
- `npm run dev:frontend` - Start only frontend
- `npm run dev:cms` - Start only CMS
- `npm run lint` - Lint frontend code
- `npm run clean` - Remove all node_modules
- `npm run setup` - Fresh install and build

### Frontend (`apps/frontend`)

```bash
cd apps/frontend

npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### CMS (`apps/cms`)

```bash
cd apps/cms

npm run develop  # Start development server
npm run build    # Build admin panel
npm run start    # Start production server
npm run strapi   # Run Strapi CLI commands
```

## 🔧 Configuration

### Frontend Environment Variables

Create `apps/frontend/.env.local`:

```bash
# Strapi API Configuration
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=

# For static export (GitHub Pages)
# STATIC_EXPORT=true
```

### CMS Environment Variables

Create `apps/cms/.env` (copy from `.env.example`):

```bash
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys-here
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret
```

Generate secure keys using:
```bash
cd apps/cms
npm run strapi generate
```

## 📊 CMS Configuration

### Enable i18n Plugin

1. Go to Settings → Internationalization
2. Add locales:
   - Arabic (ar) - Default
   - English (en)
   - French (fr)

### Create Content Types

#### 1. Articles (Collection Type)

For news and announcements:

- **title** (Text, required)
- **slug** (UID, required, based on title)
- **excerpt** (Text, long)
- **content** (Rich Text, required)
- **image** (Media, single image)
- **category** (Enumeration: news, events, announcements)
- ✅ Enable Internationalization

#### 2. People (Collection Type)

For team members:

- **name** (Text, required)
- **position** (Text, required)
- **bio** (Rich Text)
- **email** (Email)
- **phone** (Text)
- **image** (Media, single image)
- **order** (Number, integer)
- ✅ Enable Internationalization

#### 3. Pages (Collection Type)

For dynamic pages:

- **title** (Text, required)
- **slug** (UID, required)
- **content** (Rich Text, required)
- ✅ Enable Internationalization

#### 4. Reports (Collection Type)

For corruption reports:

- **title** (Text, required)
- **description** (Text, long, required)
- **category** (Enumeration: corruption, waste, abuse, other)
- **status** (Enumeration: pending, reviewing, resolved, rejected)
- **reference** (Text, unique)
- **submittedAt** (DateTime)

### Configure API Permissions

1. Go to Settings → Users & Permissions → Roles → Public
2. Enable permissions:
   - **Articles**: find, findOne
   - **People**: find, findOne
   - **Pages**: find, findOne
   - **Reports**: create (for submissions)

### Generate API Token

1. Go to Settings → API Tokens → Create new
2. Name: "Frontend Access"
3. Type: Read-Only (or Full Access if needed)
4. Copy the token to `apps/frontend/.env.local`

## 🌐 Frontend Integration

### Using Strapi Data

The frontend includes a complete Strapi API client in `apps/frontend/lib/strapi.ts`:

```typescript
import { getEntries, getStrapiImageUrl } from '@/lib/strapi';
import type { NewsArticle } from '@onpcp/types';

// Fetch articles
const articles = await getEntries<NewsArticle>('articles', {
  locale: 'ar',
  populate: ['image'],
  sort: ['publishedAt:desc'],
  pagination: { limit: 10 },
});

// Get image URL
const imageUrl = getStrapiImageUrl(article.attributes.image?.data?.attributes.url);
```

### Example: News Page

See `apps/frontend/app/[locale]/news/page.tsx` for a complete example of fetching and displaying Strapi content.

## 🏗️ Technology Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **next-intl** - Internationalization (Arabic, English, French)
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

### Backend
- **Strapi 5** - Headless CMS
- **SQLite** - Database (development)
- **TypeScript** - Type-safe development

### Monorepo
- **npm workspaces** - Dependency management
- **Shared types package** - Type safety across apps

## 📱 Features

- ✨ Modern, responsive UI
- 🌐 Full RTL support for Arabic
- 🌍 Multi-language (ar, en, fr)
- 📰 Dynamic news and activities
- 👥 Team member profiles
- 📝 Anonymous corruption reporting
- 🔒 Secure API integration
- ⚡ Fast performance with Next.js 16
- 🎨 Beautiful UI with Tailwind CSS

## 🚢 Deployment

### Frontend Deployment

#### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd apps/frontend
vercel
```

Environment variables to set:
- `NEXT_PUBLIC_STRAPI_URL`
- `STRAPI_API_TOKEN`

#### Option 2: Static Export (GitHub Pages)

```bash
# Set environment variable
export STATIC_EXPORT=true

# Build
npm run build:frontend

# Output will be in apps/frontend/out/
```

### CMS Deployment

#### Railway

1. Create new project on Railway
2. Connect your repository
3. Set root directory: `apps/cms`
4. Set environment variables from `.env.example`
5. Deploy

#### Render / DigitalOcean / Heroku

Similar steps:
- Build command: `npm run build --workspace=apps/cms`
- Start command: `npm run start --workspace=apps/cms`
- Set environment variables

**Production Database**: Switch from SQLite to PostgreSQL for production:

```bash
# In apps/cms
npm install pg
```

Update `apps/cms/config/database.ts` for PostgreSQL configuration.

## 🧪 Development Tips

### Hot Reload

Both apps support hot reload in development:
- Frontend: Auto-reloads on file changes
- CMS: Auto-reloads on file changes

### Shared Types

When adding new content types in Strapi:

1. Update type definitions in `packages/types/src/index.ts`
2. Rebuild types: `npm run build --workspace=packages/types`
3. Types are automatically available in frontend via `@onpcp/types`

### Adding Dependencies

```bash
# Add to frontend
npm install <package> --workspace=apps/frontend

# Add to CMS
npm install <package> --workspace=apps/cms

# Add to shared types
npm install <package> --workspace=packages/types
```

## 📚 Documentation Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Strapi Documentation](https://docs.strapi.io)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app)

## 🔍 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 1337
lsof -ti:1337 | xargs kill -9
```

### Workspace Issues

```bash
# Clean and reinstall
npm run clean
npm install
npm run setup
```

### Strapi Admin Can't Login

Reset admin password:
```bash
cd apps/cms
npm run strapi admin:reset-user-password
```

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Commit with clear messages
5. Submit a pull request

## 📄 License

© 2026 المنظمة الوطنية للوقاية من الفساد وحماية الممتلكات العامة. All rights reserved.

## 📞 Support

For help and support:
- Email: (to be added)
- Phone: (to be added)
- Issues: GitHub Issues

---

Built with ❤️ for transparency and anti-corruption efforts.
