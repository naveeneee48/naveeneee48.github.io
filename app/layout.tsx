import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://naveeneee48.github.io"),
  title: "Naveen Kumar | Senior DevOps Engineer & SRE",
  description:
    "Senior DevOps & SRE Engineer with 7+ years building scalable, self-healing cloud infrastructure across AWS, Azure and Kubernetes, powered by AIOps and agentic AI.",
  authors: [{ name: "Naveen Kumar" }],
  openGraph: {
    title: "Naveen Kumar | Senior DevOps Engineer & SRE",
    description:
      "Senior DevOps & SRE Engineer specializing in AIOps, self-healing infrastructure, and agentic AI automation.",
    url: "https://naveeneee48.github.io/",
    siteName: "Naveen Kumar | Senior DevOps Engineer & SRE",
    images: ["/img/preview.jpg"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    site: "@naveeneee48",
    title: "Senior DevOps Engineer | SRE | AIOps | Agentic AI",
    description:
      "Senior DevOps & SRE Engineer specializing in AIOps, self-healing infrastructure, and agentic AI automation.",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon/apple-icon-180x180.png",
  },
  manifest: "/favicon/manifest.json",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased bg-background text-foreground selection:bg-neon-purple selection:text-white overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
