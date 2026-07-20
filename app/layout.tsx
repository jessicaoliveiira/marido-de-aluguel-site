import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileContactBar from "@/components/MobileContactBar";
import SchemaOrg from "@/components/SchemaOrg";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL("https://maridodealuguelsp.com.br"),
  title: {
    default: `Encanador em ${siteConfig.city} – Serviços Hidráulicos`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `Serviços hidráulicos em ${siteConfig.city}: vazamentos, desentupimento, instalações, caixas-d’água e manutenção. Atendimento rápido e orçamento transparente.`,
  keywords: [
    `encanador em ${siteConfig.city}`,
    `serviços hidráulicos em ${siteConfig.city}`,
    `caça vazamentos ${siteConfig.city}`,
    `desentupimento ${siteConfig.city}`,
    `instalação hidráulica ${siteConfig.city}`,
    `encanador ${siteConfig.city}`,
    `manutenção hidráulica ${siteConfig.city}`,
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://maridodealuguelsp.com.br",
    siteName: siteConfig.name,
    title: `Encanador em ${siteConfig.city} – Serviços Hidráulicos`,
    description: `Vazamentos, desentupimento, instalações e manutenção hidráulica em ${siteConfig.city}.`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `Serviços hidráulicos em ${siteConfig.city}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Encanador em ${siteConfig.city}`,
    description: `Serviços hidráulicos rápidos e profissionais em ${siteConfig.city}. Orçamento grátis!`,
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://maridodealuguelsp.com.br",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <SchemaOrg />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col pb-20 md:pb-0">
        <Header />
        <main className="flex-1 pt-[68px]">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileContactBar />
      </body>
    </html>
  );
}
