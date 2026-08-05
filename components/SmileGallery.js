import { CASES } from "../lib/cases";

export default function SmileGallery({ treatment }) {
  const cases = CASES.filter((c) => !treatment || c.treatment === treatment);
  if (cases.length === 0) return null;
  return (
    <section className="border-t border-line bg-parchment/60">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="eyebrow text-brand">Real patients of Dr. Emami</p>
        <h2 className="mt-2 text-3xl font-semibold">Smile gallery</h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-soft">Actual treatment results from this office, shared with each patient's written consent.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {cases.map((c) => (
            <figure key={c.title} className="rounded-3xl border border-line bg-white/70 p-4">
              <div className="grid grid-cols-2 gap-2">
                <div><img src={c.before} alt={`Before: ${c.title}`} className="w-full rounded-xl border border-line object-cover" /><p className="mt-1 text-center text-xs font-semibold text-ink-soft">BEFORE</p></div>
                <div><img src={c.after} alt={`After: ${c.title}`} className="w-full rounded-xl border border-line object-cover" /><p className="mt-1 text-center text-xs font-semibold text-brand">AFTER</p></div>
              </div>
              <figcaption className="mt-3">
                <p className="font-semibold">{c.title}</p>
                {c.note && <p className="text-sm text-ink-soft">{c.note}</p>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
