import { motion } from "framer-motion";

export default function Skills({ skills }: { skills: string[] }) {
  return (
    <section id="skills" className="section py-16">
      <h3 className="text-2xl font-bold text-white">Skills</h3>
      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((s, i) => (
          <motion.span
            key={s}
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.02 }}
            className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-slate-200"
          >
            {s}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
