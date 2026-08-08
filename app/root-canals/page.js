import { NAP, DOCTOR } from "../../lib/practice";
import { Schema, graph, breadcrumbs, faqSchema, serviceSchema, webPage } from "../../lib/schema";
import { PageHero, Reviewed, FaqBlock, Cta, Prose } from "../../components/blocks";

export const metadata = {
  title: "Root Canal Treatment in Sunland, CA — Gentle & Tooth-Saving",
  description: `Root canal therapy in Sunland, CA by ${DOCTOR.name} — save the natural tooth, end the pain. Modern, gentle technique with honest guidance on when a root canal is (and isn't) the right call.`,
  alternates: { canonical: "/root-canals" },
};

const FAQS = [
  ["Does a root canal hurt?",
   "The procedure itself is done under local anesthesia and, for most patients, feels similar to getting a filling. The pain people associate with root canals is usually the infection beforehand — the treatment is what ends it."],
  ["Why save the tooth instead of pulling it?",
   "Your natural tooth, even one that needed a root canal, preserves the bone around it and keeps your bite working the way it evolved to. Extraction is sometimes right — but it commits you to a gap, a bridge, or an implant. Saving a savable tooth is almost always the conservative choice."],
  ["What are the signs I might need a root canal?",
   "Lingering pain to hot or cold, pain when biting, spontaneous throbbing, a darkening tooth, or a pimple-like bump on the gum. Any of these deserve an exam promptly — infections don't heal themselves."],
  ["What happens after the root canal?",
   "The tooth is sealed and usually restored with a crown to protect it long-term. With a good restoration and healthy gums, a root-canal-treated tooth can last a lifetime."],
];

export default function Page() {
  return (
    <>
      <Schema>{graph(serviceSchema({ name: "Root Canal Treatment", path: "/root-canals", description: "Gentle root canal therapy to save natural teeth, in Sunland, CA." }), webPage({ path: "/root-canals", name: "Root Canals" }), faqSchema(FAQS), breadcrumbs([
        { name: "Home", path: "/" }, { name: "Root Canals", path: "/root-canals" }]))}</Schema>
      <PageHero image="/images/ill/toothache.svg" pos="center" eyebrow="Root canal therapy"
        title="Save the tooth. End the pain."
        lead="A root canal isn't the ordeal of its reputation — it's the treatment that stops one. Done gently and precisely, it clears the infection and keeps your natural tooth for decades more." />
      <Reviewed />
      <Prose>
        <h2>The most conservative fix there is</h2>
        <p>Dr. Emami's whole philosophy is preserving what's healthy — and nothing is more worth preserving than a natural tooth. Root canal therapy removes the infected nerve tissue inside the tooth, disinfects the canals, and seals them, leaving the tooth itself in service.</p>
        <h2>Comfort, taken seriously</h2>
        <p>The visit is unhurried: thorough numbing before anything starts, clear explanation of each step, and a doctor who has done this for {DOCTOR.yearsExperience} years. Most patients tell us afterward it was far easier than they feared — and that the relief was immediate.</p>
        <h2>And when a root canal isn't the answer</h2>
        <p>Some teeth aren't worth saving — too little structure left, a crack below the gum. When that's the honest reading, Dr. Emami will say so and walk you through the alternatives, including the $2,000 complete implant performed in the same office.</p>
      </Prose>
      <FaqBlock title="Root canal questions" faqs={FAQS} />
      <Cta title="That tooth won't fix itself" body={`Lingering pain means something. Call ${NAP.phone} and get an honest answer.`} />
    </>
  );
}
