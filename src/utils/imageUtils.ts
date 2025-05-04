
/**
 * Helper function to get the correct image path with the base URL prepended
 * 
 * @param path - The relative path to the image (should start with a forward slash)
 * @returns The complete path with the base URL prepended
 */
export const getImagePath = (path: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // For paths that already include the base URL or are absolute URLs, return as is
  if (cleanPath.includes('http://') || cleanPath.includes('https://')) {
    return cleanPath;
  }
  
  // Check if path already starts with 'public/'
  const pathWithoutPublic = cleanPath.startsWith('public/') 
    ? cleanPath.substring(7) // Remove 'public/' prefix
    : cleanPath;
  
  // Combine the base URL with the path
  return `${import.meta.env.BASE_URL}${pathWithoutPublic}`;
};
