"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message || "Message sent!");

      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4 min-h-screen flex items-center justify-center bg-[#0f172a] text-white overflow-hidden">
      
      {/* Glow effect */}
      <div className="absolute w-72 h-72 bg-[#92908b]/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-[#2e457f]/20 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="relative max-w-lg w-full">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">
            Let's Work Together 🚀
          </h2>
          <p className="text-neutral-400">
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl"
        >
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="input-style"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="input-style"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          {/* Message */}
          <textarea
            rows={5}
            placeholder="Your Message..."
            className="input-style resize-none"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-500 transition active:scale-[0.98] disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Reusable styles */}
      <style jsx>{`
        .input-style {
          width: 100%;
          padding: 14px 18px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: white;
          outline: none;
          transition: all 0.3s ease;
        }

        .input-style::placeholder {
          color: #9ca3af;
        }

        .input-style:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.3);
        }
      `}</style>
    </section>
  );
}