import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Inova Nexel | GovTech";
const description =
  "Soluções inteligentes para governos mais eficientes, transparentes e conectados com a sociedade.";

export const metadata: Metadata = {
  metadataBase: new URL("https://inovanexel.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://inovanexel.com",
    siteName: "Inova Nexel",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
