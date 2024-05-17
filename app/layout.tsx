import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michal Shelenberg",
  description:
    "Web developer, specializing in Next.js applications, tools, and games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-between uppercase tracking-widest pt-6 px-6 md:px-12">
          <Link href={"/"} className="hover:text-black transition">
            <h1>Michal Shelenberg</h1>
          </Link>
          {/* <nav className="space-x-6 hidden md:block">
            <Link href={"/"} className="hover:text-black transition">
              Side projects
            </Link>
          </nav> */}
        </header>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
