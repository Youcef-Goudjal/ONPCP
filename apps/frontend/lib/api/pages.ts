import { fetchAPI } from "../strapi";
import type {
  StrapiResponse,
  AboutPage,
  MissionPage,
  TasksPage,
  ContactInfo,
  StrapiQueryParams,
} from "@onpcp/types";

/**
 * Fetch about page content
 */
export async function getAboutPage(
  locale: string
): Promise<AboutPage["attributes"] | null> {
  try {
    const response = await fetchAPI<StrapiResponse<AboutPage>>({
      endpoint: "/about-page",
      query: { locale } satisfies StrapiQueryParams,
    });
    return response.data?.attributes || null;
  } catch (error) {
    // Silently handle 404s - content may not exist yet
    if (error instanceof Error && error.message.includes("NOT_FOUND")) {
      return null;
    }
    console.error("Failed to fetch about page:", error);
    return null;
  }
}

/**
 * Fetch mission page content
 */
export async function getMissionPage(
  locale: string
): Promise<MissionPage["attributes"] | null> {
  try {
    const response = await fetchAPI<StrapiResponse<MissionPage>>({
      endpoint: "/mission-page",
      query: { locale } satisfies StrapiQueryParams,
    });
    return response.data?.attributes || null;
  } catch (error) {
    // Silently handle 404s - content may not exist yet
    if (error instanceof Error && error.message.includes("NOT_FOUND")) {
      return null;
    }
    console.error("Failed to fetch mission page:", error);
    return null;
  }
}

/**
 * Fetch tasks page content
 */
export async function getTasksPage(
  locale: string
): Promise<TasksPage["attributes"] | null> {
  try {
    const response = await fetchAPI<StrapiResponse<TasksPage>>({
      endpoint: "/tasks-page",
      query: { locale } satisfies StrapiQueryParams,
    });
    return response.data?.attributes || null;
  } catch (error) {
    // Silently handle 404s - content may not exist yet
    if (error instanceof Error && error.message.includes("NOT_FOUND")) {
      return null;
    }
    console.error("Failed to fetch tasks page:", error);
    return null;
  }
}

/**
 * Fetch contact info
 */
export async function getContactInfo(
  locale: string
): Promise<ContactInfo["attributes"] | null> {
  try {
    const response = await fetchAPI<StrapiResponse<ContactInfo>>({
      endpoint: "/contact-info",
      query: { locale } satisfies StrapiQueryParams,
    });
    return response.data?.attributes || null;
  } catch (error) {
    // Silently handle 404s - content may not exist yet
    if (error instanceof Error && error.message.includes("NOT_FOUND")) {
      return null;
    }
    console.error("Failed to fetch contact info:", error);
    return null;
  }
}

