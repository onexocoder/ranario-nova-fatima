import { business } from "@/content/business";

export const whatsappUrl = (message = "Olá! Gostaria de saber mais sobre o Ranário Nova Fátima.") =>
  business.whatsapp ? `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}` : null;

export const phoneUrl = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

export const mapsUrl = () => {
  if (business.mapUrl) return business.mapUrl;
  if (!business.address) return null;
  const destination = `${business.address}, ${business.city}, ${business.state}, ${business.country}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
};
