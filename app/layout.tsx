import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Using Geist fonts for a modern, clean look
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Delance Drywall & Painting LLC | Orlando's Premier Drywall & Painting Experts",
  description: "Professional drywall installation, repair, and painting services in Orlando, FL and Central Florida. Level 5 finishes, texture work, interior & exterior painting. Licensed & insured. Call 407-274-3487 for a free estimate.",
  keywords: "drywall, painting, Orlando, Central Florida, drywall installation, drywall repair, interior painting, exterior painting, texture removal, level 5 finish, skim coat",
  openGraph: {
    title: "Delance Drywall & Painting LLC",
    description: "Professional drywall and painting services in Orlando, FL. Licensed & insured experts delivering flawless finishes.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

