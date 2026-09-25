import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 - Airbnb Clone',
  description: 'Original desktop Airbnb clone created for take-home assignment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen bg-white text-[#222222] selection:bg-[#FF385C] selection:text-white">
        {children}
      </body>
    </html>
  );
}
