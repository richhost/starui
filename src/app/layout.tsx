import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/header";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
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
      className={`${geistSans.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
