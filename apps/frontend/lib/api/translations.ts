import { fetchAPI } from "../strapi";
import type { StrapiResponse, Translation, StrapiQueryParams } from "@onpcp/types";
import type { Locale } from "@/i18n/config";

type Messages = Record<string, unknown>;

/**
 * Fetch translations from Strapi for a given locale
 */
export async function getTranslations(locale: Locale): Promise<Messages | null> {
  try {
    const response = await fetchAPI<StrapiResponse<Translation>>({
      endpoint: "/translation",
      query: {
        locale,
      } satisfies StrapiQueryParams,
    });

    if (!response.data?.attributes) {
      return null;
    }

    const { navigation, home, footer, language, reportFab } = response.data.attributes;

    return {
      navigation: navigation ?? {},
      home: home ?? {},
      footer: footer ?? {},
      language: language ?? {},
      reportFab: reportFab ?? {},
    };
  } catch (error) {
    // Silently fail - fallback to static translations
    // 404s are expected if content doesn't exist yet
    if (error instanceof Error && error.message.includes("NOT_FOUND")) {
      return null;
    }
    console.error("Failed to fetch translations from Strapi:", error);
    return null;
  }
}
