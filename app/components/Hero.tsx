import { Button } from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0f172a] text-white">
      
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-[#92908b]/30 blur-3xl rounded-full top-20 left-10"></div>
      <div className="absolute w-96 h-96 bg-[#2e457f]/30 blur-3xl rounded-full bottom-20 right-10"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="text-[#60a5fa]">
            Anju
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          I build{" "}
          <span className="text-indigo-400 font-semibold">
            modern, fast & responsive
          </span>{" "}
          web applications using React & Next.js
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#projects">
            <Button
              size="lg"
              className="bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg hover:shadow-indigo-500/30"
            >
              🚀 View Projects
            </Button>
          </a>

          <a href="#contact">
            <Button
              variant="outline"
              size="lg"
              className="border-indigo-400 text-indigo-400 hover:bg-indigo-500 hover:text-white"
            >
              📩 Get in Touch
            </Button>
          </a>
        </div>

        {/* Tech Stack */}
        <div className="mt-16 flex flex-wrap gap-4 justify-center">
          {["Next.js", "TypeScript", "Tailwind", "React", "Framer Motion"].map(
            (tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm rounded-full bg-white/10 text-white border border-white/10 backdrop-blur-md hover:scale-105 transition"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}