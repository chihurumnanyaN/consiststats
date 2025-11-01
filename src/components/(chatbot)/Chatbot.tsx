"use client";
import { useState } from "react";
import { FiSend, FiSmile, FiRefreshCw } from "react-icons/fi";

export default function DevProductivityAI() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hey 👋 I’m your dev productivity AI. What should we focus on today?",
    },
    {
      id: 2,
      sender: "user",
      text: "I want to organize my coding schedule for this weekend.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: "user", text: input }]);
    setInput("");
  };

  return (
    <div className="w-full h-[70vh] bg-[#03091a] rounded-lg p-6 flex flex-col text-white border border-white/10 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
          <h2 className="text-lg font-semibold">Dev Productivity AI</h2>
        </div>
        <button className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-200 transition">
          <FiRefreshCw className="w-3 h-3" /> New Chat
        </button>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto space-y-5 scrollbar-thin scrollbar-thumb-gray-700 px-3 scrollbar-track-transparent">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex group ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "bot" && (
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold mr-2">
                AI
              </div>
            )}

            <div
              className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                msg.sender === "user" ? "bg-blue-600" : "bg-white/5"
              }`}
            >
              <p className="text-sm text-gray-100">{msg.text}</p>

              {/* Reactions */}
              <div className="flex gap-2 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="text-xs hover:scale-110">👍</button>
                <button className="text-xs hover:scale-110">💡</button>
                <button className="text-xs hover:scale-110">🔥</button>
              </div>
            </div>

            {msg.sender === "user" && (
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center font-bold ml-2">
                U
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="mt-4 border-t border-white/10 pt-3">
        <div className="flex items-center bg-white/5 rounded-full px-4 py-2 focus-within:ring-1 focus-within:ring-blue-500 transition">
          <FiSmile className="w-5 h-5 text-gray-400 hover:text-yellow-400 transition cursor-pointer" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something like 'summarize my Git commits'..."
            className="flex-1 bg-transparent outline-none text-sm text-gray-200 placeholder-gray-500 px-3"
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 hover:bg-blue-700 transition px-3 py-2 rounded-full text-sm font-medium flex items-center gap-1"
          >
            <FiSend className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
