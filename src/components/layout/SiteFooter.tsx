import { business } from "@/content/business";

export function SiteFooter() {
  return <footer className="footer"><div className="footer-brand">Ranário <em>Nova Fátima</em></div><div className="footer-links"><a href="#o-ranario">O Ranário</a><a href="#produtos">Produtos</a><a href="#galeria">Galeria</a><a href="#contato">Contato</a></div><p>{business.city} — {business.state}<br />© {new Date().getFullYear()} {business.name}</p></footer>;
}
