import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import ChatWidget from "@/app/components/ChatWidget";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anju | Frontend Developer",
  description: "Personal portfolio of Anju - building modern web experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        
        <div className="min-h-screen bg-[#0f172a] text-white">
          
        <Navbar />

          {/* 🔥 Main Content */}
          <main className="pt-20">
            {children}
            <ChatWidget />
          </main>

          {/* 🔥 Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
