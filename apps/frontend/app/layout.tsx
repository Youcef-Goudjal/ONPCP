import type { Metadata } from "next";
import { getAssetPath } from "@/lib/assets";

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
}: {
  children: React.ReactNode;
}) {
  return children;
}
