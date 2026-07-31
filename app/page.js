import Link from "next/link";
import { SITE, NAP, DOCTOR, OFFER, AREAS, SERVICES } from "../lib/practice";
import { Schema, graph, faqSchema, breadcrumbs } from "../lib/schema";

const HOME_FAQS = [
  ["Who is the dentist at Sunland Dental Care?",
   `Sunland Dental Care is led by Dr. Mahvash Emami, DDS, an implantology-focused dentist with ${DOCTOR.yearsExperience} years of clinical experience who has placed thousands of dental implants. She has served the Sunland-Tujunga community from the same practice at 7902 Foothill Blvd since 1991.`],
  ["How much do dental implants cost at Sunland Dental Care?",
   "A complete single dental implant — consultation, 3D imaging, guided surgery, and the final restoration — is offered at one fixed price of $2,000, with no hidden fees. Everything is performed in-house at the Sunland office."],
  ["What areas does Sunland Dental Care serve?",
   "The practice serves Sunland-Tujunga and nearby Foothill communities including Shadow Hills, Lake View Terrace, La Crescenta-Montrose, La Cañada Flintridge, Sun Valley, Glendale, and Burbank — and patients across Greater Los Angeles."],
];

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Schema>{graph(faqSchema(HOME_FAQS), breadcrumbs([{ name: "Home", path: "/" }]))}</Schema>

      {/* ── Hero: Dr. Emami, softly screened into the cream field ── */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0">
          <img src={DOCTOR.heroPhoto} alt="Dr. Mahvash Emami, DDS in the Sunland Dental Care office"
               className="h-full w-full object-cover object-[72%_18%] opacity-[.42]" />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/85 to-cream/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="eyebrow text-brand">Sunland-Tujunga's implant-focused dental practice · Est. {DOCTOR.established}</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">
            Four decades of dentistry. One standard of care: minimally&nbsp;invasive.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            Sunland Dental Care is the practice of <Link href="/dr-emami" className="font-semibold text-ink underline decoration-brand/40 underline-offset-4 hover:decoration-brand">{DOCTOR.name}</Link> —
            an implantology specialist with {DOCTOR.yearsExperience} years of clinical experience and thousands of implants placed.
            Every treatment starts with the same principle: preserve what's healthy, fix only what isn't.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${NAP.phoneIntl}`} className="rounded-full bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark">Call {NAP.phone}</a>
            <Link href="/dental-implants" className="rounded-full border border-ink/25 bg-cream/80 px-6 py-3 font-semibold hover:border-brand hover:text-brand">$2,000 Complete Implants →</Link>
          </div>
          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-6 md:grid-cols-4">
            {[[`${DOCTOR.yearsExperience} yrs`, "Clinical experience"], [String(DOCTOR.established), "Serving Sunland since"], ["1000s", "Implants placed"], ["$2,000", "Complete implant, fixed price"]].map(([v, l]) => (
              <div key={l}>
                <dt className="display text-3xl font-semibold text-brand">{v}</dt>
                <dd className="mt-1 text-sm text-ink-soft">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold md:text-4xl">Complete care, one Foothill Boulevard office</h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          Consultation, 3D imaging, surgery, and restoration all happen in-house — no bouncing between specialists across Los Angeles.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {SERVICES.map((s) => (
            <Link key={s.slug} href={`/${s.slug}`} className="group rounded-2xl border border-line bg-white/60 p-6 transition hover:border-brand/50 hover:bg-white">
              <h3 className="text-xl font-semibold group-hover:text-brand">{s.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{s.blurb}</p>
              <p className="mt-3 text-sm font-semibold text-brand">Learn more →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Philosophy + doctor photo ── */}
      <section className="border-y border-line bg-parchment">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1fr_.8fr]">
          <div>
            <p className="eyebrow text-brand">The philosophy</p>
            <blockquote className="display mt-4 text-2xl font-medium leading-snug md:text-3xl">
              "{DOCTOR.quote}"
            </blockquote>
            <p className="mt-3 text-sm font-semibold">— {DOCTOR.name}</p>
            <p className="mt-6 text-ink-soft">
              Minimally invasive dentistry means using high-magnification diagnostics and 3D imaging to catch problems
              early — and treating them with the most conservative option that works. Healthy tooth structure is never
              sacrificed for convenience.
            </p>
            <p className="mt-4 text-ink-soft">
              It also means treating gum health as whole-body health. Periodontal infection burdens the immune system
              and cardiovascular system, which is why hygiene visits at Sunland Dental Care focus on the gums first,
              not just the teeth.
            </p>
            <Link href="/dr-emami" className="mt-6 inline-block font-semibold text-brand hover:underline">Meet Dr. Emami →</Link>
          </div>
          <img src="/images/dr-emami-office.jpg" alt="Dr. Emami standing beside the welcome table in her Sunland office"
               className="rounded-2xl border border-line object-cover shadow-sm" />
        </div>
      </section>

      {/* ── Offer ── */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl bg-ink px-6 py-12 text-cream md:px-12">
          <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">{OFFER.headline}</h2>
          <p className="mt-4 max-w-2xl text-cream/80">
            {OFFER.includes.join(", ").replace(/, ([^,]*)$/, ", and your $1").toLowerCase()} — {OFFER.note.toLowerCase()}
          </p>
          <Link href="/dental-implants" className="mt-6 inline-block rounded-full bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark">How it works →</Link>
        </div>
      </section>

      {/* ── Areas ── */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-3xl font-semibold">Serving Sunland and 50 miles around it</h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          Located at {NAP.street}, {NAP.city}, CA {NAP.zip}, in the heart of Sunland-Tujunga — and worth the drive from
          anywhere in Greater Los Angeles. Patients visit from:
        </p>
        <ul className="mt-6 flex flex-wrap gap-2 text-sm">
          {AREAS.map((a) => (
            <li key={a} className="rounded-full border border-line bg-white/60 px-3 py-1">{a}</li>
          ))}
        </ul>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-line bg-parchment/60">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-3xl font-semibold">Quick answers</h2>
          <dl className="mt-8 space-y-6">
            {HOME_FAQS.map(([q, a]) => (
              <div key={q}>
                <dt className="font-semibold">{q}</dt>
                <dd className="mt-2 text-ink-soft">{a}</dd>
              </div>
            ))}
          </dl>
          <Link href="/faq" className="mt-8 inline-block font-semibold text-brand hover:underline">See all patient FAQs →</Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold">Ready to talk about your smile?</h2>
        <p className="mx-auto mt-3 max-w-xl text-ink-soft">Call the office or send a message — Dr. Emami personally reviews every new-patient consultation.</p>
        <div className="mt-6 flex justify-center gap-3">
          <a href={`tel:${NAP.phoneIntl}`} className="rounded-full bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark">Call {NAP.phone}</a>
          <Link href="/contact" className="rounded-full border border-ink/25 px-6 py-3 font-semibold hover:border-brand hover:text-brand">Request an Appointment</Link>
        </div>
      </section>
    </>
  );
}
