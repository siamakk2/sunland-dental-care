import { DOCTOR } from "../../lib/practice";
import { Schema, graph, breadcrumbs, faqSchema, serviceSchema, webPage } from "../../lib/schema";
import { PageHero, Reviewed, FaqBlock, Cta, Prose } from "../../components/blocks";

export const metadata = {
  title: "Invisalign & Orthodontics in Sunland, CA",
  description: `Invisalign clear aligner therapy and orthodontic options in Sunland, CA, overseen by ${DOCTOR.name}. Straighten teeth discreetly with a plan built around your schedule.`,
  alternates: { canonical: "/invisalign" },
};

const FAQS = [
  ["How does Invisalign work?",
   "A series of custom, nearly invisible aligners moves your teeth in small, planned steps. You change trays roughly every one to two weeks and visit the office periodically so Dr. Emami can confirm progress."],
  ["How long does Invisalign treatment take?",
   "Most cases run between 6 and 18 months depending on complexity. Simple alignment corrections can be shorter; your timeline is mapped out at the consultation before you commit."],
  ["Is Invisalign as effective as braces?",
   "For most alignment and bite issues, yes. Some complex cases are better served by traditional orthodontics, and Dr. Emami will tell you plainly which category your case falls into."],
  ["Can adults benefit from orthodontics?",
   "Absolutely — a large share of aligner patients are adults. Straighter teeth are also healthier teeth: they are easier to clean and place less uneven stress on gums and joints."],
];

export default function Page() {
  return (
    <>
      <Schema>{graph(serviceSchema({ name: "Invisalign Clear Aligners", path: "/invisalign", description: "Invisalign clear aligner orthodontics in Sunland, CA." }), webPage({ path: "/invisalign", name: "Invisalign Clear Aligners" }), faqSchema(FAQS), breadcrumbs([
        { name: "Home", path: "/" }, { name: "Invisalign", path: "/invisalign" }]))}</Schema>
      <PageHero image="/images/ph-aligner.jpg" pos="center 20%" eyebrow="Invisalign & orthodontics"
        title="Straighter teeth, on your schedule"
        lead="Clear aligner therapy moves your teeth discreetly — no brackets, no wires, and no interruption to how you eat, speak, or look while it happens." />
      <Reviewed />
      <Prose>
        <h2>Why alignment is a health decision</h2>
        <p>Crowded and rotated teeth trap plaque where a brush can't reach, and an uneven bite loads certain teeth and joints harder than others. Orthodontics is cosmetic on the surface — underneath, it's preventive care.</p>
        <h2>How treatment works here</h2>
        <p>Your case starts with imaging and a digital treatment plan, so you can see the projected result before beginning. Aligners are worn about 22 hours a day and swapped on a set schedule, with periodic check-ins at the Sunland office. Because Dr. Emami also handles restorative and cosmetic care, alignment can be sequenced into a larger smile plan when that's the goal.</p>
      </Prose>
      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <img src="/images/aligner-closeup.webp" alt="Dr. Emami holding a clear Invisalign aligner" className="rounded-3xl border border-line shadow-sm" />
          <div>
            <h2 className="text-3xl font-semibold">Nearly invisible, entirely custom</h2>
            <p className="mt-4 text-ink-soft">Each aligner is manufactured for your teeth from a digital scan — thin, clear, and precise. Most people won't notice you're wearing one; you'll notice your smile changing.</p>
          </div>
        </div>
      </section>
      <FaqBlock title="Invisalign questions" faqs={FAQS} />
      <Cta title="See what aligners could do for your smile" />
    </>
  );
}
