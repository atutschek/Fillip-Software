
import { useState } from 'react';

export default function AgentChat({ businessIdea }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const userMsg = `You: ${input}`;
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    const res = await fetch('/api/agent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input, idea: businessIdea }),
    });
    const data = await res.json();
    setMessages((prev) => [...prev, `AI: ${data.reply}`]);
  };

  return (
    <div>
      <div className="bg-gray-100 p-4 h-64 overflow-y-scroll mb-4">
        {messages.map((msg, i) => (
          <div key={i} className="mb-2">{msg}</div>
        ))}
      </div>
      <div className="flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-l"
        />
        <button onClick={sendMessage} className="bg-blue-600 text-white px-4 rounded-r">
          Send
        </button>
      </div>
    </div>
  );
}
