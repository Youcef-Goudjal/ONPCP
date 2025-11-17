import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ReportFab from "@/components/ReportFab";
import { getAssetPath } from "@/lib/assets";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

const logoPath = getAssetPath("/logo.png");

export const metadata: Metadata = {
  title: "المنظمة الوطنية للوقاية من الفساد وحماية الممتلكات العامة",
  description: "المكتب الولائي للمنظمة الوطنية للوقاية من الفساد وحماية الممتلكات العامة",
  icons: {
    icon: logoPath,
    apple: logoPath,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} antialiased`}>
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
                  المنظمة الوطنية للوقاية من الفساد وحماية الممتلكات العامة
                </h3>
                <p className="text-sm text-gray-400">
                  المكتب الولائي - نزاهة، شفافية، مسؤولية
                </p>
              </div>
              <div className="border-t border-gray-700 w-full pt-6">
                <p className="text-sm">
                  © {new Date().getFullYear()} جميع الحقوق محفوظة
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
