export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  type: "image" | "video";
  order: number;
  published: boolean;
}

export const gallery: GalleryItem[] = [];
