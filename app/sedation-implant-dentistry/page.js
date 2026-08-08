import Link from "next/link";
import { NAP, DOCTOR } from "../../lib/practice";
import { Schema, graph, breadcrumbs, faqSchema, serviceSchema, webPage } from "../../lib/schema";
import { PageHero, Reviewed, FaqBlock, Cta, Prose } from "../../components/blocks";

export const metadata = {
  title: "Sedation for Dental Implant Placement — Sunland, CA",
  description: `Sedation is available at Sunland Dental Care specifically for dental implant placement, so anxious patients can have implant surgery in comfort. Ask ${DOCTOR.name} whether it's right for your case.`,
  alternates: { canonical: "/sedation-implant-dentistry" },
};

const FAQS = [
  ["Do you offer sedation for all procedures?",
   "No — sedation at Sunland Dental Care is offered specifically for dental implant placement. Routine care such as cleanings, fillings, and crowns is performed with local anesthesia, which keeps those visits simple and lets you drive yourself home."],
  ["Will I be asleep during my implant surgery?",
   "Sedation options range from lightly relaxed to deeply drowsy. Most sedated patients remain able to respond but feel detached from the procedure and remember little of it afterward. Dr. Emami will explain exactly which option suits your case and health history at your consultation."],
  ["Who is a good candidate for sedation during implant placement?",
   "Patients with significant dental anxiety, a strong gag reflex, difficulty staying comfortable for longer appointments, or those having several implants placed in one visit. Your medical history and medications determine what's appropriate and safe."],
  ["Do I need someone to drive me home?",
   "Yes. Any patient receiving sedation needs a responsible adult to drive them home and stay with them afterward. You'll receive complete written instructions before the appointment."],
];

export default function Page() {
  return (
    <>
      <Schema>{graph(serviceSchema({ name: "Sedation for Implant Placement", path: "/sedation-implant-dentistry", description: "Sedation offered for dental implant placement at Sunland Dental Care, Sunland, CA." }), webPage({ path: "/sedation-implant-dentistry", name: "Sedation for Implant Placement" }), faqSchema(FAQS), breadcrumbs([
        { name: "Home", path: "/" }, { name: "Sedation for Implants", path: "/sedation-implant-dentistry" }]))}</Schema>
      <PageHero image="/images/ill/sedation.svg" pos="center" eyebrow="Sedation · For implant placement"
        title={<>Sleep through the part <span className="text-brand">you're dreading</span></>}
        lead="For patients whose anxiety has stood between them and fixing their smile, sedation is available specifically for implant placement — so the surgery becomes something you barely remember rather than something you postpone for years." />
      <Reviewed />
      <Prose>
        <h2>Why offer it only for implants</h2>
        <p>Sedation carries real requirements — a health review, a driver, recovery time — and most dentistry simply doesn't need it. Cleanings, fillings, and crowns are comfortable with local anesthesia alone, and adding sedation to them would add cost and complication for no benefit.</p>
        <p>Implant placement is the exception worth making. It's the longest appointment most patients will have, the one that carries the word "surgery," and the one that fear most often postpones — sometimes for years, while bone quietly disappears from the site. Removing that barrier is why sedation exists here.</p>
        <h2>What the appointment looks like</h2>
        <ol>
          <li><strong>Health review first.</strong> Your medical history, medications, and conditions determine what's appropriate — this conversation happens well before surgery day.</li>
          <li><strong>Written instructions.</strong> When to stop eating, which medications to take, and arranging your driver.</li>
          <li><strong>The procedure.</strong> You'll be relaxed and detached; most patients report the appointment felt far shorter than it was.</li>
          <li><strong>Recovery with someone you trust.</strong> Your driver takes you home, and you rest the remainder of the day.</li>
        </ol>
        <h2>Honest expectations</h2>
        <p>Sedation manages anxiety — it isn't a substitute for gentle technique. Every implant here is <Link href="/dental-implants">planned in 3D</Link> before surgery, so placement is precise and the surgical site small; most patients say afterward the procedure was milder than they'd built it up to be. Read <Link href="/blog/do-dental-implants-hurt">what implant surgery actually feels like</Link> — for many people, that alone settles the question.</p>
        <p>And if fear is what's kept you from the dentist entirely, sedation isn't the first step — <Link href="/blog/afraid-of-the-dentist">a conversation is</Link>.</p>
      </Prose>
      <FaqBlock title="Sedation questions" faqs={FAQS} />
      <Cta title="Ask whether sedation is right for you" body={`Bring your health history and your concerns. Call ${NAP.phone} — ${DOCTOR.shortName} will give you a straight answer.`} />
    </>
  );
}
