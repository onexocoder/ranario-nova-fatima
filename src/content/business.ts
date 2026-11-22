export interface Business {
  name: string;
  city: string;
  state: string;
  country: string;
  address: string | null;
  mapUrl: string | null;
  phoneNumbers: string[];
  whatsapp: string | null;
  email: string | null;
  instagram: string | null;
  hours: string | null;
  heroVideo: string | null;
  heroPoster: string | null;
  sisterBusinessUrl: string | null;
}

export const business: Business = {
  name: "Ranário Nova Fátima",
  city: "Nova Fátima",
  state: "PR",
  country: "Brasil",
  address: "Rua Pioneiro João Quani, 660 — Bairro São Luís",
  mapUrl: null,
  phoneNumbers: ["+55 (43) 99901-1564"],
  whatsapp: "5543999011564",
  email: null,
  instagram: null,
  hours: null,
  heroVideo: null,
  heroPoster: "/media/ranario-fachada.jpg",
  sisterBusinessUrl: null,
};
