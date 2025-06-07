import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import Container from "@/components/Container";

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
    <Container className="px-10 md:pt-20 md:pb-10 min-h-screen prose">{children}</Container>
  );
} 