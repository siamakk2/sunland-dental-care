import { NAP, DOCTOR } from "../../lib/practice";
import { Schema, graph, breadcrumbs, faqSchema, serviceSchema, webPage } from "../../lib/schema";
import { PageHero, Reviewed, FaqBlock, Cta, Prose } from "../../components/blocks";

export const metadata = {
  title: "Dentures & Implant-Supported Dentures in Sunland, CA",
  description: `Full and partial dentures, and implant-supported dentures that snap securely in place — fitted by ${DOCTOR.name} in Sunland, CA. Honest guidance on which option truly fits your mouth and budget.`,
  alternates: { canonical: "/dentures" },
};

const FAQS = [
  ["What types of dentures do you offer?",
   "Full dentures (replacing all teeth in a jaw), partial dentures (replacing several missing teeth around healthy ones), and implant-supported dentures that snap onto implants for a secure fit that doesn't rely on suction or adhesive."],
  ["What's the difference between a regular and implant-supported denture?",
   "A conventional denture rests on the gums and stays in by suction and fit; it works, but can shift with time as the jawbone changes. An implant-supported denture clicks onto two or more implants — it doesn't slip when you eat or speak, and the implants help preserve the bone."],
  ["How long does it take to get dentures?",
   "A conventional denture typically takes a few visits over several weeks — impressions, try-in, adjustments, delivery. Timelines are mapped out clearly at your consultation, along with the exact cost in writing."],
  ["My old denture doesn't fit anymore. Can you help?",
   "Yes — loose dentures are usually a sign the jawbone has changed shape, which is normal over years. Options range from relining your current denture to a new one, or converting to implant support for stability. An exam will show which makes sense."],
];

export default function Page() {
  return (
    <>
      <Schema>{graph(serviceSchema({ name: "Dentures", path: "/dentures", description: "Full, partial, and implant-supported dentures in Sunland, CA." }), webPage({ path: "/dentures", name: "Dentures" }), faqSchema(FAQS), breadcrumbs([
        { name: "Home", path: "/" }, { name: "Dentures", path: "/dentures" }]))}</Schema>
      <PageHero image="/images/ph-consult-tight.jpg" pos="center 20%" eyebrow="Dentures & implant-supported dentures"
        title="Teeth that fit your life — and actually fit"
        lead="A well-made denture should look natural, stay put, and let you eat what you like. Whether you need your first denture, a replacement, or the security of implant support, it starts with an honest evaluation." />
      <Reviewed />
      <Prose>
        <h2>Made for your mouth, not a template</h2>
        <p>Denture comfort lives in the details: the fit of the base, the bite alignment, the shade and shape of the teeth against your face. Dr. Emami fits dentures with the same precision standard as her implant work — because after {DOCTOR.yearsExperience} years, she's adjusted too many ill-fitting dentures made elsewhere.</p>
        <h2>The implant-supported upgrade</h2>
        <p>For lower dentures especially, two to four implants change everything: the denture snaps on and stays, chewing power multiplies, and the bone under it is preserved. Because implants are placed in-house, this upgrade doesn't mean a referral to a separate surgeon's office — or a separate surgeon's bill.</p>
      </Prose>
      <FaqBlock title="Denture questions" faqs={FAQS} />
      <Cta title="Get a denture that disappears into your day" />
    </>
  );
}
