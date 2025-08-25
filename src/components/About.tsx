export default function About({ summary }: { summary: string }) {
  return (
    <section id="about" className="section py-16">
      <h3 className="text-2xl font-bold text-white">About</h3>
      <p className="mt-4 text-slate-300 leading-relaxed card p-6">
        {summary}
      </p>
    </section>
  );
}
