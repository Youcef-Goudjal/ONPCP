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

    // Strapi v5 returns attributes directly in data, not in data.attributes
    if (!response.data) {
      return null;
    }

    // Extract attributes, excluding metadata fields
    const { id, documentId, createdAt, updatedAt, publishedAt, locale: _, localizations, navigation, home, footer, language, reportFab } = response.data as any;

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
    console.error("[Translations] Failed to fetch from Strapi:", error);
    return null;
  }
}
