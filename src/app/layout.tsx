import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ViewTransitions } from "next-view-transitions";
import Footer from "@/components/Footer";
import { Toaster } from "sonner"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

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

      <html lang="en" suppressHydrationWarning>
          <ThemeProvider attribute="class"  >
        <body className={`${inter.className} antialiased bg-woodsmoke-950   `}>
          <Navbar />
            {children}
          <Footer />
          <Toaster position="top-center" />
        </body>
          </ThemeProvider>
      </html>
    </ViewTransitions>
  );
} 