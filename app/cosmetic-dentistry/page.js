import { DOCTOR } from "../../lib/practice";
import { Schema, graph, breadcrumbs, faqSchema } from "../../lib/schema";
import { PageHero, Reviewed, FaqBlock, Cta, Prose } from "../../components/blocks";

export const metadata = {
  title: "Cosmetic Dentistry in Sunland, CA — Veneers, Whitening & Smile Makeovers",
  description: `Veneers, crowns, professional whitening, and full smile makeovers by ${DOCTOR.name} in Sunland, CA. Natural results built on a conservative, minimally invasive philosophy.`,
  alternates: { canonical: "/cosmetic-dentistry" },
};

const FAQS = [
  ["What cosmetic services does Sunland Dental Care offer?",
   "Porcelain veneers, cosmetic crowns, professional teeth whitening, bonding, and complete smile makeovers — designed around your facial features and goals, not a one-size-fits-all template."],
  ["Will my results look natural?",
   "That is the explicit goal. Dr. Emami designs cosmetic work to suit your face, skin tone, and smile line, so the result reads as a naturally beautiful smile rather than obvious dental work."],
  ["Do veneers damage healthy teeth?",
   "Conservative preparation is central to Dr. Emami's approach: she removes the minimum enamel required, and if a more conservative option like whitening or bonding can achieve your goal, she will recommend it first."],
  ["How do I start a smile makeover?",
   "With a consultation. Dr. Emami evaluates your teeth, gums, and bite, listens to what you want to change, and builds a personalized plan — which may combine whitening, veneers, crowns, or orthodontics."],
];

export default function Page() {
  return (
    <>
      <Schema>{graph(faqSchema(FAQS), breadcrumbs([
        { name: "Home", path: "/" }, { name: "Cosmetic Dentistry", path: "/cosmetic-dentistry" }]))}</Schema>
      <PageHero image="/images/dr-emami-hero.jpg" pos="72% 20%" eyebrow="Cosmetic dentistry"
        title="A naturally beautiful smile, designed for your face"
        lead="At Sunland Dental Care, we listen carefully to what you want to change, then design a plan around your individual goals. The result is a smile that looks like you — at your best." />
      <Reviewed />
      <Prose>
        <h2>Cosmetic care, conservative principles</h2>
        <p>Cosmetic dentistry here follows the same rule as everything else in the practice: preserve what's healthy. Whitening before veneers where whitening will do. Bonding before crowns where bonding will last. When more is genuinely needed, it's done precisely and built to age well.</p>
        <h3>Porcelain veneers</h3>
        <p>Thin, custom-shaded porcelain that corrects chips, gaps, discoloration, and shape — with minimal preparation of the underlying tooth.</p>
        <h3>Professional whitening</h3>
        <p>Safe, supervised whitening that lifts years of staining without damaging enamel — often the highest-impact, lowest-intervention change a smile can get.</p>
        <h3>Crowns and bonding</h3>
        <p>Restorations matched to your natural teeth in shade and translucency, restoring strength and appearance together.</p>
        <h3>Complete smile makeovers</h3>
        <p>For bigger transformations, Dr. Emami sequences whitening, veneers, crowns, and orthodontics into one coordinated plan — assessed and delivered in a single office.</p>
      </Prose>
      <FaqBlock title="Cosmetic dentistry questions" faqs={FAQS} />
      <Cta title="Bring in the smile you have in mind" />
    </>
  );
}
