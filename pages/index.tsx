
import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';

export default function Home() {
  const [idea, setIdea] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('businessIdea', idea);
    router.push('/dashboard');
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow w-96">
        <h1 className="text-xl font-bold mb-4">Start Your AI Business</h1>
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Describe your business idea..."
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Build with Fillip
        </button>
      </form>
    </main>
  );
}
