"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#0f172a]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* 🔥 Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-indigo-400 tracking-tight"
          >
            Anju.dev
          </Link>

          {/* 💻 Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-neutral-300 hover:text-white transition group"
              >
                {item}

                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 w-0  bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* 📱 Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg border border-white/10 text-white transition"
          >
            {open ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* 📱 Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 py-5 bg-[#0f172a]/95 backdrop-blur-xl border-t border-white/10 flex flex-col gap-5 text-sm">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-neutral-300 hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}