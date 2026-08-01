import type { Locale } from "@/i18n/locales";

/** Single source of truth for the firm's public contact points. */
export const PHONE_DISPLAY = "+1 (407) 725-4988";
export const PHONE_TEL = "+14077254988";
export const WHATSAPP_NUMBER = "14077254988";
export const EMAIL = "info@linhareslaw.com";

const WA_MESSAGE: Record<Locale, string> = {
  pt: "Olá! Gostaria de falar com a equipe da Linhares Law sobre meu processo de imigração.",
  en: "Hello! I would like to speak with the Linhares Law team about my U.S. immigration case.",
  es: "¡Hola! Me gustaría hablar con el equipo de Linhares Law sobre mi proceso de inmigración.",
};

/** wa.me link with a locale-specific pre-filled message. */
export function whatsappHref(locale: Locale): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGE[locale])}`;
}

export const telHref = `tel:${PHONE_TEL}`;
export const mailHref = `mailto:${EMAIL}`;
