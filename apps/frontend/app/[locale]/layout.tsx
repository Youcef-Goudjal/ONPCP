import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Cairo } from "next/font/google";
import Image from "next/image";
import { notFound } from 'next/navigation';
import Navigation from "@/components/Navigation";
import ReportFab from "@/components/ReportFab";
import { getAssetPath } from "@/lib/assets";
import { locales, localeDirections } from '@/i18n/config';
import "../globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const direction = localeDirections[locale as keyof typeof localeDirections];

  return (
    <html lang={locale} dir={direction}>
      <body className={`${cairo.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <ReportFab />
          <footer className="bg-gray-900 text-white py-12 mt-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative w-24 h-24">
                  <Image
                    src={getAssetPath("/logo.png")}
                    alt="شعار المنظمة"
                    fill
                    className="object-contain opacity-90"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">
                    {(messages as any).footer.orgName}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {(messages as any).footer.subtitle}
                  </p>
                </div>
                <div className="border-t border-gray-700 w-full pt-6">
                  <p className="text-sm">
                    © {new Date().getFullYear()} {(messages as any).footer.copyright}
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

