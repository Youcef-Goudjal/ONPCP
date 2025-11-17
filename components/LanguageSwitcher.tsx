"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames, type Locale } from '@/i18n/config';
import { Globe } from 'lucide-react';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLocaleChange = (newLocale: Locale) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    const newPath = `/${newLocale}${pathWithoutLocale || ''}`;
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 space-x-reverse px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Change language"
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium">{localeNames[locale as Locale]}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className={`w-full text-right px-4 py-2 hover:bg-gray-100 transition-colors ${
                  locale === loc ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700'
                }`}
              >
                {localeNames[loc]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

