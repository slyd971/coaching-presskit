import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Coaching Press Kit",
  description: "Template premium et duplicable pour coach sportif.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
