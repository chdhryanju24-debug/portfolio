// src/components/ChatWidget.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { Send, MessageCircle, X } from "lucide-react";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hi! 👋 I'm your portfolio assistant.\nHow can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: input.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // ────────────────────────────────────────────────
    //   Fake bot reply — replace this part later with real API call
    // ────────────────────────────────────────────────
    setTimeout(() => {
      const replies = [
        "Thanks for reaching out! What kind of project are you thinking about? 🚀",
        "Sounds interesting! Tell me more...",
        "I'm just a simple widget for now — but I'd love to pass this to Anju! 😄",
        "Portfolio vibes activated ✨ How may I assist?",
        "Got it! I'll make sure Anju sees this right away 👀",
      ];

      const randomReply = replies[Math.floor(Math.random() * replies.length)];

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: randomReply,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
    }, 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          fixed bottom-6 right-6 z-50
          flex h-14 w-14 items-center justify-center rounded-full
           from-indigo-500 to-purple-600
          text-white shadow-xl transition-all duration-300
          hover:scale-105 hover:shadow-2xl
          focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2
        "
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div
          className="
            fixed bottom-24 right-6 z-50
            flex flex-col overflow-hidden
            rounded-2xl border border-slate-700 bg-slate-900
            shadow-2xl backdrop-blur-sm 
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-700 bg-slate-800/80 px-5 py-3.5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full  from-indigo-400 to-purple-500" />
              <div>
                <h3 className="font-semibold text-white">Anju's Portfolio</h3>
                <p className="text-xs text-slate-400">Online • Usually replies fast</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1.5 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages area */}
          <div className="flex-1 space-y-4 overflow-y-auto p-5 scrollbar-thin scrollbar-thumb-slate-700">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`
                    max-w-[80%] rounded-2xl px-4 py-3 text-[15px] leading-relaxed
                    ${
                      msg.sender === "user"
                        ? "rounded-br-none bg-indigo-600 text-white"
                        : "rounded-bl-none bg-slate-800 text-slate-100"
                    }
                  `}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                  <span className="mt-1 block text-right text-xs opacity-60">
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="border-t border-slate-700 bg-slate-900 p-4">
            <div className="flex items-center gap-3 rounded-full bg-slate-800 px-4 py-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="
                  flex-1 bg-transparent text-white outline-none
                  placeholder:text-slate-500
                "
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className={`
                  flex h-9 w-9 items-center justify-center rounded-full transition-colors
                  ${
                    input.trim()
                      ? "bg-indigo-600 text-white hover:bg-indigo-500"
                      : "bg-slate-700 text-slate-400 cursor-not-allowed"
                  }
                `}
                aria-label="Send message"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}