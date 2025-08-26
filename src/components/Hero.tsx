import { motion } from "framer-motion";

interface HeroProps {
  name: string;
  role: string;
  summary: string;
  links: {
    github: string;
    linkedin: string;
    leetcode: string;
    gfg: string;
    resume?: string; // Add this line
  };
}

export default function Hero({ name, role, summary, links }: HeroProps) {
  return (
    <header id="home" className="section pt-28 sm:pt-32 pb-20">
      <div className="grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
          >
            Hi, I’m <span className="gradient-text">{name}</span>
          </motion.h1>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
            className="mt-3 text-xl sm:text-2xl text-slate-300"
          >
            {role}
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-slate-300/90 leading-relaxed"
          >
            {summary}
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="px-5 py-3 rounded-xl bg-emerald-500 text-slate-900 font-semibold hover:brightness-95"
            >
              View Projects
            </a>
            {links.resume && (
              <a
                href={links.resume}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl bg-teal-500 text-slate-900 font-semibold hover:brightness-95"
              >
                View Resume
              </a>
            )}
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10"
            >
              GitHub
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>

        <div className="md:col-span-5">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, delay: 0.15 }}
            className="card p-8 text-center"
          >
            <p className="text-slate-300">
              Solve DSA daily, build neat products, and keep learning.
            </p>
            <div className="mt-4 flex justify-center gap-4 text-sm">
              <a
                href={links.leetcode}
                target="_blank"
                rel="noreferrer"
                className="underline text-teal-300"
              >
                LeetCode
              </a>
              <a
                href={links.gfg}
                target="_blank"
                rel="noreferrer"
                className="underline text-teal-300"
              >
                GeeksforGeeks
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
