import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
} 