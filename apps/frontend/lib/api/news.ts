import { fetchAPI } from "../strapi";
import type {
  StrapiResponse,
  NewsArticle,
  StrapiQueryParams,
} from "@onpcp/types";

/**
 * Fetch all news articles
 */
export async function getNewsArticles(
  locale: string,
  options?: {
    category?: string;
    page?: number;
    pageSize?: number;
  }
): Promise<{ articles: NewsArticle[]; total: number }> {
  try {
    const query: StrapiQueryParams = {
      locale,
      sort: ["publishDate:desc", "publishedAt:desc"],
      populate: ["image"],
      pagination: {
        page: options?.page || 1,
        pageSize: options?.pageSize || 12,
      },
    };

    if (options?.category) {
      query.filters = { category: { $eq: options.category } };
    }

    const response = await fetchAPI<StrapiResponse<NewsArticle[]>>({
      endpoint: "/news-articles",
      query,
    });

    return {
      articles: response.data || [],
      total: response.meta?.pagination?.total || 0,
    };
  } catch (error) {
    console.error("Failed to fetch news articles:", error);
    return { articles: [], total: 0 };
  }
}

/**
 * Fetch a single news article by slug
 */
export async function getNewsArticleBySlug(
  slug: string,
  locale: string
): Promise<NewsArticle | null> {
  try {
    const response = await fetchAPI<StrapiResponse<NewsArticle[]>>({
      endpoint: "/news-articles",
      query: {
        locale,
        filters: { slug: { $eq: slug } },
        populate: ["image"],
      } satisfies StrapiQueryParams,
    });
    return response.data?.[0] || null;
  } catch (error) {
    console.error("Failed to fetch news article:", error);
    return null;
  }
}

