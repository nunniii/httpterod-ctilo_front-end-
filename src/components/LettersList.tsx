import React from 'react';

import '../styles/LettersList.scss'

interface Letter {
  id: number;
  title: string;
  content: string;
}

interface LettersListProps {
  letters: Letter[];
}

const LettersList: React.FC<LettersListProps> = ({ letters }) => {
  if (letters.length === 0) {
    return <p className='av'>Nenhuma carta encontrada.</p>;
  }

  return (
    <ul className="carta">
      {letters.map((letter) => (
        <li key={letter.id} className="p-4 border border-gray-300 rounded-md">
          <h3 className="text-lg font-bold">{letter.title}</h3>
          <p>{letter.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default LettersList;
