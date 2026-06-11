import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SchemaOrg from "@/components/SchemaOrg";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL("https://maridodealuguelsp.com.br"),
  title: {
    default: `Marido de Aluguel em ${siteConfig.city} – Serviços Rápidos e Profissionais`,
    template: `%s | Marido de Aluguel ${siteConfig.city}`,
  },
  description: `Marido de Aluguel em ${siteConfig.city}. Pequenos reparos, instalação elétrica, hidráulica, montagem de móveis e pintura. Atendimento rápido, preço justo e profissional de confiança. Solicite seu orçamento!`,
  keywords: [
    `marido de aluguel em ${siteConfig.city}`,
    "marido de aluguel perto de mim",
    `serviços residenciais em ${siteConfig.city}`,
    `pequenos reparos ${siteConfig.city}`,
    `eletricista residencial ${siteConfig.city}`,
    `encanador ${siteConfig.city}`,
    `montagem de móveis ${siteConfig.city}`,
    `pintor residencial ${siteConfig.city}`,
  ],
  authors: [{ name: `Marido de Aluguel ${siteConfig.city}` }],
  creator: `Marido de Aluguel ${siteConfig.city}`,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://maridodealuguelsp.com.br",
    siteName: `Marido de Aluguel ${siteConfig.city}`,
    title: `Marido de Aluguel em ${siteConfig.city} – Serviços Rápidos e Profissionais`,
    description: `Serviços residenciais em ${siteConfig.city}: reparos, elétrica, hidráulica, montagem de móveis e pintura. Atendimento rápido e preço justo!`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `Marido de Aluguel em ${siteConfig.city}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Marido de Aluguel em ${siteConfig.city}`,
    description: `Serviços residenciais rápidos e profissionais em ${siteConfig.city}. Orçamento grátis!`,
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
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-[68px]">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
