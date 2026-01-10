"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import { getAssetPath } from "@/lib/assets";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navigation() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/report`, label: t('report') },
    { href: `/${locale}/people`, label: t('people') },
    { href: `/${locale}/tasks`, label: t('tasks') },
    { href: `/${locale}/news`, label: t('news') },
    { href: `/${locale}/mission`, label: t('mission') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href={`/${locale}`} className="flex items-center space-x-3 space-x-reverse hover:opacity-80 transition-opacity">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src={getAssetPath("/logo.png")}
                alt={t('orgName')}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-gray-800">{t('orgName')}</div>
              <div className="text-xs text-gray-600">{t('orgSubtitle')}</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg transition-colors ${pathname === link.href
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-50"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg mb-1 transition-colors ${pathname === link.href
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-50"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 px-4">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
