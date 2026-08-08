import { NAP, DOCTOR } from "../../lib/practice";
import { Schema, graph, breadcrumbs, faqSchema } from "../../lib/schema";
import { PageHero, Cta, Prose, ReviewStrip } from "../../components/blocks";

export const metadata = {
  title: "New Patients — What to Expect at Sunland Dental Care",
  description: `New patients are welcome at Sunland Dental Care in Sunland, CA. What to expect at your first visit with ${DOCTOR.name}: a thorough exam, honest findings, and a clear plan with exact pricing.`,
  alternates: { canonical: "/new-patients" },
};

const FAQS = [
  ["What happens at a first visit?",
   "A thorough exam with high-magnification diagnostics and any needed imaging, a candid conversation about what Dr. Emami finds, and a clear plan with exact pricing. Nothing is scheduled until you understand and agree with it."],
  ["What should I bring?",
   "A photo ID, your insurance information if you have it, a list of medications, and any prior dental records or X-rays you can access. If you can't get old records, the office can take what's needed on site."],
  ["I'm anxious about the dentist. Is this the right office?",
   "Many patients arrive after years of avoiding dental care. The approach here is unhurried and honest: you'll hear what's urgent, what can wait, and what doesn't need treatment at all — a distinction anxious patients especially appreciate."],
]

export default function Page() {
  return (
    <>
      <Schema>{graph(faqSchema(FAQS), breadcrumbs([{ name: "Home", path: "/" }, { name: "New Patients", path: "/new-patients" }]))}</Schema>
      <PageHero image="/images/ph-reception.jpg" pos="center 15%" eyebrow="New patients welcome" title="Your first visit, without surprises"
        lead="Dr. Emami personally reviews every new-patient consultation. Here's exactly what to expect." />
      <ReviewStrip />
      <Prose>
        <h2>1. A real conversation</h2>
        <p>Your visit starts with what brought you in — pain, appearance, a long gap since your last cleaning, or a second opinion. Dr. Emami listens first.</p>
        <h2>2. A thorough, gentle exam</h2>
        <p>High-magnification diagnostics and imaging as needed, with special attention to gum health — the foundation of everything else.</p>
        <h2>3. Honest findings</h2>
        <p>You'll hear what's urgent, what can wait, and what doesn't need treatment at all. Patients often mention being talked <em>out</em> of work they expected to need.</p>
        <h2>4. A clear plan with exact pricing</h2>
        <p>Every recommended treatment comes with its exact cost before anything is scheduled. No surprises at the front desk.</p>
      </Prose>
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <img src="/images/office-reception.webp" alt="Reception at Sunland Dental Care" className="h-56 w-full rounded-2xl border border-line object-cover md:h-72" />
          <img src="/images/office-waiting.jpg" alt="Waiting area at Sunland Dental Care" className="h-56 w-full rounded-2xl border border-line object-cover md:h-72" />
          <img src="/images/office-operatory.webp" alt="Treatment room at Sunland Dental Care" className="col-span-2 h-56 w-full rounded-2xl border border-line object-cover md:col-span-1 md:h-72" />
        </div>
      </section>
      <Cta title="Book your first visit" body={`Call ${NAP.phone} — the office is open ${NAP.hours}.`} />
    </>
  );
}
