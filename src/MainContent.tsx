// src/MainContent.tsx
import React, { useState } from 'react';
import { useAuth } from './context/AuthContext';
import LoginForm from './components/LoginForm';
import LettersList from './components/LettersList';
import NavBar from './components/NavBar';

const MainContent: React.FC = () => {
  const { user, login } = useAuth();
  const [letters, setLetters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const handleLoginSuccess = async (userData: any) => {
    login(userData);
    await fetchLetters(userData.id); // Carrega as cartas após o login
  };

  const fetchLetters = async (userId: number) => {
    try {
      const response = await fetch(`http://localhost:3000/letters/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, password: 'nullcat' }), // Ajuste conforme necessário
      });

      if (!response.ok) {
        throw new Error('Failed to fetch letters');
      }

      const lettersData = await response.json();
      setLetters(lettersData);
    } catch (error) {
      console.error('Error fetching letters:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return <LoginForm onLogin={handleLoginSuccess} />;
  }

  return (
    <div className="container mx-auto p-4">
      <NavBar />
      
      {loading ? (
        <p>Loading letters...</p>
      ) : (
        <LettersList letters={letters} />
      )}
    </div>
  );
};

export default MainContent;
