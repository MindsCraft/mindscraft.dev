import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "mindsCraft — UX-Led Digital Product Studio | Design, Full-Stack Dev & Support",
  description: "We design intuitive, high-converting digital products, engineer them with modern full-stack code, and provide continuous post-launch support with zero handoff friction.",
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
        <link
          rel="preload"
          href="/fonts/Conigen-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Conigen-SemiBold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
