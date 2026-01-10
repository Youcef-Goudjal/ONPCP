import { getTranslations } from "./api/translations";
import type { Locale } from "@/i18n/config";

type Messages = Record<string, unknown>;

/**
 * Fetch translations from Strapi for a given locale
 */
export async function getTranslationsFromStrapi(locale: Locale): Promise<Messages | null> {
  return getTranslations(locale);
}

/**
 * Merge Strapi translations with static fallback
 */
export function mergeTranslations(strapiMessages: Messages | null, staticMessages: Messages): Messages {
  if (!strapiMessages) {
    return staticMessages;
  }

  return deepMerge(staticMessages, strapiMessages);
}

/**
 * Deep merge two objects, with source taking precedence
 */
function deepMerge(target: Messages, source: Messages): Messages {
  const result: Messages = { ...target };

  for (const key of Object.keys(source)) {
    const sourceValue = source[key];
    const targetValue = result[key];

    if (isObject(sourceValue) && isObject(targetValue)) {
      result[key] = deepMerge(targetValue as Messages, sourceValue as Messages);
    } else if (sourceValue !== undefined && sourceValue !== null) {
      result[key] = sourceValue;
    }
  }

  return result;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
