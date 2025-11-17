# Multi-Language Support Setup

This project now supports Arabic, French, and English using `next-intl`.

## What's Been Implemented

### 1. Package Installation
- ✅ Installed `next-intl` for internationalization

### 2. Configuration Files
- ✅ `i18n/config.ts` - Locale configuration (ar, fr, en)
- ✅ `i18n/request.ts` - Request configuration for next-intl
- ✅ Updated `next.config.ts` with next-intl plugin

### 3. Translation Files
- ✅ `messages/ar.json` - Arabic translations
- ✅ `messages/fr.json` - French translations
- ✅ `messages/en.json` - English translations

### 4. Updated Components
- ✅ `components/Navigation.tsx` - Now uses translations and includes language switcher
- ✅ `components/LanguageSwitcher.tsx` - New component for switching languages
- ✅ `components/ReportFab.tsx` - Updated with translations

### 5. Updated Pages
- ✅ `app/page.tsx` - Root redirect page with language detection
- ✅ `app/[locale]/layout.tsx` - Locale-specific layout with RTL/LTR support
- ✅ `app/[locale]/page.tsx` - Home page with full translations

### 6. Directory Structure
```
app/
├─ page.tsx (redirects to locale)
├─ layout.tsx (root layout)
└─ [locale]/
   ├─ layout.tsx (locale layout)
   ├─ page.tsx (home page)
   ├─ about/
   ├─ contact/
   ├─ mission/
   ├─ news/
   ├─ people/
   ├─ report/
   └─ tasks/
```

## How to Use

### Development Mode
```bash
npm run dev
```

Then navigate to:
- `http://localhost:3000/ar` - Arabic
- `http://localhost:3000/fr` - French
- `http://localhost:3000/en` - English

### Language Switcher
The language switcher appears in the navigation bar (globe icon). Click it to switch between languages.

### Adding Translations

To add translations for other pages:

1. Add translation keys to all three files in `messages/`:
   ```json
   {
     "pageName": {
       "title": "Your Title",
       "content": "Your content"
     }
   }
   ```

2. Update the page component:
   ```tsx
   'use client';
   
   import { useTranslations } from 'next-intl';
   
   export default function MyPage() {
     const t = useTranslations('pageName');
     
     return <h1>{t('title')}</h1>;
   }
   ```

## Features

- ✅ Three languages: Arabic (RTL), French (LTR), English (LTR)
- ✅ Automatic direction handling (RTL for Arabic, LTR for French/English)
- ✅ Language switcher component
- ✅ Browser language detection
- ✅ Translation-ready navigation
- ✅ Cairo font with Arabic support

## Next Steps

To complete the multi-language support:

1. **Add translations for remaining pages:**
   - about/page.tsx
   - contact/page.tsx
   - mission/page.tsx
   - news/page.tsx
   - people/page.tsx
   - report/page.tsx
   - tasks/page.tsx

2. **Pattern to follow:**
   ```tsx
   'use client';
   
   import { use } from 'react';
   import { useTranslations } from 'next-intl';
   
   export default function Page({ params }: { params: Promise<{ locale: string }> }) {
     const { locale } = use(params);
     const t = useTranslations('pageKey');
     
     return (
       // Use t('key') for all text
     );
   }
   ```

3. **For static export:**
   - The current setup works in development mode
   - For static export, you may need to adjust the configuration
   - Consider removing `output: 'export'` from next.config.ts if you want full i18n features

## File Structure

```
messages/
├─ ar.json (Arabic translations)
├─ fr.json (French translations)
└─ en.json (English translations)

i18n/
├─ config.ts (locale configuration)
└─ request.ts (next-intl request config)

components/
├─ Navigation.tsx (updated with i18n)
└─ LanguageSwitcher.tsx (new)

app/
├─ page.tsx (root redirect)
├─ layout.tsx (root layout)
└─ [locale]/
   ├─ layout.tsx (locale layout)
   └─ ... (all pages)
```

## Known Issues

1. **Static Export**: The current implementation works in development mode. For production static export, you may need to:
   - Remove `output: 'export'` from next.config.ts, OR
   - Implement a custom static generation strategy

2. **Remaining Pages**: The other pages (about, contact, mission, etc.) still have hardcoded Arabic text. They need to be updated to use translations following the pattern shown above.

## References

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Next.js Internationalization](https://nextjs.org/docs/app/building-your-application/routing/internationalization)

