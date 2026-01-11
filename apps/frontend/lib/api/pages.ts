import { fetchAPI } from "../strapi";
import type { StrapiResponse, AboutPage, MissionPage, TasksPage, ContactInfo, StrapiQueryParams } from "@onpcp/types";

/**
 * Fetch about page content
 */
export async function getAboutPage(locale: string): Promise<AboutPage["attributes"] | null> {
  try {
    const response = await fetchAPI<StrapiResponse<AboutPage>>({
      endpoint: "/about-page",
      query: { locale } satisfies StrapiQueryParams,
    });
    // Strapi v5 returns attributes directly in data, not in data.attributes
    if (!response.data) return null;
    // Extract attributes, excluding metadata fields
    const {
      id,
      documentId,
      createdAt,
      updatedAt,
      publishedAt,
      locale: _,
      localizations,
      ...attributes
    } = response.data as any;
    return attributes as AboutPage["attributes"];
  } catch (error) {
    // Silently handle 404s - content may not exist yet
    if (error instanceof Error && error.message.includes("NOT_FOUND")) {
      return null;
    }
    console.error("[About Page] Failed to fetch:", error);
    return null;
  }
}

/**
 * Fetch mission page content
 */
export async function getMissionPage(locale: string): Promise<MissionPage["attributes"] | null> {
  try {
    const response = await fetchAPI<StrapiResponse<MissionPage>>({
      endpoint: "/mission-page",
      query: { locale } satisfies StrapiQueryParams,
    });
    // Strapi v5 returns attributes directly in data, not in data.attributes
    if (!response.data) return null;
    // Extract attributes, excluding metadata fields
    const {
      id,
      documentId,
      createdAt,
      updatedAt,
      publishedAt,
      locale: _,
      localizations,
      ...attributes
    } = response.data as any;
    return attributes as MissionPage["attributes"];
  } catch (error) {
    // Silently handle 404s - content may not exist yet
    if (error instanceof Error && error.message.includes("NOT_FOUND")) {
      return null;
    }
    console.error("[Mission Page] Failed to fetch:", error);
    return null;
  }
}

/**
 * Fetch tasks page content
 */
export async function getTasksPage(locale: string): Promise<TasksPage["attributes"] | null> {
  try {
    const response = await fetchAPI<StrapiResponse<TasksPage>>({
      endpoint: "/tasks-page",
      query: { locale } satisfies StrapiQueryParams,
    });
    // Strapi v5 returns attributes directly in data, not in data.attributes
    if (!response.data) return null;
    // Extract attributes, excluding metadata fields
    const {
      id,
      documentId,
      createdAt,
      updatedAt,
      publishedAt,
      locale: _,
      localizations,
      ...attributes
    } = response.data as any;
    return attributes as TasksPage["attributes"];
  } catch (error) {
    // Silently handle 404s - content may not exist yet
    if (error instanceof Error && error.message.includes("NOT_FOUND")) {
      return null;
    }
    console.error("[Tasks Page] Failed to fetch:", error);
    return null;
  }
}

/**
 * Fetch contact info
 */
export async function getContactInfo(locale: string): Promise<ContactInfo["attributes"] | null> {
  try {
    const response = await fetchAPI<StrapiResponse<ContactInfo>>({
      endpoint: "/contact-info",
      query: { locale } satisfies StrapiQueryParams,
    });
    // Strapi v5 returns attributes directly in data, not in data.attributes
    if (!response.data) return null;
    // Extract attributes, excluding metadata fields
    const {
      id,
      documentId,
      createdAt,
      updatedAt,
      publishedAt,
      locale: _,
      localizations,
      ...attributes
    } = response.data as any;
    return attributes as ContactInfo["attributes"];
  } catch (error) {
    // Silently handle 404s - content may not exist yet
    if (error instanceof Error && error.message.includes("NOT_FOUND")) {
      return null;
    }
    console.error("[Contact Info] Failed to fetch:", error);
    return null;
  }
}
