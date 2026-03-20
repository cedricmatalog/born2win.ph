import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Born2WinPh — Asia's #1 Forex Trading Education",
  description: "Learn forex trading from the most trusted coaches in Asia. Free 3-hour online workshop available worldwide.",
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
