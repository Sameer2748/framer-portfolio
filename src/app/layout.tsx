import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ViewTransitions } from "next-view-transitions";
import Footer from "@/components/Footer";
import {Toaster} from "sonner"

const inter = Inter({subsets: ['latin'],weight:['400', '500' ,'600', '700','800','900']})

export const metadata: Metadata = {
  title: "Sameer Rao",
  description: "Portfolio which show case my Skills with minimal and smooth microinteractions, perfect for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      
    <html lang="en">
      <body className={`${inter.className} antialiased bg-neutral-100`}>
<Navbar />
        {children}
              <Footer/>
<Toaster position="top-center"/>
      </body>
    </html>
    </ViewTransitions>
  );
} 