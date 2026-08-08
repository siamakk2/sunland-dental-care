import { NAP, DOCTOR } from "../../lib/practice";
import { Schema, graph, breadcrumbs, faqSchema, serviceSchema, webPage } from "../../lib/schema";
import { PageHero, Reviewed, FaqBlock, Cta, Prose } from "../../components/blocks";

export const metadata = {
  title: "Full-Arch & All-on-4 Dental Implants in Sunland, CA",
  description: `Full-arch implant solutions (All-on-4 style fixed teeth) planned and placed by ${DOCTOR.name} in Sunland, CA — one doctor, 3D-guided planning, honest fixed quotes. Serving Greater Los Angeles since 1991.`,
  alternates: { canonical: "/full-arch-implants" },
};

const FAQS = [
  ["What is All-on-4 or full-arch implant treatment?",
   "A full arch of fixed replacement teeth supported by a small number of strategically placed implants — typically four to six per jaw. Unlike removable dentures, the teeth stay in place, and unlike single implants for every tooth, it restores a whole smile efficiently."],
  ["Am I a candidate for full-arch implants?",
   "Most people missing many or all teeth in a jaw — or facing that prospect — are candidates. Bone volume, gum health, and overall health are evaluated with 3D imaging at your consultation, and Dr. Emami will tell you honestly whether full-arch, individual implants, or a well-made denture serves you best."],
  ["How much does full-arch treatment cost at Sunland Dental Care?",
   "Full-arch cases vary genuinely from patient to patient, so pricing is quoted exactly, in writing, after your 3D evaluation — the same honest, fixed-quote approach behind our $2,000 complete single implant. You will know the complete number before anything begins."],
  ["Why have one dentist do the whole thing?",
   `Full-arch treatment usually involves a surgeon, a restorative dentist, and a lab coordinating across offices. Here, ${DOCTOR.name} plans the case in 3D, places the implants, and delivers the final teeth herself — after ${DOCTOR.yearsExperience} years and thousands of implants, the coordination problems simply don't exist.`],
];

export default function Page() {
  return (
    <>
      <Schema>{graph(serviceSchema({ name: "Full-Arch Dental Implants", path: "/full-arch-implants", description: "All-on-4 style full-arch fixed implant teeth, 3D-planned and placed in-house in Sunland, CA." }), webPage({ path: "/full-arch-implants", name: "Full-Arch Implants" }), faqSchema(FAQS), breadcrumbs([
        { name: "Home", path: "/" }, { name: "Full-Arch Implants", path: "/full-arch-implants" }]))}</Schema>
      <PageHero image="/images/ph-implantmodel.jpg" pos="center" eyebrow="Full-arch implantology"
        title="A complete new smile, anchored for good"
        lead="When many teeth are failing, replacing them one by one stops making sense. Full-arch implant treatment restores an entire jaw of fixed, non-removable teeth — planned in 3D and delivered by one doctor." />
      <Reviewed />
      <Prose>
        <h2>Fixed teeth, not floating dentures</h2>
        <p>Full-arch implants end the daily compromises of removable dentures: no adhesives, no slipping mid-sentence, no leaving them in a glass. The teeth are anchored to implants in the bone, which also preserves the jawbone itself — the loss of which is what gives long-time denture wearers a sunken look.</p>
        <h2>How it works here</h2>
        <p>Your case starts with 3D imaging and a candid conversation about your goals and budget. Dr. Emami plans implant positions digitally, places them with surgical guides, and restores the arch — consultation to final teeth, one office, one doctor who answers for the whole result.</p>
        <h2>The honest alternative conversation</h2>
        <p>Full-arch treatment is a major investment, and it is not the right answer for everyone. If a partial, individual implants, or a quality denture genuinely serves you better, that's what Dr. Emami will recommend — she has spent {DOCTOR.yearsExperience} years talking patients out of treatment they don't need.</p>
      </Prose>
      <FaqBlock title="Full-arch questions" faqs={FAQS} />
      <Cta title="Find out what your smile needs" body={`The consultation includes 3D imaging and an exact written quote. Call ${NAP.phone}.`} />
    </>
  );
}
