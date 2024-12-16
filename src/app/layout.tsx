import type { Metadata } from "next";
import { JetBrains_Mono, Mona_Sans } from "next/font/google";
import { Header } from "@/components/header";

import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
  weight: "variable",
});
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Star UI",
  description:
    "Beautiful Tailwind CSS v4 and Motion React components, Copy, Paste, Customize, make your website look stunning.",
  keywords: [
    "UI",
    "Components",
    "Motion React",
    "Tailwind CSS v4",
    "Landing Page",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${monaSans.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
