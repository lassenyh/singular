import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Singular",
  description: "Minimal Next.js 14 app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}