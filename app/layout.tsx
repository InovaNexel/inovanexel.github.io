import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import "./hero-logo.css";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const title = "Inova Nexel | GovTech";
const description =
  "Soluções inteligentes para governos mais eficientes, transparentes e conectados com a sociedade.";

export const metadata: Metadata = {
  metadataBase: new URL("https://inovanexel.com"),
  title,
  description,
  referrer: "strict-origin-when-cross-origin",
  formatDetection: { telephone: false, email: false, address: false },
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

export const viewport: Viewport = {
  themeColor: "#03152f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#conteudo"
          className="fixed left-4 top-4 z-[200] -translate-y-24 rounded-full bg-mint px-5 py-3 text-sm font-semibold text-ink focus-visible:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          Pular para o conteúdo
        </a>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
