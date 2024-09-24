import { useState, useEffect } from 'react';
import { getOwnLetters } from '../services/apiService';

export function useGetOwnLetters(username: string) {
  const [letters, setLetters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLetters = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await getOwnLetters(username);
        setLetters(result);
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'An unknown error occurred';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchLetters();
    }
  }, [username]);

  return { letters, loading, error };
}
