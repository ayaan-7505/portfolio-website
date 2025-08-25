export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  leetcode?: string;
  gfg?: string;
}

export default function Contact({ info }: { info: ContactInfo }) {
  return (
    <section id="contact" className="section py-16">
      <h3 className="text-2xl font-bold text-white">Contact</h3>
      <div className="mt-6 card p-6 text-slate-300">
        <p>
          <span className="text-slate-400">E-mail:</span>{" "}
          <a
            className="underline text-teal-300"
            href={`mailto:${info.email}`}
          >
            {info.email}
          </a>
        </p>
        <p className="mt-2">
          <span className="text-slate-400">Phone:</span> {info.phone}
        </p>
        <p className="mt-2">
          <span className="text-slate-400">Location:</span> {info.location}
        </p>
        <div className="mt-4 flex gap-4">
          <a className="underline text-teal-300" href={info.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="underline text-teal-300" href={info.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
