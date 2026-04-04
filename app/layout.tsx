import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import Header from "../components/layout/Header";
import Particles from "../components/Particles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anuj Srivastava Portfolio",
  description: "Portfolio of Anuj Srivastava - Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <Particles />
        <Header />
        {children}
        <Toaster 
          position="bottom-right" 
          toastOptions={{
            style: {
              maxWidth: 'max-content',
            },
          }}
        />
      </body>
    </html>
  );
}
