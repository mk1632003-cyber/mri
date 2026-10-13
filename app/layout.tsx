import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import FloatingHeader from "@/components/FloatingHeader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Mritunjay Kumar — Creative Developer & Technologist",
  description:
    "Portfolio of Mritunjay Kumar — creative developer, digital designer, and technologist building seamless digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <SmoothScroll />
        <CustomCursor />
        {/* Initial top navbar at top (scrollY <= 300) */}
        <Navbar />
        {/* Jingjing Han floating pill on scroll (scrollY > 300) */}
        <FloatingHeader />
        {children}
      </body>
    </html>
  );
}
