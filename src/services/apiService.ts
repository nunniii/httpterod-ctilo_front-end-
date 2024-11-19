const BASE_URL = 'httpterod-ctilo-delta.up.railway.app';

// Função existente para criar uma carta
export const createLetter = async (data: any) => {
  const response = await fetch(`${BASE_URL}/letters`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to create letter');
  }

  return await response.json();
};

// Nova função para buscar as cartas do usuário
export const getOwnLetters = async (username: string) => {
  const response = await fetch(`${BASE_URL}/letters?sender=${username}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch letters');
  }

  return await response.json();
};
