import Link from "next/link";
import { NAP, DOCTOR } from "../lib/practice";

export function PageHero({ eyebrow, title, lead }) {
  return (
    <section className="border-b border-line bg-parchment/60">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
        <p className="eyebrow text-brand">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">{title}</h1>
        {lead && <p className="mt-5 max-w-2xl text-lg text-ink-soft">{lead}</p>}
      </div>
    </section>
  );
}

export function Reviewed() {
  return (
    <p className="mx-auto mt-2 max-w-6xl px-4 pt-6 text-sm text-ink-soft">
      Clinical content reviewed by <Link href="/dr-emami" className="font-semibold underline decoration-brand/40 underline-offset-2 hover:text-brand">{DOCTOR.name}</Link>,
      implantology specialist — {DOCTOR.yearsExperience} years in practice.
    </p>
  );
}

export function FaqBlock({ title = "Common questions", faqs }) {
  return (
    <section className="border-t border-line bg-parchment/60">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <dl className="mt-8 space-y-6">
          {faqs.map(([q, a]) => (
            <div key={q}><dt className="font-semibold">{q}</dt><dd className="mt-2 text-ink-soft">{a}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Cta({ title = "Ready to talk about your smile?", body }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-center">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-ink-soft">{body || "Call the office or send a message — Dr. Emami personally reviews every new-patient consultation."}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a href={`tel:${NAP.phoneIntl}`} className="rounded-full bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark">Call {NAP.phone}</a>
        <Link href="/contact" className="rounded-full border border-ink/25 px-6 py-3 font-semibold hover:border-brand hover:text-brand">Request an Appointment</Link>
      </div>
    </section>
  );
}

export function Prose({ children }) {
  return <section className="mx-auto max-w-3xl space-y-5 px-4 py-12 text-ink-soft [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:text-ink [&_h2]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-ink [&_strong]:text-ink">{children}</section>;
}
