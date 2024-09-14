import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FloatingMenu from "@/components/FloatingMenu/FloatingMenu";
import { AccessibilityProvider } from "@/contexts/AccessibilityContetxt";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Protera RPG",
  description: "Welcome to Protera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AccessibilityProvider>
        <body className={inter.className}>
          <FloatingMenu />
          {children}
        </body>
      </AccessibilityProvider>
    </html>
  );
}
