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

  const className = `${inter.className} bg-video flex flex-col min-h-screen justify-between`;

  return (
    <html lang="en">
      <div className={className}>
        <iframe className={'bg-video__content hide-on-mobile'} src={'https://www.youtube-nocookie.com/embed/rDrjQyatgXQ?controls=0&autoplay=1&mute=1&playsinline=1&loop=1?modestbranding=1&rel=0'} />
        <div className={'overlay-text'}>
          {children}
        </div>
        <Footer />
      </div>
    </html>
  );
}
