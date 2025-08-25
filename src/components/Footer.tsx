export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-slate-950/40 mt-12">
      <div className="section py-6 text-center text-slate-400">
        © {year} Ayaan Ahmad Siddiqui — Built with React, TypeScript, Three.js, and Framer Motion.
      </div>
    </footer>
  );
}
