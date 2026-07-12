import Footer from "@/components/shared/footer/Footer";
import NavBar from "@/components/shared/navbar/NavBar";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EventBridge | Discover & Manage Events Seamlessly",
  description:
    "EventBridge is a modern event management platform that helps users discover, explore, and manage events with ease. Browse upcoming events, view detailed information, and securely manage event listings through an intuitive and responsive interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
