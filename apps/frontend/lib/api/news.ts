import { fetchAPI } from "../strapi";
import type { StrapiResponse, NewsArticle, StrapiQueryParams } from "@onpcp/types";

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

    // Strapi v5 returns attributes directly in data items, not in data[].attributes
    if (!response.data) {
      return { articles: [], total: response.meta?.pagination?.total || 0 };
    }

    // Transform to match NewsArticle type structure (with attributes)
    const articles = response.data.map((item: any) => ({
      id: item.id,
      attributes: {
        title: item.title,
        slug: item.slug,
        content: item.content,
        excerpt: item.excerpt,
        category: item.category,
        image: item.image,
        publishDate: item.publishDate,
        locale: item.locale,
        publishedAt: item.publishedAt,
      },
    })) as NewsArticle[];

    return {
      articles,
      total: response.meta?.pagination?.total || 0,
    };
  } catch (error) {
    // Silently handle 404s - content may not exist yet
    if (error instanceof Error && error.message.includes("NOT_FOUND")) {
      return { articles: [], total: 0 };
    }
    console.error("Failed to fetch news articles:", error);
    return { articles: [], total: 0 };
  }
}

/**
 * Fetch a single news article by slug
 */
export async function getNewsArticleBySlug(slug: string, locale: string): Promise<NewsArticle | null> {
  try {
    const response = await fetchAPI<StrapiResponse<NewsArticle[]>>({
      endpoint: "/news-articles",
      query: {
        locale,
        filters: { slug: { $eq: slug } },
        populate: ["image"],
      } satisfies StrapiQueryParams,
    });

    // Strapi v5 returns attributes directly in data items, not in data[].attributes
    if (!response.data?.[0]) return null;

    const item = response.data[0] as any;
    // Transform to match NewsArticle type structure (with attributes)
    return {
      id: item.id,
      attributes: {
        title: item.title,
        slug: item.slug,
        content: item.content,
        excerpt: item.excerpt,
        category: item.category,
        image: item.image,
        publishDate: item.publishDate,
        locale: item.locale,
        publishedAt: item.publishedAt,
      },
    } as NewsArticle;
  } catch (error) {
    // Silently handle 404s - content may not exist yet
    if (error instanceof Error && error.message.includes("NOT_FOUND")) {
      return null;
    }
    console.error("Failed to fetch news article:", error);
    return null;
  }
}
