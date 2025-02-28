import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import "./globals.css";

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
            <main className="pt-[var(--navigation-hieght)] bg-page-gradiant">
                {children}
            </main>
            {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
