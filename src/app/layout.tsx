import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Template",
  description: "A production-ready Next.js 15.5.9 template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
