import Link from "next/link";
import { NAP, OFFER, DOCTOR } from "../../lib/practice";
import { Schema, graph, breadcrumbs, faqSchema } from "../../lib/schema";
import { PageHero, FaqBlock, Cta, Prose } from "../../components/blocks";
import OfferTable from "../../components/OfferTable";
import OfferNote from "../../components/OfferNote";

export const metadata = {
  title: "Pricing — Honest, Fixed Dental Fees in Sunland, CA",
  description: "Transparent dental pricing in Sunland, CA: complete single implants at $2,000 fixed with additional steps quoted separately in writing. See what's included and how in-house care keeps costs down.",
  alternates: { canonical: "/pricing", languages: { "en-US": "/pricing", "es-US": "/es/precios" } },
};

const FAQS = [
  ["Why can Sunland Dental Care offer implants at $2,000?",
   "Every stage — consultation, imaging, surgery, and restoration — happens in one office with one dentist, so the treatment is not split across separate providers each billing their own fee. That structure is one reason our number is lower; other practices set fees for their own reasons, and the right comparison is always what a quote includes."],
  ["Are there hidden fees?",
   "No. The complete implant price includes the consultation, 3D imaging, guided placement, and the final crown. If your specific case requires anything beyond the standard treatment, you'll know the exact cost before anything begins."],
  ["Do you offer payment options?",
   "The office works with patients on payment arrangements — call " + NAP.phone + " and the front desk will walk you through current options for your treatment plan."],
  ["Do you accept dental insurance?",
   "Call the office with your plan details and the team will verify your coverage and explain exactly what your out-of-pocket cost would be before treatment."],
];

export default function Page() {
  return (
    <>
      <Schema>{graph(faqSchema(FAQS), breadcrumbs([
        { name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]))}</Schema>
      <PageHero image="/images/ph-implants-sign.jpg" pos="center" eyebrow="Transparent pricing"
        title="You should know the price before you sit in the chair"
        lead="A life-changing smile should be accessible to our Sunland neighbors. Our flagship offer is simple, complete, and fixed." />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl bg-ink px-6 py-12 text-cream md:px-12">
          <p className="eyebrow text-brand">Flagship offer</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold md:text-4xl">{OFFER.headline}</h2>
          <ul className="mt-6 grid max-w-2xl gap-2 text-cream/85 md:grid-cols-2">
            {OFFER.includes.map((i) => <li key={i} className="rounded-xl border border-cream/15 px-4 py-3">{i}</li>)}
          </ul>
          <p className="mt-4 max-w-2xl text-sm text-white/75">{OFFER.note}</p>
          <OfferNote tone="dark" />
          <Link href="/dental-implants" className="mt-6 inline-block rounded-full bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark">About the implant process →</Link>
        </div>
      </section>
      <OfferTable />
      <Prose>
        <h2>Why our pricing works this way</h2>
        <p>Implant treatment is often split across three providers — a general dentist, an oral surgeon, and a restorative dentist — each billing separately. {DOCTOR.name} performs all three roles in one office, and the savings from that structure go to the patient. The price is lower because the process is better — not the other way around.</p>
        <p>For all other services — cleanings, fillings, veneers, aligners — you'll receive an exact quote at your consultation, before any treatment is scheduled.</p>
      </Prose>
      <FaqBlock title="Pricing questions" faqs={FAQS} />
      <Cta title="Get an exact quote for your case" />
    </>
  );
}
