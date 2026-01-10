// Strapi Response Types
export interface StrapiImage {
  id: number;
  attributes: {
    url: string;
    alternativeText?: string;
    width: number;
    height: number;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };
}

export interface StrapiMedia {
  data: StrapiImage | StrapiImage[] | null;
}

export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Content Types
export interface NewsArticle {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content: string;
    excerpt?: string;
    publishedAt: string;
    locale: string;
    image?: StrapiMedia;
    category?: string;
    localizations?: {
      data: NewsArticle[];
    };
  };
}

export interface Person {
  id: number;
  attributes: {
    name: string;
    position: string;
    bio?: string;
    email?: string;
    phone?: string;
    image?: StrapiMedia;
    order: number;
  };
}

export interface Page {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content: string;
    locale: string;
    publishedAt: string;
    localizations?: {
      data: Page[];
    };
  };
}

export interface Report {
  id: number;
  attributes: {
    title: string;
    description: string;
    category: string;
    status: 'pending' | 'reviewing' | 'resolved' | 'rejected';
    submittedAt: string;
    reference: string;
  };
}

// API Query Types
export interface StrapiQueryParams {
  populate?: string | string[] | object;
  fields?: string[];
  filters?: object;
  sort?: string | string[];
  pagination?: {
    page?: number;
    pageSize?: number;
    start?: number;
    limit?: number;
  };
  locale?: string;
}

