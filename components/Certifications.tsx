const certs = [
  "Microsoft Certified: Azure Administrator Associate (AZ-104)",
  "Aviatrix Certified Multi Cloud Network Associate",
  "Splunk 7.x Fundamentals",
  "Splunk User Behavior Analytics",
  "Cyber Security Operations and Technology Solutions",
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <p className="text-sm text-term-dim">
        <span className="text-term-cyan">$</span> cat ./certifications.txt
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-term-text">
        Certifications
      </h2>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {certs.map((c) => (
          <li
            key={c}
            className="flex items-center gap-3 rounded border border-term-border bg-term-panel px-4 py-3 text-sm text-term-dim"
          >
            <span className="text-term-cyan">✓</span>
            {c}
          </li>
        ))}
      </ul>
    </section>
  );
}
