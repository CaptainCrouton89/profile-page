import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const getSiteUrl = (): string => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  return 'https://silasrhyneer.com';
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Silas Rhyneer | Portfolio",
  description: "Software Engineer & AI Specialist",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Silas Rhyneer | Portfolio",
    description: "Software Engineer & AI Specialist",
    images: [
      {
        url: '/profile.png',
        width: 1200,
        height: 630,
        alt: 'Silas Rhyneer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Silas Rhyneer | Portfolio",
    description: "Software Engineer & AI Specialist",
    images: ['/profile.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        <Header />
        <main style={{ paddingTop: "60px" }}>
          {children}
        </main>
        <ConditionalFooter />
      </body>
    </html>
  );
}
