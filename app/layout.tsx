import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { site } from "@/config/site";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
          geistMono.variable,
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
