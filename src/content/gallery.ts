export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  type: "image" | "video";
  order: number;
  published: boolean;
}

export const gallery: GalleryItem[] = [
  {
    src: "/media/ranario-fachada.jpg",
    alt: "Vista externa da estrutura do Ranário Nova Fátima, cercada por árvores",
    caption: "Vista externa do Ranário Nova Fátima.",
    type: "image",
    order: 1,
    published: true,
  },
  {
    src: "/media/ranario-interno-01.jpg",
    alt: "Vista interna das divisões e instalações do Ranário Nova Fátima",
    caption: "Vista interna das instalações.",
    type: "image",
    order: 2,
    published: true,
  },
  {
    src: "/media/ranario-interno-02.jpg",
    alt: "Corredor e divisões internas verdes do Ranário Nova Fátima",
    caption: "Estrutura interna do ranário.",
    type: "image",
    order: 3,
    published: true,
  },
];
