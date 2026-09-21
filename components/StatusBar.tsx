const stats = [
  { label: "EXPERIENCE", value: "7+ yrs" },
  { label: "CERTIFICATIONS", value: "5" },
  { label: "AUTOMATION FOCUS", value: "AIOps" },
  { label: "REGION", value: "Chennai, IN" },
  { label: "STATUS", value: "AVAILABLE" },
];

export default function StatusBar() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded border border-term-border bg-term-border text-xs sm:grid-cols-5">
      {stats.map((s) => (
        <div key={s.label} className="bg-term-panel px-4 py-3">
          <p className="text-term-dim">{s.label}</p>
          <p className="mt-1 truncate font-semibold text-term-green">
            {s.value}
          </p>
        </div>
      ))}
    </div>
  );
}
