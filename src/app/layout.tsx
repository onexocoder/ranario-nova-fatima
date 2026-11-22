import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "./globals.css";
import "./media.css";
import { business } from "@/content/business";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Ranário Nova Fátima | Conheça o ranário e nossos produtos",
  description: "Conheça o Ranário Nova Fátima, uma criação familiar de rãs com 10 anos de experiência. Saiba mais sobre vendas e o curso preparatório de ranicultura.",
  metadataBase: undefined,
  openGraph: { title: business.name, description: "Criação familiar de rãs, curso preparatório e atendimento em Nova Fátima, Paraná.", locale: "pt_BR", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@type": "LocalBusiness", name: business.name, address: { "@type": "PostalAddress", streetAddress: business.address, addressLocality: business.city, addressRegion: business.state, addressCountry: "BR" }, telephone: business.phoneNumbers[0] };
  return <html lang="pt-BR"><body><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><SiteHeader /><div id="conteudo">{children}</div><SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>;
}
