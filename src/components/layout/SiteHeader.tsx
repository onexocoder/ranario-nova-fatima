"use client";

import { useEffect, useState } from "react";
import { business } from "@/content/business";
import { whatsappUrl } from "@/lib/links";

const links = [["O Ranário", "#o-ranario"], ["Nossos Produtos", "#produtos"], ["Galeria", "#galeria"], ["Contato", "#contato"]];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  const contact = whatsappUrl();
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <a className="brand" href="#inicio" aria-label={`${business.name}, início`}>
        <span className="brand-mark" aria-hidden="true"><i /><i /></span>
        <span>Ranário<br />Nova Fátima</span>
      </a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-nav"><span /><span /><span className="sr-only">Menu</span></button>
      <nav id="site-nav" aria-label="Navegação principal">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        {contact && <a className="nav-cta" href={contact} target="_blank" rel="noreferrer">Fale conosco</a>}
      </nav>
    </header>
  );
}
