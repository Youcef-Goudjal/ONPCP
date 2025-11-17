/**
 * Get the full path for an asset with basePath support
 * @param path - The asset path (e.g., "/logo.png")
 * @returns The full path with basePath included
 */
export const getAssetPath = (path: string): string => {
  const basePath = process.env.NODE_ENV === 'production' ? '/ONPCP' : '';
  return `${basePath}${path}`;
};

