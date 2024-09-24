import { useState } from 'react';
import { LetterData } from '../interfaces/LetterInterfaces';

interface LetterFormProps {
  onSubmit: (data: LetterData) => void;
}

const LetterForm: React.FC<LetterFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');
  const [content, setContent] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, sender, receiver, content, password });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 bg-white shadow-md rounded-md">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md"
        required
      />
      <input
        type="text"
        placeholder="Sender (username)"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md"
        required
      />
      <input
        type="text"
        placeholder="Receiver (username)"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md"
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md"
        required
      />
      <input
        type="password"
        placeholder="Sender Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md"
        required
      />
      <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md">
        Create Letter
      </button>
    </form>
  );
};

export default LetterForm;
