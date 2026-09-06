import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "mindsCraft — Pragmatic UI/UX Design Agency for SaaS",
  description: "We help SaaS teams turn clunky MVPs and dev-designed tools into clean, usable products — with a dedicated designer on your side, starting tomorrow and moving fast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
