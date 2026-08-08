import { NAP, DOCTOR, OFFER } from "../../lib/practice";
import { Schema, graph, breadcrumbs, faqSchema, webPage } from "../../lib/schema";
import { PageHero, FaqBlock, Cta, Prose } from "../../components/blocks";

export const metadata = {
  title: "Insurance & Payment Options — Sunland Dental Care",
  description: "How paying for dental care works at Sunland Dental Care in Sunland, CA: PPO insurance verified before treatment, exact written quotes, payment arrangements, and honest fixed pricing like the $2,000 complete implant.",
  alternates: { canonical: "/insurance-financing" },
};

const FAQS = [
  ["Do you take my dental insurance?",
   "The office works with most PPO dental plans. Call " + NAP.phone + " with your plan details and the front desk will verify your coverage and tell you your exact out-of-pocket cost before any treatment is scheduled — not after."],
  ["What if I don't have dental insurance?",
   "You're in good company — much of the practice is self-pay, drawn by transparent pricing like the $2,000 complete implant. Every treatment plan comes with an exact written quote, and payment arrangements can be discussed with the front desk."],
  ["Will I know the full cost before treatment?",
   "Always. It's a firm rule of the practice: exact pricing in writing before anything is scheduled. No surprises at the front desk has been the policy since 1991."],
  ["Do you offer payment plans or financing?",
   "The office works with patients on payment arrangements case by case. Call and ask the front desk about current options for your specific treatment plan — they'll give you a straight answer."],
];

export default function Page() {
  return (
    <>
      <Schema>{graph(webPage({ path: "/insurance-financing", name: "Insurance & Payment Options" }), faqSchema(FAQS), breadcrumbs([
        { name: "Home", path: "/" }, { name: "Insurance & Financing", path: "/insurance-financing" }]))}</Schema>
      <PageHero image="/images/ph-consult-tight.jpg" pos="center 25%" eyebrow="Insurance & payment options"
        title="You'll know the number before you decide"
        lead="Dental care you can't budget for is care you'll postpone. Here, coverage is verified up front, quotes are exact and written, and the price you're told is the price you pay." />
      <Prose>
        <h2>If you have insurance</h2>
        <p>Bring your plan details or call ahead — the front desk verifies PPO coverage before your visit and translates it into plain English: what your plan pays, what you pay, for exactly the treatment proposed. You approve the numbers before anything is scheduled.</p>
        <h2>If you don't</h2>
        <p>Transparent fixed pricing is the backbone of this practice — the {`$${OFFER.price.toLocaleString()}`} complete implant being the flagship example. Self-pay patients get the same exact written quotes, and payment arrangements can be discussed for larger treatment plans.</p>
        <h2>Why we work this way</h2>
        <p>Surprise dental bills destroy trust, and trust is the entire business of a {DOCTOR.yearsExperience}-year practice. The billing philosophy is the clinical philosophy: conservative, honest, and explained before it happens.</p>
      </Prose>
      <FaqBlock title="Payment questions" faqs={FAQS} />
      <Cta title="Have your plan checked in one call" body={`Call ${NAP.phone} with your insurance card handy — you'll have answers in minutes.`} />
    </>
  );
}
