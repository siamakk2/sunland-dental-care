import Link from "next/link";
import { NAP, DOCTOR, OFFER } from "../../lib/practice";
import { Schema, graph, breadcrumbs, webPage } from "../../lib/schema";
import { PageHero, Reviewed, Cta, ReviewStrip } from "../../components/blocks";

export const metadata = {
  title: "All Dental Services — Sunland Dental Care, Sunland CA",
  description: `Every service offered at Sunland Dental Care in Sunland, CA: dental implants, full-arch/All-on-4, periodontal surgery, sedation for implants, cosmetic dentistry, Invisalign, dentures, root canals, whitening, family dentistry, and emergency care — all performed in-house by ${DOCTOR.name}.`,
  alternates: { canonical: "/services" },
};

const GROUPS = [
  { group: "Implants & tooth replacement", blurb: "Planned, placed, and restored by one doctor in one office.", items: [
    ["Dental Implants", "/dental-implants", `Complete single implant — consultation, 3D imaging, guided surgery, and crown — $${OFFER.price.toLocaleString()} fixed.`],
    ["Full-Arch / All-on-4 Implants", "/full-arch-implants", "A full arch of fixed teeth anchored on four to six implants."],
    ["Dentures & Implant-Supported Dentures", "/dentures", "Full, partial, and snap-in dentures that stay put."],
    ["Sedation for Implant Placement", "/sedation-implant-dentistry", "Comfort options offered specifically for implant surgery."],
  ]},
  { group: "Gum health & foundation", blurb: "The foundation every implant, crown, and veneer is built on.", items: [
    ["Gum Disease & Periodontal Surgery", "/periodontal-treatment", "Deep cleanings, periodontal therapy, and gum surgery — performed in-house."],
    ["General & Family Dentistry", "/general-dentistry", "Cleanings, gums-first hygiene, fillings, and conservative restorative care."],
    ["Root Canals", "/root-canals", "Tooth-saving therapy that ends the pain rather than causing it."],
  ]},
  { group: "Cosmetic & orthodontics", blurb: "Designed around your face, not a template.", items: [
    ["Cosmetic Dentistry", "/cosmetic-dentistry", "Veneers, crowns, bonding, and complete smile makeovers."],
    ["Teeth Whitening", "/teeth-whitening", "Dentist-supervised whitening that's safe for your enamel and existing work."],
    ["Invisalign & Orthodontics", "/invisalign", "Clear aligners for adults and teens, planned digitally."],
  ]},
  { group: "Urgent & practical", blurb: "When something breaks, and when you need to know the cost.", items: [
    ["Emergency Dentistry", "/emergency-dentist", "Toothache, broken or knocked-out tooth, swelling — call right away."],
    ["Insurance & Payment Options", "/insurance-financing", "PPO verification up front and exact written quotes before treatment."],
    ["New Patients", "/new-patients", "What to expect at your first visit."],
  ]},
];

export default function Page() {
  return (
    <>
      <Schema>{graph(webPage({ path: "/services", name: "All Dental Services" }), breadcrumbs([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]))}</Schema>
      <PageHero image="/images/ph-portrait.jpg" pos="center 18%" eyebrow="Everything we do"
        title={<>One office. <span className="text-brand">One doctor.</span> Every stage of care.</>}
        lead={`From a routine cleaning to a full arch of implants — including gum surgery and sedation for implant placement — every service below is performed here by ${DOCTOR.name}. Nothing gets referred across town.`} />
      <Reviewed />
      <ReviewStrip />
      <section className="mx-auto max-w-6xl px-4 py-12">
        {GROUPS.map((g) => (
          <div key={g.group} className="mb-12">
            <span className="accent-bar" aria-hidden="true"></span>
            <h2 className="text-3xl font-bold">{g.group}</h2>
            <p className="mt-2 text-ink-soft">{g.blurb}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {g.items.map(([name, href, desc]) => (
                <Link key={href} href={href} className="group rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:border-brand/50 hover:shadow-md">
                  <h3 className="text-xl font-bold group-hover:text-brand">{name}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{desc}</p>
                  <p className="mt-3 text-sm font-bold text-brand">Learn more →</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
      <Cta title="Not sure what you need?" body={`That's what the consultation is for. Call ${NAP.phone} and describe what's going on — you'll get an honest answer about what's urgent and what isn't.`} />
    </>
  );
}
