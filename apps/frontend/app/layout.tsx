import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "المنظمة الوطنية للوقاية من الفساد وحماية الممتلكات العامة",
  description: "المكتب الولائي للمنظمة الوطنية للوقاية من الفساد وحماية الممتلكات العامة",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
