import Link from "next/link";
import { SITE, NAP, DOCTOR } from "../../lib/practice";
import { Schema, graph, breadcrumbs, faqSchema, personSchema } from "../../lib/schema";

export const metadata = {
  title: "Meet Dr. Mahvash Emami, DDS — 40 Years of Implant Dentistry",
  description: `${DOCTOR.name} is an implantology specialist in Sunland, CA with ${DOCTOR.yearsExperience} years of clinical experience and thousands of implants placed. Founder of Sunland Dental Care, serving the same Foothill Blvd community since ${DOCTOR.established}.`,
  alternates: { canonical: "/dr-emami" },
};

const PAGE_FAQS = [
  ["How long has Dr. Emami been practicing dentistry?",
   `Dr. Mahvash Emami, DDS has ${DOCTOR.yearsExperience} years of clinical experience and has led Sunland Dental Care at the same Foothill Boulevard address since ${DOCTOR.established}.`],
  ["What is Dr. Emami's specialty?",
   "Dr. Emami focuses on implantology — she has placed thousands of dental implants using 3D-guided surgical planning — alongside conservative restorative, cosmetic, and family dentistry."],
  ["Does Dr. Emami perform the implant procedure herself?",
   "Yes. Consultation, 3D imaging, guided placement, and the final restoration are all performed by Dr. Emami in the Sunland office, rather than being referred out to separate specialists."],
];

const profilePage = {
  "@type": "ProfilePage",
  "@id": `${SITE.url}/dr-emami#page`,
  url: `${SITE.url}/dr-emami`,
  name: `Meet ${DOCTOR.name}`,
  mainEntity: { "@id": `${SITE.url}/#dr-emami` },
};

