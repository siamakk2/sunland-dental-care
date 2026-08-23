import Link from "next/link";
import { NAP, DOCTOR, SITE } from "../../lib/practice";
import { Schema, graph, breadcrumbs, faqSchema, webPage } from "../../lib/schema";
import { PageHero, Cta, ReviewStrip } from "../../components/blocks";

export const metadata = {
  title: "Ask Dr. Emami — Real Questions From Real Patients",
  description: `The questions patients actually ask ${DOCTOR.name} in the chair, answered plainly: implant failure, bone and sinus limitations, gum disease and heart health, root canals, night guards, dental fear, and age limits for implants.`,
  alternates: { canonical: "/ask-dr-emami" },
};

const QA = [
  ["Is it true that a dental implant might fail?",
   "Yes, it's possible — long-term implant success is commonly reported above 90–95%, but no procedure succeeds every time. Most failures trace to identifiable causes: smoking, uncontrolled diabetes, untreated gum infection, grinding, or placement into inadequate bone. Early failure means the implant never fused to bone; late failure is usually peri-implantitis, infection of the gum and bone around it.",
   "/blog/can-dental-implants-fail", "Read the full answer on implant failure"],
  ["Can an implant be done with a low sinus and lack of bone?",
   "In most cases yes. When an upper back tooth is lost, the sinus expands downward and bone height shrinks — but a sinus lift raises the sinus membrane and places bone graft beneath it, restoring the height an implant needs. Many patients told years ago that upper implants were impossible are candidates today, particularly since 3D imaging replaced flat X-rays.",
   "/blog/sinus-lift-implants-upper-jaw", "Read about sinus lifts and bone grafting"],
  ["Is there a connection between gum disease and heart problems?",
   "Research consistently finds an association: people with periodontal disease have higher rates of cardiovascular disease. Whether gum disease causes heart disease isn't settled — they share risk factors like smoking, diabetes, and age, and the proposed mechanism is chronic inflammation. Treating gum disease clearly lowers inflammatory markers. The mouth is the gateway to the body, and gum health is worth protecting regardless of how that research resolves.",
   "/blog/gum-disease-and-heart-health", "Read what the evidence actually shows"],
  ["Can a root canal fail?",
   "Yes, though most succeed and many treated teeth last a lifetime. Failures usually happen years later: a canal that couldn't be fully cleaned, decay or leakage around the restoration, a new crack, or a back tooth that never received its crown. Signs include returning pain on biting, swelling, a gum pimple, or a shadow at the root tip on X-ray. Retreatment often saves the tooth.",
   "/blog/can-a-root-canal-fail", "Read about root canal failure and retreatment"],
  ["Is a night guard helpful after placing an implant?",
   "For patients who grind or clench, very much so. A natural tooth sits in a ligament that cushions force and tells your brain when you're biting too hard. An implant is fused directly to bone with neither cushion nor sensor — so a grinder can overload it every night without feeling a thing. A custom night guard protects the crown, the screw, and the bone around it.",
   "/blog/night-guard-after-dental-implant", "Read why implants need extra protection"],
  ["What can be done to reduce the fear of dentistry?",
   "More than most people expect. Being told what happens before it happens removes most of the fear, because most dental fear is fear of the unknown. Beyond that: thorough anesthesia with the patience to wait for it, an agreed signal that genuinely stops the procedure, honest triage that tells you what does not need treating, and clear written pricing so the bill isn't its own source of dread. Sedation is available specifically for implant placement, but it isn't the starting point.",
   "/blog/dentist-for-anxious-patients-foothills", "Read about care for anxious patients"],
  ["Is placing an implant painful?",
   "The procedure is done under local anesthesia, and most patients feel pressure rather than pain — many say afterward it was easier than the extraction that preceded it. Expect a few days of manageable soreness, handled with over-the-counter medication. Because every case here is planned in 3D beforehand, the surgical site is small and recovery is faster than most people anticipate.",
   "/blog/do-dental-implants-hurt", "Read what implant surgery actually feels like"],
  ["From what age to what age can implants be done?",
   "There's no upper limit — implants are routinely placed for patients in their seventies, eighties, and beyond, where health and bone matter far more than age. There is a lower limit: the jaw must finish growing first, typically in the late teens and often later for young men. An implant placed in a growing jaw stays put while the natural teeth continue moving, and ends up misaligned.",
   "/blog/age-limits-dental-implants", "Read about age and implant candidacy"],
  ["After a root canal, is it better to have a crown or just a filling?",
   "Back teeth — molars and premolars — usually need a crown. They absorb the heaviest chewing force, and a treated tooth without cusp coverage is prone to fracture, sometimes a vertical root fracture that cannot be repaired. Some front teeth with conservative access and intact structure do well with a filling. Either way, don't delay the permanent restoration: temporary fillings leak, and leakage is a leading cause of reinfection.",
   "/blog/crown-or-filling-after-root-canal", "Read the crown vs. filling reasoning"],
  ["Is grinding or clenching damaging the teeth? What is the treatment?",
   "Yes — it's a leading cause of cracked teeth, worn enamel, fractured fillings, and failed crowns, and it stresses implants too. Signs include waking with a sore jaw, temple headaches, sensitivity without decay, and flattened tooth edges. Treatment is a custom night guard to absorb the force, checking the bite for a high spot that may be triggering it, addressing stress and sleep, and restoring damage already done.",
   "/blog/wake-up-with-jaw-pain", "Read about grinding, jaw pain, and night guards"],
];

export default function Page() {
  return (
    <>
      <Schema>{graph(
        webPage({ path: "/ask-dr-emami", name: "Ask Dr. Emami" }),
        faqSchema(QA.map(([q, a]) => [q, a])),
        breadcrumbs([{ name: "Home", path: "/" }, { name: "Ask Dr. Emami", path: "/ask-dr-emami" }]))}</Schema>

      <PageHero image="/images/ph-portrait-tight.jpg" pos="center 15%"
        eyebrow={`Answered by ${DOCTOR.name} · ${DOCTOR.yearsExperience} years in practice`}
        title={<>The questions patients <span className="text-brand">actually ask</span></>}
        lead="These aren't questions we invented for a website. They're the ones patients ask Dr. Emami in the chair — collected from recent weeks in the Sunland office and answered here the way she answers them in person." />
      <ReviewStrip />

      <section className="mx-auto max-w-4xl px-4 py-12">
        <ol className="space-y-8">
          {QA.map(([q, a, href, label], i) => (
            <li key={q} className="rounded-3xl border border-line bg-white p-7 shadow-sm">
              <div className="flex gap-4">
                <span className="display flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">{i + 1}</span>
                <div>
                  <h2 className="text-xl font-bold leading-snug">{q}</h2>
                  <p className="mt-3 text-ink-soft">{a}</p>
                  <Link href={href} className="mt-4 inline-block text-sm font-bold text-brand hover:underline">{label} →</Link>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-parchment/60">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center">
          <span className="accent-bar mx-auto" aria-hidden="true"></span>
          <h2 className="text-3xl font-bold">Have a question that isn't here?</h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-soft">
            Ask it. Dr. Emami answers questions over the phone every day, and there's no charge for a straight answer
            about whether something needs attention.
          </p>
        </div>
      </section>

      <Cta title="Ask Dr. Emami directly" body={`Call ${NAP.phone} — English, Español, or فارسی. She personally reviews every new-patient consultation.`} />
    </>
  );
}
