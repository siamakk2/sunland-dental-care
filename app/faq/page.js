import { NAP, DOCTOR } from "../../lib/practice";
import { Schema, graph, breadcrumbs, faqSchema } from "../../lib/schema";
import { PageHero, Cta } from "../../components/blocks";

export const metadata = {
  title: "Patient FAQ — Sunland Dental Care",
  description: "Answers to common questions about Sunland Dental Care: the $2,000 complete implant, patient comfort, insurance, hours, and Dr. Emami's minimally invasive approach.",
  alternates: { canonical: "/faq" },
};

const FAQS = [
  ["What is Sunland Dental Care's approach to patient comfort?",
   "Comfort starts with communication: every procedure is explained clearly before it begins, and treatment is as conservative and gentle as the case allows. Patients regularly describe their visits as far easier than they feared — even for extractions and implant surgery."],
  ["Who is Dr. Emami?",
   `${DOCTOR.name} is an implantology specialist with ${DOCTOR.yearsExperience} years of clinical experience and thousands of implants placed. She founded Sunland Dental Care in ${DOCTOR.established} and still personally performs every stage of treatment.`],
  ["How much does a dental implant cost?",
   "A complete single implant — consultation, 3D imaging, guided surgery, and final crown — is $2,000, fixed, with no hidden fees."],
  ["Where is the office and when is it open?",
   `${NAP.street}, ${NAP.city}, CA ${NAP.zip}, on Foothill Boulevard in the heart of Sunland-Tujunga. Hours are ${NAP.hours}; the office is closed Saturday and Sunday. Call ${NAP.phone}.`],
  ["Do you take new patients?",
   "Yes — new patients are welcome, and Dr. Emami personally reviews every new-patient consultation. See the New Patients page for what to expect at a first visit."],
  ["Do you accept insurance?",
   "Call the office with your plan details and the front desk will verify coverage and give you exact out-of-pocket costs before treatment begins."],
  ["What languages does the office serve?",
   "The office welcomes patients in English, Spanish, and Farsi — reflecting the Foothill and San Fernando Valley communities it has served since 1991."],
  ["What makes this practice different from other Los Angeles dentists?",
   "Three things: continuity (same doctor, same address since 1991), completeness (implants planned, placed, and restored in-house), and conservatism (a documented habit of recommending less treatment, not more)."],
];

export default function Page() {
  return (
    <>
      <Schema>{graph(faqSchema(FAQS), breadcrumbs([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]))}</Schema>
      <PageHero image="/images/hero-treatment.jpg" pos="center 35%" eyebrow="Patient FAQ" title="Questions patients actually ask"
        lead={`Can't find your answer? Call ${NAP.phone} or email ${NAP.email} — a real person at the Sunland office will help.`} />
      <section className="mx-auto max-w-4xl px-4 py-14">
        <dl className="space-y-8">
          {FAQS.map(([q, a]) => (
            <div key={q} className="rounded-2xl border border-line bg-white/60 p-6">
              <dt className="text-lg font-semibold">{q}</dt>
              <dd className="mt-2 text-ink-soft">{a}</dd>
            </div>
          ))}
        </dl>
      </section>
      <Cta />
    </>
  );
}
