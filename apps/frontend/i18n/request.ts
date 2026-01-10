import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "./config";
import { getTranslationsFromStrapi, mergeTranslations } from "@/lib/translations";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !locales.includes(locale as Locale)) {
    notFound();
  }

  // Static fallback messages
  const staticMessages = (await import(`../messages/${locale}.json`)).default;

  // Fetch from Strapi and merge with static fallback
  const strapiMessages = await getTranslationsFromStrapi(locale as Locale);
  const messages = mergeTranslations(strapiMessages, staticMessages);

  return {
    locale,
    messages,
  };
});
