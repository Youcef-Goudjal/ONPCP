import { fetchAPI } from "../strapi";
import type { StrapiResponse, Person, Department, StrapiQueryParams } from "@onpcp/types";

/**
 * Fetch all people (team members)
 */
export async function getPeople(locale: string): Promise<Person[]> {
  try {
    const response = await fetchAPI<StrapiResponse<Person[]>>({
      endpoint: "/people",
      query: {
        locale,
        sort: ["order:asc"],
        populate: ["image"],
      } satisfies StrapiQueryParams,
    });
    // Strapi v5 returns attributes directly in data items, not in data[].attributes
    if (!response.data) return [];
    // Transform to match Person type structure (with attributes)
    return response.data.map((item: any) => ({
      id: item.id,
      attributes: {
        name: item.name,
        title: item.title,
        category: item.category,
        bio: item.bio,
        email: item.email,
        phone: item.phone,
        image: item.image,
        order: item.order,
        locale: item.locale,
        publishedAt: item.publishedAt,
      },
    })) as Person[];
  } catch (error) {
    // Silently handle 404s - content may not exist yet
    if (error instanceof Error && error.message.includes("NOT_FOUND")) {
      return [];
    }
    console.error("Failed to fetch people:", error);
    return [];
  }
}

/**
 * Fetch all departments
 */
export async function getDepartments(locale: string): Promise<Department[]> {
  try {
    const response = await fetchAPI<StrapiResponse<Department[]>>({
      endpoint: "/departments",
      query: {
        locale,
        sort: ["order:asc"],
      } satisfies StrapiQueryParams,
    });
    // Strapi v5 returns attributes directly in data items, not in data[].attributes
    if (!response.data) return [];
    // Transform to match Department type structure (with attributes)
    return response.data.map((item: any) => ({
      id: item.id,
      attributes: {
        title: item.title,
        description: item.description,
        icon: item.icon,
        color: item.color,
        memberCount: item.memberCount,
        order: item.order,
        locale: item.locale,
        publishedAt: item.publishedAt,
      },
    })) as Department[];
  } catch (error) {
    // Silently handle 404s - content may not exist yet
    if (error instanceof Error && error.message.includes("NOT_FOUND")) {
      return [];
    }
    console.error("Failed to fetch departments:", error);
    return [];
  }
}
