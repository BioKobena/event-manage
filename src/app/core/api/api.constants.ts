export const API_BASE_URL = 'http://localhost:8080';

export const API_ENDPOINTS = {
  concert: `${API_BASE_URL}/concert`,
  artiste: `${API_BASE_URL}/artiste`,
  client: `${API_BASE_URL}/client`,
  ticket: `${API_BASE_URL}/tickets`,
  gestionnaire: `${API_BASE_URL}/gestionnaire`
} as const;
