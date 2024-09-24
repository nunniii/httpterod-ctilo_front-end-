// src/App.tsx
import React from 'react';
import { AuthProvider } from './context/AuthContext';
import MainContent from './MainContent';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <MainContent />
    </AuthProvider>
  );
};

export default App;
