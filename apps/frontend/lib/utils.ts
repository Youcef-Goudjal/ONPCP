import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Render Strapi rich text content as HTML
 */
export function renderStrapiRichText(content: string | undefined): string {
  if (!content) return "";
  return content;
}
