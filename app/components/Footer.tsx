import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#0f172a] text-white border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <Link href="/">
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Anju.dev
              </h2>
            </Link>

            <p className="text-sm text-neutral-400 max-w-xs leading-relaxed">
              Crafting modern, responsive and high-performance web experiences with clean UI & great UX.
            </p>

            <p className="text-sm text-neutral-500">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="md:text-center">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4">
              Navigation
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#projects" className="footer-link">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="footer-link">
                  Contact
                </Link>
              </li>
              <li>
                <a href="/resume.pdf" className="footer-link">
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="md:text-right">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4">
              Connect
            </h3>

            <div className="flex gap-4 md:justify-end">
              <SocialLink href="https://github.com/chdhryanju24-debug" icon={Github} />
              <SocialLink href="#" icon={Linkedin} />
              <SocialLink  href="https://mail.google.com/mail/?view=cm&fs=1&to=yourmail@example.com&subject=Hello%20World&body=Hi%20there" icon={Mail} />
            </div>
            <a
              href="/resume.pdf"
              className="inline-block mt-6 px-5 py-2 text-sm font-medium rounded-full bg-indigo-600 text-white hover:bg-indigo-500 transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-neutral-500">
          Built with Next.js & Tailwind CSS 🚀
        </div>
      </div>
    </footer>
  )
}

/* Social Icon Component */
function SocialLink({
  href,
  icon: Icon,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-white/10 border border-white/10 hover:bg-indigo-500 hover:scale-110 transition duration-300"
    >
      <Icon className="w-5 h-5" />
    </a>
  )
}