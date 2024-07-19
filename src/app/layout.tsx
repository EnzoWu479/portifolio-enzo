import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { sansMono } from "./fonts";
import { TooltipSetup } from "@/lib/tooltip";
import { ToastSetup } from "@/lib/toast";

export const metadata: Metadata = {
  title: "Portfólio | Enzo",
  description: "Portfólio de Enzo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={sansMono.className}>
        {children}
        <TooltipSetup />
        <ToastSetup />
      </body>
    </html>
  );
}
