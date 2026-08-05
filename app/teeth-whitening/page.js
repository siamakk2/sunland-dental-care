import { NAP, DOCTOR } from "../../lib/practice";
import { Schema, graph, breadcrumbs, faqSchema, serviceSchema, webPage } from "../../lib/schema";
import { PageHero, Reviewed, FaqBlock, Cta, Prose } from "../../components/blocks";

export const metadata = {
  title: "Professional Teeth Whitening in Sunland, CA",
  description: `Professional, dentist-supervised teeth whitening in Sunland, CA with ${DOCTOR.name}. Safely lift years of staining — often the highest-impact, lowest-intervention smile change there is.`,
  alternates: { canonical: "/teeth-whitening" },
};

const FAQS = [
  ["Is professional whitening better than whitening strips?",
   "Meaningfully. Professional whitening uses stronger, dentist-supervised formulas with custom-fitted delivery, so results come faster, whiten more evenly, and protect the gums — and your dentist first confirms your enamel and any dental work can whiten safely."],
  ["Is teeth whitening safe?",
   "Under professional supervision, yes. Dr. Emami examines your teeth first — whitening over undiagnosed decay or gum disease is where problems come from, and crowns and fillings don't whiten, which changes how a smart whitening plan is designed."],
  ["How white will my teeth get?",
   "Most patients lift several shades. The honest answer depends on your starting point and the cause of the staining — coffee and age respond very well; some deep discoloration responds better to bonding or veneers, and you'll be told which camp you're in before spending anything."],
  ["How long do whitening results last?",
   "Typically one to three years, depending on coffee, tea, wine, and smoking habits. Touch-ups are simple once your custom setup exists."],
];

export default function Page() {
  return (
    <>
      <Schema>{graph(serviceSchema({ name: "Teeth Whitening", path: "/teeth-whitening", description: "Dentist-supervised professional teeth whitening in Sunland, CA." }), webPage({ path: "/teeth-whitening", name: "Teeth Whitening" }), faqSchema(FAQS), breadcrumbs([
        { name: "Home", path: "/" }, { name: "Teeth Whitening", path: "/teeth-whitening" }]))}</Schema>
      <PageHero image="/images/invisalign-hero.svg" pos="center 55%" eyebrow="Professional whitening"
        title="The fastest honest upgrade a smile can get"
        lead="Years of coffee and time, lifted safely in a supervised treatment — whitening is the highest-impact, lowest-intervention change in dentistry, when it's done right." />
      <Reviewed />
      <Prose>
        <h2>Why "supervised" is the operative word</h2>
        <p>Whitening is chemistry against your enamel, and it deserves an exam first. Dr. Emami checks for decay, gum inflammation, and existing dental work — then designs whitening that's effective and safe for your actual mouth, not a one-size kit's imaginary one.</p>
        <h2>Whitening as step one</h2>
        <p>Whitening is often the first move in a larger smile plan: whiten first, then match any bonding, crowns, or veneers to the new shade. Because all of that happens in this office, the sequencing is coordinated by one doctor with one standard.</p>
      </Prose>
      <FaqBlock title="Whitening questions" faqs={FAQS} />
      <Cta title="Ready for a brighter smile?" />
    </>
  );
}
