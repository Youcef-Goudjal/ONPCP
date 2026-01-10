import { fetchAPI } from "../strapi";
import type {
  StrapiResponse,
  Person,
  Department,
  StrapiQueryParams,
} from "@onpcp/types";

/**
 * Fetch all people (team members)
 */
export async function getPeople(
  locale: string
): Promise<Person[]> {
  try {
    const response = await fetchAPI<StrapiResponse<Person[]>>({
      endpoint: "/people",
      query: {
        locale,
        sort: ["order:asc"],
        populate: ["image"],
      } satisfies StrapiQueryParams,
    });
    return response.data || [];
  } catch (error) {
    console.error("Failed to fetch people:", error);
    return [];
  }
}

/**
 * Fetch all departments
 */
export async function getDepartments(
  locale: string
): Promise<Department[]> {
  try {
    const response = await fetchAPI<StrapiResponse<Department[]>>({
      endpoint: "/departments",
      query: {
        locale,
        sort: ["order:asc"],
      } satisfies StrapiQueryParams,
    });
    return response.data || [];
  } catch (error) {
    console.error("Failed to fetch departments:", error);
    return [];
  }
}