export default function DrEmami() {
  return (
    <>
      <Schema>{graph(profilePage, faqSchema(PAGE_FAQS), breadcrumbs([
        { name: "Home", path: "/" }, { name: "Dr. Emami", path: "/dr-emami" },
      ]))}</Schema>

      {/* ── Profile hero ── */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0">
          <img src="/images/dr-emami-hero.jpg" alt="" aria-hidden="true" className="h-full w-full object-cover object-[72%_18%] opacity-[.30]" />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/85 to-cream/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[.72fr_1fr] md:py-20">
          <img src={DOCTOR.photo} alt={`${DOCTOR.name}, implantology specialist at Sunland Dental Care in Sunland, CA`}
               className="mx-auto w-full max-w-sm rounded-3xl border border-line shadow-md" />
          <div>
            <p className="eyebrow text-brand">Founder · Sunland Dental Care · Est. {DOCTOR.established}</p>
            <h1 className="mt-3 text-4xl font-semibold md:text-5xl">Dr. Mahvash Emami, <span className="text-brand">DDS</span></h1>
            <p className="mt-2 text-lg text-ink-soft">{DOCTOR.title}</p>
            <p className="mt-6 max-w-xl text-ink-soft">
              In implantology, there is no substitute for experience. Dr. Emami has spent four decades perfecting the
              art of the dental implant — thousands placed, planned in a virtual 3D environment before surgery ever
              begins, and restored in the same office where the first consultation happened.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${NAP.phoneIntl}`} className="rounded-full bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark">Book with Dr. Emami — {NAP.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-3xl font-semibold">Same doctor. Same address. Since 1991.</h2>
        <div className="mt-6 space-y-5 text-ink-soft">
          <p>
            Dr. Emami opened Sunland Dental Care at {NAP.street} in {DOCTOR.established}, and she has treated the
            Sunland-Tujunga community from that same office ever since — long enough that the grandchildren of her
            first patients now sit in the same chairs. That continuity is rare in Los Angeles dentistry, and it shapes
            how she practices: when your dentist expects to see you for decades, the only treatment worth doing is the
            one that lasts.
          </p>
          <p>
            Her clinical focus is implantology. Over {DOCTOR.yearsExperience} years she has placed thousands of
            implants, and she pairs that experience with 3D-guided surgery — every case is planned digitally,
            millimeter by millimeter, before the procedure begins. The result is placement that is precise, minimally
            invasive, and predictable, with faster recovery for the patient.
          </p>
          <p>
            Just as defining is what she declines to do. Dr. Emami practices conservative dentistry: high-magnification
            diagnostics to catch problems early, the least invasive option that genuinely works, and a firm habit —
            one her patients mention often — of talking people <em>out</em> of treatment they don't need.
          </p>
        </div>

        <blockquote className="display mt-10 border-l-4 border-brand pl-6 text-2xl font-medium leading-snug">
          "{DOCTOR.quote}"
        </blockquote>
        <p className="mt-3 pl-6 text-sm font-semibold">— {DOCTOR.name}</p>

        <div className="mt-6 space-y-5 text-ink-soft">
          <p>
            That philosophy — the mouth as the gateway to the body — is why hygiene visits at Sunland Dental Care start
            with the gums, not just the teeth. Eliminating periodontal infection takes pressure off the immune system
            and the heart, and it is the foundation every implant, veneer, and restoration is built on.
          </p>
        </div>
      </section>

      {/* ── Credentials & recognition ── */}
      <section className="border-y border-line bg-parchment/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-semibold">Credentials & recognition</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-line bg-white/70 p-6">
              <p className="display text-xl font-semibold">Doctor of Dental Surgery</p>
              <p className="mt-2 text-sm text-ink-soft">DDS, licensed by the Dental Board of California. {DOCTOR.yearsExperience} years of continuous clinical practice.</p>
            </div>
            <div className="rounded-2xl border border-line bg-white/70 p-6">
              <p className="display text-xl font-semibold">Implantology focus</p>
              <p className="mt-2 text-sm text-ink-soft">Thousands of implants placed and restored using 3D-guided surgical planning, performed start to finish in-house.</p>
            </div>
            <div className="rounded-2xl border border-line bg-white/70 p-6">
              <p className="display text-xl font-semibold">Patient-rated care</p>
              <p className="mt-2 text-sm text-ink-soft">
                Independently reviewed by patients on{" "}
                <a className="underline hover:text-brand" href={DOCTOR.profiles.usNews} rel="noopener">U.S. News Health</a>,{" "}
                <a className="underline hover:text-brand" href={DOCTOR.profiles.healthgrades} rel="noopener">Healthgrades</a>, and{" "}
                <a className="underline hover:text-brand" href="https://www.yelp.com/biz/sunland-dental-care-sunland-2" rel="noopener">Yelp</a>,
                where patients consistently describe her as honest, gentle, and thorough.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The office ── */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold">The office on Foothill Boulevard</h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          A neighborhood practice, not a clinic chain — consultation, imaging, surgery, and restoration all under one roof.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
          <img src="/images/office-waiting.jpg" alt="Waiting area at Sunland Dental Care" className="h-64 w-full rounded-2xl border border-line object-cover md:h-80" />
          <img src="/images/office-operatory.jpg" alt="Treatment room with modern dental equipment at Sunland Dental Care" className="h-64 w-full rounded-2xl border border-line object-cover md:h-80" />
          <img src="/images/office-reception.jpg" alt="Reception at Sunland Dental Care on Foothill Blvd" className="col-span-2 h-64 w-full rounded-2xl border border-line object-cover md:col-span-1 md:h-80" />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-line bg-parchment/60">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-3xl font-semibold">About Dr. Emami</h2>
          <dl className="mt-8 space-y-6">
            {PAGE_FAQS.map(([q, a]) => (
              <div key={q}><dt className="font-semibold">{q}</dt><dd className="mt-2 text-ink-soft">{a}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold">Meet her in person</h2>
        <p className="mx-auto mt-3 max-w-xl text-ink-soft">Dr. Emami personally reviews every new-patient consultation.</p>
        <div className="mt-6 flex justify-center gap-3">
          <a href={`tel:${NAP.phoneIntl}`} className="rounded-full bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark">Call {NAP.phone}</a>
          <Link href="/new-patients" className="rounded-full border border-ink/25 px-6 py-3 font-semibold hover:border-brand hover:text-brand">New-patient info</Link>
        </div>
      </section>
    </>
  );
}
