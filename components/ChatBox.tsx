'use client';
import { useState } from "react";
import { callOpenRouter } from "../lib/api";

export default function ChatBox({ chatId }: { chatId: string }) {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    const aiMsg = await callOpenRouter(input, updatedMessages);
    setMessages((prev) => [...prev, aiMsg]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-[80vh] max-w-2xl mx-auto p-4 border rounded-md">
      <div className="flex-grow overflow-y-auto border p-4 bg-gray-50 rounded">
        {messages.length === 0 && (
          <p className="text-gray-500 text-center">Mulai ketik untuk ngobrol dengan AI</p>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`my-2 p-2 rounded ${
              msg.role === "user" ? "bg-blue-100 text-right" : "bg-gray-300 text-left"
            }`}
          >
            <p>{msg.content}</p>
          </div>
        ))}
        {loading && <p className="text-gray-600">AI sedang mengetik...</p>}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          type="text"
          className="flex-grow border rounded px-3 py-2"
          placeholder="Ketik pesan..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Kirim
        </button>
      </div>
    </div>
  );
}
