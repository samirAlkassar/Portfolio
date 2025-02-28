import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { About } from "@/components/about";
import "./globals.css";
import { Border } from "@/components/borderLine";
import { Projects } from "@/components/projects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samir | personal portfolio",
  description: "Hello, this is Sameer a web developer with 1 year of expeirnce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
         <div>
            <Header />
            <main>
                {children}
            </main>
            <Border />
            <About />
            <Border />
            <Projects />
            {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
