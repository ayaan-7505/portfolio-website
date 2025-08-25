type Certificate = {
  name: string;
  link: string;
};

export default function Certificates({ items }: { items: Certificate[] }) {
  return (
    <section id="certificates" className="section py-16">
      <h3 className="text-2xl font-bold text-white">Certificates</h3>
      <ul className="mt-6 grid sm:grid-cols-2 gap-4">
        {items.map((cert) => (
          <li key={cert.name} className="card p-5 text-slate-200">
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              {cert.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
