import { useState } from 'react';
import { createLetter } from '../services/apiService';

export function useCreateLetter() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCreateLetter = async (data: {
    title: string;
    sender: string;
    receiver: string;
    content: string;
    password: string;
  }) => {
    setLoading(true);
    setError(null);

    try {
      await createLetter(data);
      alert('Letter created successfully!');
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An unknown error occurred';
      setError(errorMessage);
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { createLetter: handleCreateLetter, loading, error };
}
