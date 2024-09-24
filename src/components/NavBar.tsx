import React from 'react';
import { useAuth } from '../context/AuthContext';

import '../styles/NavBar.scss'

const NavBar: React.FC = () => {
  const { logout } = useAuth();

  return (
    <nav className="p-4 bg-gray-800 text-white">
      <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">
        Sair
      </button>
    </nav>
  );
};

export default NavBar;
