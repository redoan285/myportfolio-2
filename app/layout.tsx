import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Redoan Ahmad | Full-Stack Web Developer",
  description: "Full-Stack Developer specializing in React, Next.js, Node.js and Tailwind CSS. Building fast, scalable, modern web experiences.",
  keywords: ["Redoan Ahmad", "Full-Stack Developer", "React", "Next.js", "Web Developer", "Bangladesh"],
  authors: [{ name: "Redoan Ahmad" }],
  creator: "Redoan Ahmad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://redoanahmad.dev",
    title: "Redoan Ahmad | Full-Stack Web Developer",
    description: "Full-Stack Developer specializing in React, Next.js, Node.js and Tailwind CSS.",
    siteName: "Redoan Ahmad Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Redoan Ahmad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Redoan Ahmad | Full-Stack Web Developer",
    description: "Full-Stack Developer specializing in React, Next.js, Node.js and Tailwind CSS.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://redoanahmad.dev"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
