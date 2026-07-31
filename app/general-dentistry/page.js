import { DOCTOR } from "../../lib/practice";
import { Schema, graph, breadcrumbs, faqSchema } from "../../lib/schema";
import { PageHero, Reviewed, FaqBlock, Cta, Prose } from "../../components/blocks";

export const metadata = {
  title: "General & Family Dentistry in Sunland, CA",
  description: `Cleanings, periodontal-focused hygiene, fillings, and conservative restorative care for every age at Sunland Dental Care — the Sunland, CA family practice of ${DOCTOR.name} since 1991.`,
  alternates: { canonical: "/general-dentistry" },
};

const FAQS = [
  ["How often should I visit the dentist?",
   "Every six months for an exam and cleaning is the standard for healthy mouths. Patients managing gum disease or extensive restorative work may benefit from more frequent hygiene visits — Dr. Emami sets the interval to your situation."],
  ["Why does Sunland Dental Care focus on gums first?",
   "Because periodontal infection burdens more than the mouth: it adds strain to the immune system and cardiovascular system. Hygiene visits here treat gum health as whole-body health — the foundation everything else is built on."],
  ["Do you treat children and families?",
   "Yes. Sunland Dental Care is a family-oriented practice — some families have been coming since 1991, across three generations."],
  ["What is conservative dentistry?",
   "Using high-magnification diagnostics to catch problems early, then treating them with the least invasive option that genuinely works. Healthy tooth structure is never sacrificed for convenience."],
];

export default function Page() {
  return (
    <>
      <Schema>{graph(faqSchema(FAQS), breadcrumbs([
        { name: "Home", path: "/" }, { name: "General Dentistry", path: "/general-dentistry" }]))}</Schema>
      <PageHero image="/images/dr-emami-office.jpg" pos="center 25%" eyebrow="General & family dentistry"
        title="The kind of dentistry that keeps you out of the chair"
        lead="Prevention, early diagnosis, and conservative treatment — for every member of the family, from first visits to grandparents who've been coming since 1991." />
      <Reviewed />
      <Prose>
        <h2>Gums first</h2>
        <p>Hygiene visits at Sunland Dental Care start with periodontal health. Eliminating gum infection protects far more than your teeth — it takes pressure off your immune system and heart, which is why Dr. Emami calls the mouth "the gateway to the body."</p>
        <h2>Catch it small, fix it small</h2>
        <p>High-magnification diagnostics find decay and cracks while they're still minor, so treatment stays minor too: a small filling instead of a crown, a sealed surface instead of a root canal. It's the least expensive dentistry you'll ever have — the kind you barely need.</p>
        <h2>Everything under one roof</h2>
        <p>Exams, cleanings, fillings, crowns, extractions, and periodontal therapy are all handled in the Sunland office. If your needs ever grow into implants, orthodontics, or cosmetic work, the doctor who knows your history is the one who provides it.</p>
      </Prose>
      <FaqBlock title="General dentistry questions" faqs={FAQS} />
      <Cta title="Due for a checkup?" />
    </>
  );
}
