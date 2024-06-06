import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Decoded Website",
  description: "Portfolio for Developer Bubba Godinet",
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
