import { NAP, DOCTOR, OFFER } from "../../lib/practice";
import { Schema, graph, breadcrumbs, faqSchema, serviceSchema, webPage } from "../../lib/schema";
import SmileGallery from "../../components/SmileGallery";
import { PageHero, Reviewed, FaqBlock, Cta, Prose, ReviewStrip } from "../../components/blocks";

export const metadata = {
  title: "Dental Implants in Sunland, CA — Complete for $2,000",
  description: `Complete single dental implants for $2,000 fixed — consultation, 3D imaging, guided surgery, and crown, all in-house by ${DOCTOR.name}. Thousands placed over ${DOCTOR.yearsExperience} years. Sunland, CA.`,
  alternates: { canonical: "/dental-implants" },
};

const FAQS = [
  ["What does the $2,000 dental implant include?",
   "Everything a single implant requires: the consultation and exam, 3D imaging and surgical planning, guided placement of the implant, and the final crown restoration. One fixed price, no hidden fees, all performed in the Sunland office."],
  ["Why is this so much less than other Los Angeles offices?",
   "The average single implant in Los Angeles often exceeds $5,000 because each stage is referred to a different specialist, each with their own fees. Dr. Emami performs every stage herself in one office, which removes those layers of cost — not the quality."],
  ["Is implant surgery painful?",
   "3D-guided placement is minimally invasive: the surgical site is planned digitally in advance, so procedures are shorter and gentler, with most patients reporting far less discomfort and downtime than they expected."],
  ["How long do dental implants last?",
   "With healthy gums and normal home care, a well-placed implant is designed to last decades — often a lifetime. Gum health is the foundation, which is why periodontal care is part of every implant plan at Sunland Dental Care."],
  ["Am I a candidate for a dental implant?",
   "Most adults missing one or more teeth are candidates. Bone density, gum health, and overall health are assessed at the consultation using 3D imaging, and Dr. Emami will tell you honestly if an implant is not the right choice for your case."],
];

export default function Page() {
  return (
    <>
      <Schema>{graph(serviceSchema({ name: "Dental Implants", path: "/dental-implants", description: "Complete single dental implant — consultation, 3D imaging, guided surgery, and crown — for $2,000 fixed at Sunland Dental Care in Sunland, CA.", price: "2000" }), webPage({ path: "/dental-implants", name: "Dental Implants" }), faqSchema(FAQS), breadcrumbs([
        { name: "Home", path: "/" }, { name: "Dental Implants", path: "/dental-implants" }]))}</Schema>
      <PageHero image="/images/ph-consult.jpg" pos="center 22%" eyebrow="Implantology · 3D-guided surgery"
        title={<>A complete dental implant for <span className="text-brand">$2,000</span>. Truly complete.</>}
        lead="In the world of implantology, there is no substitute for experience. Dr. Emami has spent four decades and thousands of implants perfecting a process that is precise, minimally invasive, and honestly priced." />
      <Reviewed />
      <ReviewStrip />
      <Prose>
        <h2>What "complete" means here</h2>
        <p>Many advertised implant prices cover only the titanium post — the crown, imaging, and surgical planning arrive later as separate bills. At Sunland Dental Care, the fixed price covers the entire journey:</p>
        <ul className="list-disc space-y-2 pl-6">
          {OFFER.includes.map((i) => <li key={i}><strong>{i}</strong></li>)}
        </ul>
        <p>{OFFER.note}</p>
        <h2>Planned in 3D before surgery begins</h2>
        <p>Every implant is planned in a virtual environment using 3D imaging of your jaw. Dr. Emami determines the exact position, angle, and depth of the implant digitally — then guides go into surgery, not guesswork. The result is 100% planned precision, smaller surgical sites, and significantly faster recovery.</p>
        <h2>One doctor, start to finish</h2>
        <p>In much of Los Angeles, an implant means three offices: a general dentist, an oral surgeon, and a restorative dentist. Here, {DOCTOR.name} performs the consultation, the placement, and the restoration herself, in the same office she has practiced in since {DOCTOR.established}. Continuity is quality control.</p>
      </Prose>
      <SmileGallery treatment="dental-implants" />
      <FaqBlock title="Dental implant questions" faqs={FAQS} />
      <Cta title="Find out if an implant is right for you" body={`Bring your questions — the consultation and 3D imaging are part of the $2,000 complete price. Call ${NAP.phone}.`} />
    </>
  );
}
