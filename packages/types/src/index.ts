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

export interface Person {
  id: number;
  attributes: {
    name: string;
    title: string;
    category: string;
    bio?: string;
    email?: string;
    phone?: string;
    image?: StrapiMedia;
    order: number;
    locale: string;
    publishedAt: string;
    localizations?: {
      data: Person[];
    };
  };
}

export interface Department {
  id: number;
  attributes: {
    title: string;
    description?: string;
    icon?: string;
    color?: string;
    memberCount: number;
    order: number;
    locale: string;
    publishedAt: string;
    localizations?: {
      data: Department[];
    };
  };
}

export interface NewsArticle {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content: string;
    excerpt?: string;
    category?: string;
    image?: StrapiMedia;
    publishDate?: string;
    locale: string;
    publishedAt: string;
    localizations?: {
      data: NewsArticle[];
    };
  };
}

export interface AboutPage {
  id: number;
  attributes: {
    heroTitle?: string;
    heroSubtitle?: string;
    introduction?: string;
    legalFramework?: string;
    notarialDeed?: string;
    objectives?: Array<{
      icon: string;
      color: string;
      title: string;
      description: string;
    }>;
    organizationalStructure?: Array<{
      icon: string;
      color: string;
      title: string;
      badge: string;
      badgeColor: string;
    }>;
    values?: Array<{
      icon: string;
      color: string;
      title: string;
    }>;
    ctaTitle?: string;
    ctaSubtitle?: string;
    locale: string;
    publishedAt: string;
    localizations?: {
      data: AboutPage[];
    };
  };
}

export interface MissionPage {
  id: number;
  attributes: {
    heroTitle?: string;
    heroSubtitle?: string;
    sectionTitle?: string;
    sectionDescription?: string;
    missions?: Array<{
      icon: string;
      color: string;
      title: string;
      description: string;
    }>;
    legalFramework?: string;
    principles?: Array<{
      title: string;
      description: string;
    }>;
    ctaTitle?: string;
    ctaSubtitle?: string;
    ctaButtonText?: string;
    locale: string;
    publishedAt: string;
    localizations?: {
      data: MissionPage[];
    };
  };
}

export interface TasksPage {
  id: number;
  attributes: {
    heroTitle?: string;
    heroSubtitle?: string;
    scopeTitle?: string;
    scopeDescription?: string;
    tasks?: Array<{
      id: number;
      title: string;
      icon: string;
      description: string;
      details: string[];
      priority: string;
      status: string;
      color: string;
    }>;
    statistics?: Array<{
      icon: string;
      number: string;
      label: string;
      color: string;
    }>;
    ctaTitle?: string;
    ctaDescription?: string;
    locale: string;
    publishedAt: string;
    localizations?: {
      data: TasksPage[];
    };
  };
}

export interface ContactInfo {
  id: number;
  attributes: {
    heroTitle?: string;
    heroSubtitle?: string;
    nationalOffice?: {
      title: string;
      address: string[];
      phone: string;
      email: string;
    };
    provincialOffice?: {
      title: string;
      director: string;
      note: string;
    };
    workingHours?: {
      days: string;
      hours: string;
    };
    socialLinks?: Array<{
      name: string;
      url: string;
      color: string;
    }>;
    faq?: Array<{
      question: string;
      answer: string;
    }>;
    formLabels?: Record<string, string>;
    ctaTitle?: string;
    ctaSubtitle?: string;
    locale: string;
    publishedAt: string;
    localizations?: {
      data: ContactInfo[];
    };
  };
}

export interface Translation {
  id: number;
  attributes: {
    navigation: Record<string, string>;
    home: Record<string, unknown>;
    footer: Record<string, string>;
    language: Record<string, string>;
    reportFab: Record<string, string>;
    locale: string;
    publishedAt: string;
    localizations?: {
      data: Translation[];
    };
  };
}

export interface Report {
  id: number;
  attributes: {
    name?: string;
    email?: string;
    phone?: string;
    category: string;
    description: string;
    anonymous: boolean;
    status: "pending" | "reviewing" | "resolved" | "rejected";
    reference: string;
    createdAt: string;
    updatedAt: string;
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
