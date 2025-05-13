import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabiju Atendimento",
  description: "Sistema de atendimento Gabiju Transportes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col bg-[#111b21]">
          {children}
        </main>
      </body>
    </html>
  );
} 