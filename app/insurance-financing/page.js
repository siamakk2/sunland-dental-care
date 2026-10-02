import { NAP, DOCTOR, OFFER } from "../../lib/practice";
import { Schema, graph, breadcrumbs, faqSchema, webPage } from "../../lib/schema";
import { PageHero, FaqBlock, Cta, Prose } from "../../components/blocks";

export const metadata = {
  title: "Insurance & Payment Options — Sunland Dental Care",
  description: "How paying for dental care works at Sunland Dental Care in Sunland, CA: how to check whether we are in-network with your plan, written treatment estimates before scheduling, and transparent fixed pricing for standard single-implant treatment.",
  alternates: { canonical: "/insurance-financing" },
};

const FAQS = [
  ["Do you take my dental insurance?",
   "Call " + NAP.phone + " with your plan name and member ID and the front desk will check your specific plan. Two different questions matter: whether we are in-network with your plan, and whether your plan reimburses out-of-network care. We will tell you plainly which applies to you before anything is scheduled."],
  ["What is the difference between accepting my insurance and being in-network?",
   "An office can accept and file your insurance without being contracted with that plan. In-network means the dentist has agreed to that insurer's fee schedule, so your share is calculated from discounted rates. Out-of-network means the office sets its own fees and your plan reimburses a percentage of what it considers usual and customary, which can leave a larger balance. Ask any dental office which of the two applies — the answer changes your cost."],
  ["What if I don't have dental insurance?",
   "You're in good company — much of the practice is self-pay, drawn by transparent pricing like the $2,000 complete implant. Every treatment plan comes with an exact written quote, and payment arrangements can be discussed with the front desk."],
  ["Will I know the cost before treatment?",
   "You receive a written treatment estimate before anything is scheduled. For insured patients, the final patient share depends on your plan's benefits, deductible, annual maximum, and any clinical findings during treatment, so an estimate is an estimate until your insurer adjudicates the claim. For larger treatment we can submit a pre-treatment estimate to your insurer so their response is in writing first."],
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
        <p>Call ahead with your plan name and member ID. The front desk checks your plan and tells you two things in plain English: whether we are in-network with it, and what your plan is likely to cover for the treatment being considered. For larger treatment, we can submit a pre-treatment estimate so your insurer's answer is in writing before you commit. Final amounts depend on your plan's deductible, annual maximum, and benefit rules.</p>
        <h2>If you don't</h2>
        <p>Transparent fixed pricing is the backbone of this practice — the {`$${OFFER.price.toLocaleString()}`} complete implant being the flagship example. Self-pay patients get the same exact written quotes, and payment arrangements can be discussed for larger treatment plans.</p>
        <h2>Why we work this way</h2>
        <p>Surprise dental bills destroy trust. The billing approach mirrors the clinical one: explain it before it happens, put the number in writing, and tell you honestly where a figure is fixed and where it depends on your plan or on what we find.</p>
      </Prose>
      <FaqBlock title="Payment questions" faqs={FAQS} />
      <Cta title="Have your plan checked in one call" body={`Call ${NAP.phone} with your insurance card handy — you'll have answers in minutes.`} />
    </>
  );
}
