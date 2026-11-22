"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { business } from "@/content/business";
import { copy } from "@/content/copy";
import { gallery } from "@/content/gallery";
import { products, type Product } from "@/content/products";
import { mapsUrl, phoneUrl, whatsappUrl } from "@/lib/links";
import { Button } from "@/components/ui/Button";
import { WaterLines } from "@/components/motion/WaterLines";
import { FrogScene } from "@/components/motion/FrogScene";

function SectionTitle({ eyebrow, children, light = false }: { eyebrow: string; children: React.ReactNode; light?: boolean }) {
  return <div className={`section-title reveal ${light ? "is-light" : ""}`}><p className="eyebrow"><span />{eyebrow}</p><h2>{children}</h2></div>;
}

function ProductCard({ product }: { product: Product }) {
  const wa = whatsappUrl(`Olá! Gostaria de saber mais sobre ${product.name}.`);
  return <article className="product-card"><div className="product-media">{product.photo ? <Image src={product.photo} alt="" fill sizes="(max-width: 560px) 100vw, 33vw" /> : <span>Imagem em preparação</span>}</div><p className="eyebrow">{product.category ?? "PRODUTO"}</p><h3>{product.name}</h3>{product.description && <p>{product.description}</p>}{product.price != null && <strong>{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</strong>}{wa && <Button href={wa} target="_blank" rel="noreferrer" tone="outline">Consultar produto</Button>}</article>;
}

export function Landing() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-line > span", { yPercent: 105, duration: 1.2, stagger: .12, ease: "power4.out", delay: .15 });
      gsap.from(".hero-copy > *:not(h1)", { y: 28, opacity: 0, duration: .8, stagger: .1, ease: "power3.out", delay: .65 });
      gsap.to(".hero-orb", { scale: 1.14, yPercent: 8, scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.1 } });
      gsap.to(".hero-copy", { yPercent: 18, opacity: .25, scrollTrigger: { trigger: ".hero", start: "35% top", end: "bottom top", scrub: .8 } });
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => gsap.from(el, { y: 70, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 86%" } }));
      gsap.from(".about-visual", { clipPath: "inset(18% 16% 18% 16% round 48%)", scale: .9, scrollTrigger: { trigger: ".about", start: "top 72%", end: "center 45%", scrub: .9 } });
      gsap.to(".about-visual .water-lines", { rotation: 22, scale: 1.15, scrollTrigger: { trigger: ".about", start: "top bottom", end: "bottom top", scrub: 1.2 } });
      const mm = gsap.matchMedia();
      mm.add("(min-width: 900px)", () => {
        const panels = gsap.utils.toArray<HTMLElement>(".story-moment");
        panels.slice(1).forEach((panel) => gsap.from(panel, { opacity: 0, y: 80, scrollTrigger: { trigger: panel, start: "top 78%", end: "top 45%", scrub: .8 } }));
      });
      gsap.utils.toArray<HTMLElement>(".gallery-art").forEach((el, i) => gsap.to(el, { yPercent: i % 2 ? -8 : 8, scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1 } }));
      gsap.utils.toArray<HTMLElement>(".gallery-photo").forEach((el, i) => gsap.from(el, { y: i % 2 ? 90 : 55, opacity: 0, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } }));
    }, root);
    return () => ctx.revert();
  }, []);

  const wa = whatsappUrl(); const map = mapsUrl();
  return <main ref={root}>
    <section className="hero" id="inicio">
      {business.heroPoster && <Image className="hero-photo" src={business.heroPoster} alt="Vista externa do Ranário Nova Fátima" fill priority sizes="100vw" />}
      <div className="hero-orb" aria-hidden="true"><div className="orb-shine" /><WaterLines /><FrogScene className="hero-frog" /></div>
      <div className="lily-field" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow"><span />{copy.hero.eyebrow}</p>
        <h1>{copy.hero.title.split("\n").map((line) => <span className="hero-line" key={line}><span>{line}</span></span>)}</h1>
        <div className="hero-bottom"><p>{copy.hero.body}</p><div className="button-row"><Button href="#o-ranario" tone="light">Conhecer o ranário</Button><Button href="#produtos" tone="outline">Explorar produtos</Button></div></div>
      </div>
      <a className="scroll-cue" href="#o-ranario"><span>Role para descobrir</span><i /></a>
      <p className="media-note">Ranário Nova Fátima · imagem real</p>
    </section>

    <section className="about" id="o-ranario">
      <div className="about-grid"><SectionTitle eyebrow={copy.about.eyebrow}>{copy.about.title}</SectionTitle><div className="about-text reveal"><p>{copy.about.body}</p><p className="caption">Ranário Nova Fátima — Nova Fátima, PR</p></div></div>
      <div className="about-visual"><Image className="section-photo" src="/media/ranario-interno-01.jpg" alt="Vista interna das instalações do Ranário Nova Fátima" fill sizes="100vw" /><div className="media-shade" /><WaterLines /><span className="media-badge">Estrutura interna · Ranário Nova Fátima</span><p>Uma nova perspectiva<br />sobre o que nasce da água.</p></div>
    </section>

    <section className="story">
      <div className="story-intro"><SectionTitle eyebrow={copy.story.eyebrow} light>{copy.story.title.split("\n").map((x) => <span key={x}>{x}</span>)}</SectionTitle><p className="reveal">{copy.story.body}</p></div>
      <div className="story-moments">
        <article className="story-moment"><span className="moment-index">{copy.activities[0].eyebrow}</span><div className="story-art art-ripple"><Image src="/media/ranario-interno-02.jpg" alt="Divisões internas do ranário" fill sizes="(max-width: 899px) 100vw, 50vw" /><div className="media-shade" /><WaterLines /></div><div className="moment-copy"><h3>{copy.activities[0].title}</h3><p>{copy.activities[0].body}</p></div></article>
        <article className="story-moment"><span className="moment-index">{copy.activities[1].eyebrow}</span><div className="story-art art-surface"><Image src="/media/ranario-fachada.jpg" alt="Estrutura externa do ranário" fill sizes="(max-width: 899px) 100vw, 50vw" /><div className="media-shade" /></div><div className="moment-copy"><h3>{copy.activities[1].title}</h3><p>{copy.activities[1].body}</p></div></article>
        <article className="story-moment"><span className="moment-index">{copy.activities[2].eyebrow}</span><div className="story-art art-light"><i /></div><div className="moment-copy"><h3>{copy.activities[2].title}</h3><p>{copy.activities[2].body}</p></div></article>
      </div>
    </section>

    <section className="products" id="produtos">
      <div className="products-head"><SectionTitle eyebrow={copy.products.eyebrow}>{copy.products.title}</SectionTitle><p className="reveal">{copy.products.body}</p></div>
      {products.filter((p) => p.enabled !== false).length ? <div className="product-grid">{products.filter((p) => p.enabled !== false).map((p) => <ProductCard product={p} key={p.id} />)}</div> : <div className="empty-catalog reveal"><div className="empty-mark" aria-hidden="true"><FrogScene /></div><div><p className="eyebrow">VENDA DIRETA</p><h3>{copy.products.emptyTitle}</h3><p>{copy.products.emptyBody}</p>{wa && <Button href={wa} target="_blank" rel="noreferrer">Consultar pelo WhatsApp</Button>}</div></div>}
    </section>

    <section className="gallery" id="galeria">
      <div className="gallery-head"><SectionTitle eyebrow={copy.gallery.eyebrow} light>{copy.gallery.title.split("\n").map((x) => <span key={x}>{x}</span>)}</SectionTitle><p className="reveal">Conheça alguns detalhes da estrutura e dos espaços onde nossa família desenvolve o trabalho do Ranário Nova Fátima.</p></div>
      {gallery.filter((x) => x.published).length ? <div className="gallery-grid">{gallery.filter((x) => x.published).sort((a, b) => a.order - b.order).map((item, index) => <figure className={`gallery-photo gallery-photo--${index + 1}`} key={item.src}><div><Image src={item.src} alt={item.alt} fill sizes="(max-width: 899px) 100vw, 60vw" /></div><figcaption><span>0{index + 1}</span>{item.caption}</figcaption></figure>)}</div> : <div className="abstract-gallery" aria-label="Composições abstratas temporárias; fotografias reais em preparação"><div className="gallery-art gallery-art--a"><span>01</span><i /></div><div className="gallery-art gallery-art--b"><span>02</span><WaterLines /></div><div className="gallery-art gallery-art--c"><span>03</span><i /></div><p className="gallery-pending">Galeria real<br />em preparação.</p></div>}
    </section>

    <section className="contact" id="contato">
      <WaterLines className="contact-lines" />
      <div className="contact-main"><SectionTitle eyebrow={copy.contact.eyebrow} light>{copy.contact.title}</SectionTitle><p className="reveal">{copy.contact.body}</p><div className="button-row reveal">{wa && <Button href={wa} target="_blank" rel="noreferrer" tone="light">Falar no WhatsApp</Button>}{map && <Button href={map} target="_blank" rel="noreferrer" tone="outline">Como chegar</Button>}</div></div>
      <div className="contact-details reveal"><div><span>LOCALIZAÇÃO</span><strong>{business.address}</strong><small>{business.city} — {business.state}</small></div>{business.phoneNumbers.map((phone) => <div key={phone}><span>TELEFONE</span><a href={phoneUrl(phone)}>{phone}</a></div>)}</div>
    </section>
  </main>;
}
