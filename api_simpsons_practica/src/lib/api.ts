export type Character = {
  id: number;
  name: string;
  age: number;
  status: string;
  portrait_path: string;
  phrases: string[];
};


const API_BASE_URL = 'https://thesimpsonsapi.com/api';

async function handleResponse<T>(response: Response, defaultMessage: string): Promise<T> {
  if (!response.ok) {
    throw new Error(defaultMessage);
  }

  return response.json() as Promise<T>;
}

export async function fetchCharacters(): Promise<Character[]> {
  console.log('Fetching characters from API...');
  const response = await fetch(`${API_BASE_URL}/characters`);
  console.log('Received response with status: %d', response.status);
  const data = await handleResponse<any>(response, 'No se pudieron cargar los personajes');
  if (Array.isArray(data)) return data as Character[];
  if (data && Array.isArray(data.results)) return data.results as Character[];
  if (data?.data && Array.isArray(data.data)) return data.data as Character[];
  console.warn('fetchCharacters: unexpected response shape, returning empty array', data);
  return [];
}


