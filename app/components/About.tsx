"use client";

import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0f172a] text-white overflow-hidden"
    >
      {/* 🔹 Glow Effects */}
      <div className="absolute w-80 h-80 bg-[#92908b]/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-80 h-80 bg-[#2e457f]/20 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* 🔹 Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        {/* 🔹 Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side - Text */}
          <div>
            <p className="text-neutral-300 leading-relaxed mb-6">
              Hi, I'm <span className="text-indigo-400 font-semibold">Anju</span> — a passionate 
              Frontend Developer who loves building modern, fast, and user-friendly web applications.
            </p>

            <p className="text-neutral-400 leading-relaxed mb-6">
              I specialize in React, Next.js, and Tailwind CSS, focusing on clean UI, 
              smooth user experience, and performance. I enjoy turning ideas into 
              real-world applications that look great and work perfectly.
            </p>

            <p className="text-neutral-400 leading-relaxed">
              I'm always learning new technologies and improving my skills to stay 
              updated with the latest trends in web development.
            </p>
          </div>

          {/* Right Side - Skills */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "JavaScript",
              "Framer Motion",
              "Git",
              "Responsive Design",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-white hover:scale-105 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* 🔹 Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-medium shadow-lg hover:shadow-indigo-500/30"
          >
            Let's Work Together 🚀
          </a>
        </div>

      </div>
    </section>
  );
}