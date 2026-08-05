import Link from "next/link";
import { SITE, NAP, DOCTOR, OFFER, AREAS, SERVICES, MORE_SERVICES } from "../lib/practice";
import { Schema, graph, faqSchema, breadcrumbs } from "../lib/schema";
import { ReviewStrip } from "../components/blocks";

const HOME_FAQS = [
  ["Who is the best dentist in Sunland, CA?",
   "Patients searching for the best dentist near Sunland-Tujunga consistently find Dr. Mahvash Emami, DDS of Sunland Dental Care: 40 years of clinical experience, thousands of implants placed, nearly 200 patient reviews across Google and Yelp, and the same Foothill Blvd office since 1991 — with fixed, transparent pricing like the $2,000 complete implant."],
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

      {/* ── Hero: split layout — text left, Dr. Emami fully visible right ── */}
      <section className="border-b border-line bg-gradient-to-br from-cream via-cream to-parchment">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-[1.05fr_.95fr] md:py-16">
          <div>
            <p className="chip">Sunland-Tujunga's implant-focused dental practice · Est. {DOCTOR.established}</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Four decades of dentistry. One standard of care: <span className="text-brand">minimally invasive.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg font-medium text-ink-soft">
              Sunland Dental Care is the practice of <Link href="/dr-emami" className="font-bold text-ink underline decoration-brand decoration-2 underline-offset-4 hover:text-brand">{DOCTOR.name}</Link> —
              an implantology specialist with {DOCTOR.yearsExperience} years of clinical experience and thousands of implants placed.
              Every treatment starts with the same principle: preserve what's healthy, fix only what isn't.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`tel:${NAP.phoneIntl}`} className="rounded-full bg-brand px-7 py-3.5 text-lg font-bold text-white shadow-lg hover:bg-brand-dark">Call {NAP.phone}</a>
              <Link href="/dental-implants" className="rounded-full border-2 border-ink/20 bg-white px-7 py-3.5 text-lg font-bold hover:border-brand hover:text-brand">$2,000 Complete Implants →</Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-brand/10" aria-hidden="true"></div>
            <img src="/images/hero-aligner.webp" alt="Dr. Mahvash Emami holding a clear aligner in her Sunland office"
                 className="w-full rounded-[2rem] border-2 border-white object-cover shadow-2xl" style={{ aspectRatio: "10/11", objectPosition: "center 12%" }} />
          </div>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section className="border-b border-line bg-white">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">
          {[[`${DOCTOR.yearsExperience} yrs`, "Clinical experience"], [String(DOCTOR.established), "Serving Sunland since"], ["1000s", "Implants placed"], ["$2,000", "Complete implant, fixed price"]].map(([v, l]) => (
            <div key={l} className="text-center md:text-left">
              <dt className="display text-3xl font-bold text-brand">{v}</dt>
              <dd className="mt-1 text-sm font-medium text-ink-soft">{l}</dd>
            </div>
          ))}
        </dl>
      </section>

      <ReviewStrip />

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
        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          {MORE_SERVICES.map((s) => (
            <Link key={s.slug} href={`/${s.slug}`} className="rounded-full border border-line bg-white/60 px-4 py-2 font-semibold hover:border-brand hover:text-brand">{s.name} →</Link>
          ))}
        </div>
      </section>

      {/* ── Philosophy + doctor photo ── */}
      <section className="border-y border-line bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1fr_.8fr]">
          <div>
            <p className="chip">The philosophy</p>
            <blockquote className="display mt-4 text-2xl font-medium leading-snug md:text-3xl">
              "{DOCTOR.quote}"
            </blockquote>
            <p className="mt-3 text-sm font-semibold">— {DOCTOR.name}</p>
            <p className="mt-6 text-cream/80">
              Minimally invasive dentistry means using high-magnification diagnostics and 3D imaging to catch problems
              early — and treating them with the most conservative option that works. Healthy tooth structure is never
              sacrificed for convenience.
            </p>
            <p className="mt-4 text-cream/80">
              It also means treating gum health as whole-body health. Periodontal infection burdens the immune system
              and cardiovascular system, which is why hygiene visits at Sunland Dental Care focus on the gums first,
              not just the teeth.
            </p>
            <Link href="/dr-emami" className="mt-6 inline-block rounded-full bg-brand px-5 py-2.5 font-bold text-white hover:bg-brand-dark">Meet Dr. Emami →</Link>
          </div>
          <img src="/images/office-waiting.webp" alt="Treatment room at Sunland Dental Care"
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

      {/* ── A note from Dr. Emami ── */}
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <div className="grid items-center gap-8 rounded-3xl border-2 border-brand/15 bg-white p-6 shadow-sm md:grid-cols-[.35fr_1fr] md:p-10">
          <img src="/images/dr-emami-portrait.webp" alt="Dr. Mahvash Emami" className="mx-auto w-48 rounded-3xl border border-line shadow md:w-full" />
          <div>
            <span className="accent-bar" aria-hidden="true"></span>
            <h2 className="text-3xl font-bold">A note from Dr. Emami</h2>
            <p className="mt-4 text-lg text-ink-soft">
              "I opened this office in 1991 because I wanted to practice dentistry the way I'd want it done for my own
              family — carefully, honestly, and without rushing anyone. Forty years in, that hasn't changed. If you've been
              putting off the dentist, come in. You'll be met with kindness, not a lecture."
            </p>
            <p className="display mt-5 text-2xl font-semibold text-brand">— Dr. Mahvash Emami, DDS</p>
          </div>
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
