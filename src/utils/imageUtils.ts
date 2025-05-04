
/**
 * Helper function to get the correct image path with the base URL prepended
 * 
 * @param path - The relative path to the image (should start with a forward slash)
 * @returns The complete path with the base URL prepended
 */
export const getImagePath = (path: string): string => {
  // Handle null or empty paths
  if (!path) {
    console.error('Image path is empty or null');
    return '';
  }

  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // For paths that already include the base URL or are absolute URLs, return as is
  if (cleanPath.includes('http://') || cleanPath.includes('https://')) {
    console.log('Using absolute URL:', cleanPath);
    return cleanPath;
  }
  
  // Remove 'public/' prefix if present - this is a common mistake
  const pathWithoutPublic = cleanPath.startsWith('public/') 
    ? cleanPath.substring(7) // Remove 'public/' prefix
    : cleanPath;

  // Get the base URL from environment variables
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  // Combine the base URL with the path
  const fullPath = `${baseUrl}${pathWithoutPublic}`;
  console.log('Generated image path:', fullPath, 'from original:', path);
  return fullPath;
};
