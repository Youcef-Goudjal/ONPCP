'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { defaultLocale } from '@/i18n/config';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.split('-')[0];
    const supportedLang = ['ar', 'fr', 'en'].includes(browserLang) ? browserLang : defaultLocale;
    router.replace(`/${supportedLang}`);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
