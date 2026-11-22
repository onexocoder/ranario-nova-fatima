# Ranário Nova Fátima

Landing page institucional em Next.js, TypeScript e GSAP. O projeto não inventa produtos, horários, certificações ou imagens: conteúdo ainda não confirmado aparece como pendência editorial.

## Rodar localmente

```bash
pnpm install
pnpm dev
```

Abra `http://localhost:3000`.

## Conteúdo editável

- Dados, endereço e contatos: `src/content/business.ts`
- Produtos: `src/content/products.ts`
- Galeria: `src/content/gallery.ts`
- Diferenciais futuros: `src/content/highlights.ts`
- Textos editoriais: `src/content/copy.ts`
- Orientação de mídia: `public/media/README.md`

Os contatos foram copiados do projeto local do pesqueiro, conforme o briefing: Rua Pioneiro João Quani, 660 — Bairro São Luís; +55 (43) 99901-1564.

## Futuras encomendas

`ENABLE_ONLINE_ORDERS` permanece `false`. Uma fase futura poderá implementar: selecionar produtos → informar quantidade → verificar disponibilidade e área de atendimento → confirmar orçamento/encomenda → pagamento ou confirmação conforme regras definidas pela família. Esta fase não contém carrinho, checkout, pagamento ou promessa de entrega.

## Pendências reais

Logotipo oficial, domínio, fotos/vídeos do empreendimento, catálogo, horários próprios, redes sociais, URL do pesqueiro, URL explícita do Google Maps e diferenciais comprováveis.
