import { Button } from "@/app/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "Full-featured admin panel with real-time analytics",
    tech: ["Next.js", "Tailwind", "Zustand", "Chart.js"],
    link: "#",
  },
  {
    title: "Task Management App",
    description: "Drag & drop kanban board with authentication",
    tech: ["React", "Firebase", "Tailwind", "dnd-kit"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0f172a] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-[#92908b]/20 blur-3xl rounded-full top-20 left-10"></div>
      <div className="absolute w-96 h-96 bg-[#2e457f]/20 blur-3xl rounded-full bottom-20 right-10"></div>

      <div className="relative max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          Featured Projects
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-300"
            >
              
              {/* Preview */}
              <div className="aspect-video bg-[#1e293b] flex items-center justify-center">
                <span className="text-sm text-neutral-400">
                  Project Preview
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition">
                  {project.title}
                </h3>

                <p className="text-neutral-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-white border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-indigo-400 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Project
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}