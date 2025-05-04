
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

  // Debug the incoming path
  console.log('Processing image path:', path);

  // For paths that already include the base URL or are absolute URLs, return as is
  if (path.includes('http://') || path.includes('https://')) {
    console.log('Using absolute URL:', path);
    return path;
  }
  
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // Remove 'public/' prefix if present - this is a common mistake
  const pathWithoutPublic = cleanPath.startsWith('public/') 
    ? cleanPath.substring(7) // Remove 'public/' prefix
    : cleanPath;

  // Get the base URL from environment variables or use default for GitHub Pages
  const baseUrl = import.meta.env.BASE_URL || '/refined-portfolio-site/';
  
  // Combine the base URL with the path
  const fullPath = `${baseUrl}${pathWithoutPublic}`;
  console.log('Generated image path:', fullPath, 'from original:', path);
  return fullPath;
};
