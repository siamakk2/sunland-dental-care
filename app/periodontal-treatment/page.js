import Link from "next/link";
import { NAP, DOCTOR } from "../../lib/practice";
import { Schema, graph, breadcrumbs, faqSchema, serviceSchema, webPage } from "../../lib/schema";
import { PageHero, Reviewed, FaqBlock, Cta, Prose, ReviewStrip } from "../../components/blocks";

export const metadata = {
  title: "Gum Disease & Periodontal Surgery in Sunland, CA — In-House",
  description: `Periodontal treatment and gum surgery performed in-house by ${DOCTOR.name} in Sunland, CA — deep cleanings, gum grafting, and surgical therapy, plus implants placed by the same doctor. No referrals out.`,
  alternates: { canonical: "/periodontal-treatment" },
};

const FAQS = [
  ["Do I need to see a separate periodontist for gum surgery?",
   "Not here. Periodontal therapy and gum surgery are performed in-house by Dr. Emami — the same doctor who plans and places your implants. Most Los Angeles practices refer this work out to a separate specialist office, which means a new consultation, a second set of fees, and a doctor who doesn't know your history."],
  ["What is scaling and root planing?",
   "A deep cleaning below the gumline that removes bacteria and hardened deposits from the root surfaces, then smooths them so the gum can reattach. It's the first-line treatment for periodontitis and is done under local anesthesia — comfortable, and often enough to halt the disease on its own."],
  ["When is gum surgery actually necessary?",
   "When pockets are too deep to clean non-surgically, when bone has been lost around teeth or an implant, or when receded gums expose roots. Dr. Emami's practice is conservative by conviction — surgery is recommended only when non-surgical therapy genuinely can't reach the problem."],
  ["Why does gum health matter for dental implants?",
   "Because gum infection is the number one cause of late implant failure. An implant placed into unhealthy tissue is an implant on borrowed time, which is why periodontal health is treated first and maintained afterward — the same doctor handling both means nothing falls between the cracks."],
];

export default function Page() {
  return (
    <>
      <Schema>{graph(serviceSchema({ name: "Periodontal Treatment & Gum Surgery", path: "/periodontal-treatment", description: "In-house periodontal therapy, deep cleanings, and gum surgery in Sunland, CA." }), webPage({ path: "/periodontal-treatment", name: "Periodontal Treatment" }), faqSchema(FAQS), breadcrumbs([
        { name: "Home", path: "/" }, { name: "Gum Disease & Periodontal Surgery", path: "/periodontal-treatment" }]))}</Schema>
      <PageHero image="/images/hero-exam.webp" pos="center 30%" eyebrow="Periodontal care · Performed in-house"
        title={<>Gum treatment and surgery, <span className="text-brand">under one roof</span></>}
        lead="Deep cleanings, periodontal therapy, and gum surgery are performed here by Dr. Emami — the same doctor who places your implants. No referral to a specialist across town, no second consultation, no second set of fees." />
      <Reviewed />
      <ReviewStrip />
      <Prose>
        <h2>The foundation everything else sits on</h2>
        <p>Gum disease takes more adult teeth than cavities do, and it does it painlessly — nothing hurts while the bone anchoring your teeth quietly dissolves. It's also the single biggest threat to a dental implant years after it's placed. That's why hygiene visits at this practice start with the gums, and why <Link href="/blog/bleeding-gums-what-it-means">bleeding gums are never dismissed as normal</Link>.</p>
        <h2>What treatment looks like</h2>
        <h3>Non-surgical therapy first</h3>
        <p>Scaling and root planing — a thorough deep cleaning below the gumline under local anesthesia — halts most periodontitis when it's caught in time. For many patients this, plus a tighter hygiene schedule, is the entire treatment.</p>
        <h3>Surgical therapy when it's needed</h3>
        <p>When pockets are too deep to reach or bone has been lost, surgical treatment accesses and cleans the root surfaces directly, reshapes the tissue, and can regenerate lost support. Gum grafting covers exposed roots where recession has gone too far. All of it happens in this office.</p>
        <h3>Maintenance, indefinitely</h3>
        <p>Periodontal disease is managed, not cured. More frequent hygiene visits keep it stopped — this is the least glamorous and most important part of the whole plan.</p>
        <h2>Why in-house matters more here than anywhere</h2>
        <p>The usual Los Angeles path splits gum surgery, implant placement, and restoration across three offices. Each hand-off is a place for information to be lost and fees to stack. When {DOCTOR.name} treats the gums, places the <Link href="/dental-implants">implant</Link>, and delivers the crown, one doctor owns the entire outcome — and after {DOCTOR.yearsExperience} years, she's answering for results she'll be seeing for decades.</p>
      </Prose>
      <FaqBlock title="Gum treatment questions" faqs={FAQS} />
      <Cta title="Get your gums evaluated" body={`Bleeding, sensitivity, or loose teeth deserve an exam, not a wait. Call ${NAP.phone}.`} />
    </>
  );
}
