export default function Achievements({ items }: { items: string[] }) {
  return (
    <section id="achievements" className="section py-16">
      <h3 className="text-2xl font-bold text-white">Achievements</h3>
      <ul className="mt-6 list-disc pl-6 text-slate-300 space-y-2">
        {items.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </section>
  );
}
