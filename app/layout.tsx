import "./globals.css";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import React from "react";
import type { Metadata } from "next";

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
  title: "Motif",
  description: "Professional networking for musicians",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-pretty bg-background text-foregroundMuted antialiased`}
      >
        <div className="mx-auto max-w-screen-xl px-4 py-4">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            {children}
          </ThemeProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
