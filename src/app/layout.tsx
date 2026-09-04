import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naman Soni — Creator / Builder",
  description: "The portfolio of Naman Soni, creator of LND AI, Talk AI Companion, NewEra AI Agent, and other useful AI products.",
  metadataBase: new URL("https://portfolio-naman.newera.page.dev"),
  openGraph: {
    title: "Naman Soni — Creator / Builder",
    description: "Building AI products and agent experiences that feel useful.",
    url: "https://portfolio-naman.newera.page.dev",
    siteName: "Naman Soni",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
