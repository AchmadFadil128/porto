// API Configuration - Server-side only
const getApiUrl = (): string => {
  // Server-side only configuration
  return process.env.API_URL || 'http://localhost:3001';
};

export { getApiUrl };
const API_BASE_URL = getApiUrl();
export default API_BASE_URL;