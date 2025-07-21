import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/sections/header";
import { About } from "@/components/sections/about";
import "./globals.css";
import { Border } from "@/components/borderLine";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { PageContextProvider } from "@/components/context/pageContext";

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
  icons : {
    icon: "/samir.jpg",
  }
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
          <PageContextProvider>
            <Header />
            <main>
              {children}
            </main>
            <Border />
            <About />
            <Border />
            <Projects />
            <Border />
            <Skills />
            <Border />
            <Contact />
            <Border />
            <Footer />
          </PageContextProvider>
        </div>
      </body>
    </html>
  );
}
