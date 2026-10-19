import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/core/smooth-scroll';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const fontMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hold Media | AI-Native Spatial Computing & 3D Platform',
  description:
    'Hold Media is an AI-native spatial computing studio and procedural 3D platform built on the Claude API and Model Context Protocol (MCP), automating shader synthesis, transhuman character pipelines, and virtual worlds.',
  keywords: [
    '3D Design',
    'AI-Native 3D',
    'Hold Media',
    'Horia Moldovean',
    'Model Context Protocol',
    'Claude Startups',
    'Unreal Engine 5.4',
    'Octane Render',
    'Digital Humans',
    'Spatial Computing',
  ],
  authors: [{ name: 'Horia Moldovean (Hold Media)' }],
  openGraph: {
    title: 'Hold Media | AI-Native Spatial Computing & 3D Platform',
    description:
      'Hold Media is an AI-native spatial computing studio and procedural 3D platform built on the Claude API & MCP.',
    url: 'https://holdmedia.studio',
    siteName: 'Hold Media',
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#010102',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fontMono.variable}`}>
      <body className={`${inter.className} min-h-screen bg-transparent antialiased selection:bg-[#FFC000] selection:text-black font-sans`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
