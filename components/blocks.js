import Link from "next/link";
import { NAP, DOCTOR, REVIEWS } from "../lib/practice";

export function PageHero({ eyebrow, title, lead, image = "/images/dr-emami-hero.webp", pos = "center" }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0">
        <img src={image} alt="" aria-hidden="true"
             className="h-full w-full object-cover opacity-[.85]" style={{ objectPosition: pos }} />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/80 via-cream/40 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="max-w-3xl rounded-3xl bg-cream/85 p-6 shadow-lg ring-1 ring-line backdrop-blur-md md:p-9">
          <p className="chip">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
          {lead && <p className="mt-4 text-lg font-medium text-ink-soft">{lead}</p>}
        </div>
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
        <a href={`sms:${NAP.phoneIntl}`} className="rounded-full border border-brand px-6 py-3 font-semibold text-brand hover:bg-brand hover:text-white">Text us</a>
        <Link href="/contact" className="rounded-full border border-ink/25 px-6 py-3 font-semibold hover:border-brand hover:text-brand">Request an Appointment</Link>
      </div>
    </section>
  );
}

export function ReviewStrip() {
  return (
    <section className="border-y-2 border-brand/20 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-6">
        <div>
          <p className="font-semibold"><span aria-hidden="true" className="text-gold">★★★★★ </span>Trusted by Sunland-Tujunga for {new Date().getFullYear() - DOCTOR.established} years</p>
          <p className="text-sm text-ink-soft">{REVIEWS.blurb} — patients describe care as honest, gentle, and thorough.</p>
        </div>
        <div className="flex gap-3 text-sm font-semibold">
          <a className="rounded-full border border-line bg-cream px-4 py-2 hover:border-brand hover:text-brand" href={REVIEWS.google} rel="noopener">Read Google reviews</a>
          <a className="rounded-full border border-line bg-cream px-4 py-2 hover:border-brand hover:text-brand" href={REVIEWS.yelp} rel="noopener">Read Yelp reviews</a>
        </div>
      </div>
    </section>
  );
}

export function Prose({ children }) {
  return <section className="mx-auto max-w-3xl space-y-5 px-4 py-12 text-ink-soft [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:text-ink [&_h2]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-ink [&_strong]:text-ink">{children}</section>;
}
