import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { site } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  metadataBase: new URL(site.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          GeistMono.variable,
          GeistSans.variable,
          "antialiased bg-background text-foreground font-mono",
          "text-sm",
        )}
      >
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
