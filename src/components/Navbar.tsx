import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-slate-950/40 border-b border-white/10">
      <div className="section flex items-center justify-between py-3">
        <a href="#" className="font-bold text-white text-lg">
          <span className="gradient-text">Ayaan</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate-200/90 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden section pb-4"
        >
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-200 hover:text-white transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
