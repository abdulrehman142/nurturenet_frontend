import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NurtureNet",
  description: "Safer digital experiences for growing minds.",
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
