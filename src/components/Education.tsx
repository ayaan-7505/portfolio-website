export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  gpa?: string;
  score?: string;
}

export default function Education({ items }: { items: EducationItem[] }) {
  return (
    <section id="education" className="section py-16">
      <h3 className="text-2xl font-bold text-white">Education</h3>
      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        {items.map((ed, i) => (
          <div key={i} className="card p-6">
            <h4 className="text-lg font-semibold text-white">{ed.institution}</h4>
            <p className="text-slate-300 mt-1">{ed.degree}</p>
            <p className="text-slate-400 text-sm mt-1">{ed.duration}</p>
            {ed.gpa && (
              <p className="text-emerald-300 mt-2 font-medium">GPA: {ed.gpa}</p>
            )}
            {ed.score && (
              <p className="text-emerald-300 mt-2 font-medium">Score: {ed.score}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
