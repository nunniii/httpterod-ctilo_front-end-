import React, { useState } from 'react';
import { User } from '../types/User';

import '../styles/LoginForm.scss'

interface LoginFormProps {
  onLogin: (userData: User) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = { username, password };
    
    // Requisição de login
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const user = await response.json();
      onLogin(user);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'An unknown error occurred');
    }
  };

  return (
    <form id="LoginForm" onSubmit={handleSubmit} className="p-4 space-y-4 bg-white shadow-md rounded-md">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md"
        required
      />
      <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md">
        Entrar
      </button>
    </form>
  );
};

export default LoginForm;
