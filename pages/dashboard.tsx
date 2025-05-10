
import { useEffect, useState } from 'react';
import AgentChat from '../components/AgentChat';

export default function Dashboard() {
  const [idea, setIdea] = useState('');

  useEffect(() => {
    const savedIdea = localStorage.getItem('businessIdea') || '';
    setIdea(savedIdea);
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your AI Team</h1>
      <AgentChat businessIdea={idea} />
    </main>
  );
}
