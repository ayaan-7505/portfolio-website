import { motion } from "framer-motion";

export interface Project {
  title: string;
  description: string;
  github: string;
  demo?: string;
}

export default function Projects({ items }: { items: Project[] }) {
  return (
    <section id="projects" className="section py-16">
      <h3 className="text-2xl font-bold text-white">Projects</h3>
      <div className="mt-6 grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {items.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="card p-6 hover:bg-white/10 transition-colors"
          >
            <h4 className="text-lg font-semibold text-white">{p.title}</h4>
            <p className="text-slate-300 mt-2">{p.description}</p>
            <div className="mt-4 flex gap-4">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="text-teal-300 hover:text-teal-400 transition-colors underline"
              >
                GitHub →
              </a>
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-400 hover:text-green-500 transition-colors underline"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
