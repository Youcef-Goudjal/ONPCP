import qs from "qs";
import type { StrapiResponse, StrapiQueryParams, StrapiMedia } from "@onpcp/types";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

interface FetchAPIOptions {
  endpoint: string;
  query?: StrapiQueryParams;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
}

/**
 * Fetch data from Strapi API
 */
export async function fetchAPI<T>(options: FetchAPIOptions): Promise<T> {
  const { endpoint, query, method = "GET", body } = options;

  const queryString = query ? `?${qs.stringify(query, { encodeValuesOnly: true })}` : "";
  const url = `${STRAPI_URL}/api${endpoint}${queryString}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (STRAPI_TOKEN) {
    headers["Authorization"] = `Bearer ${STRAPI_TOKEN}`;
  }

  try {
    const response = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
      next: { revalidate: 60 }, // ISR: revalidate every 60 seconds
    });

    if (!response.ok) {
      throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    // Only log non-connection errors (ECONNREFUSED is expected during dev startup)
    const isConnectionError = error instanceof Error && (error.cause as { code?: string })?.code === "ECONNREFUSED";
    if (!isConnectionError) {
      console.error("Strapi API Error:", error);
    }
    throw error;
  }
}

/**
 * Get single entry by slug
 */
export async function getEntryBySlug<T>(
  collection: string,
  slug: string,
  query?: Partial<StrapiQueryParams>
): Promise<T | null> {
  const data = await fetchAPI<StrapiResponse<T[]>>({
    endpoint: `/${collection}`,
    query: {
      filters: { slug: { $eq: slug } },
      ...query,
    },
  });

  return data.data?.[0] || null;
}

/**
 * Get multiple entries
 */
export async function getEntries<T>(collection: string, query?: Partial<StrapiQueryParams>): Promise<T[]> {
  const data = await fetchAPI<StrapiResponse<T[]>>({
    endpoint: `/${collection}`,
    query,
  });

  return data.data || [];
}

/**
 * Get single entry by ID
 */
export async function getEntry<T>(
  collection: string,
  id: string | number,
  query?: Partial<StrapiQueryParams>
): Promise<T | null> {
  try {
    const data = await fetchAPI<StrapiResponse<T>>({
      endpoint: `/${collection}/${id}`,
      query,
    });
    return data.data;
  } catch {
    return null;
  }
}

/**
 * Create new entry
 */
export async function createEntry<T>(collection: string, data: any): Promise<T> {
  const response = await fetchAPI<StrapiResponse<T>>({
    endpoint: `/${collection}`,
    method: "POST",
    body: { data },
  });
  return response.data;
}

/**
 * Helper to get full image URL from a string path
 */
export function getStrapiImageUrl(url: string | undefined): string {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

/**
 * Helper to extract image URL from StrapiMedia
 * Handles both single image and array of images
 */
export function getStrapiMediaUrl(media: StrapiMedia | undefined): string {
  if (!media?.data) return "";
  const imageData = Array.isArray(media.data) ? media.data[0] : media.data;
  if (!imageData) return "";
  return getStrapiImageUrl(imageData.attributes.url);
}
