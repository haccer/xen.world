import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XEN WORLD",
  description: "Welcome to the Xen World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const className = `${inter.className} flex flex-col min-h-screen justify-between`;

  return (
    <html lang="en">
      <div className={className}>
        {children}
        <Footer />
      </div>
    </html>
  );
}
