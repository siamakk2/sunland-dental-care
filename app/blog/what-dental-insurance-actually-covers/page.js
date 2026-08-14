import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "what-dental-insurance-actually-covers");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["What does the 100/80/50 structure mean?",
   "It's the standard dental plan design: preventive care (exams, cleanings, X-rays) covered around 100%, basic procedures (fillings, simple extractions) around 80%, and major work (crowns, bridges, dentures) around 50% — all subject to your annual maximum and any waiting periods."],
  ["Why is my annual maximum so low?",
   "Most dental plans cap benefits around $1,000–$2,000 per year, a figure that has barely moved in decades while treatment costs rose substantially. That gap is why patients needing major work are effectively self-pay past the first crown or two."],
  ["Does dental insurance cover implants?",
   "Coverage varies widely and is often limited or excluded. Some plans contribute toward the crown portion or apply a missing-tooth clause that excludes teeth lost before the policy started. Always verify your specific plan in writing rather than assuming."],
  ["What's the difference between in-network and out-of-network?",
   "In-network dentists have agreed to your insurer's fee schedule, so your share is calculated from discounted rates. Out-of-network offices set their own fees, and your plan reimburses a percentage of what it considers usual and customary — which can leave a larger balance."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: most dental plans follow a 100/80/50 structure — preventive care nearly fully covered, basic work around 80%, major work around 50% — all capped by an annual maximum that's typically $1,000 to $2,000.</strong> That cap is the single fact that explains most patient confusion, because it hasn't meaningfully risen in decades while dentistry has.</p>

      <h2>Dental insurance isn't really insurance</h2>
      <p>Health insurance protects you from catastrophic cost. Dental coverage works closer to a discount plan with a ceiling: it handles routine care well and runs out precisely when treatment gets expensive. Understanding that reframing prevents most of the disappointment — the plan isn't malfunctioning when it stops paying at $1,500. That's the design.</p>

      <h2>The terms that actually affect your bill</h2>
      <ul>
        <li><strong>Annual maximum.</strong> The most your plan pays in a benefit year. Everything past it is yours.</li>
        <li><strong>Deductible.</strong> What you pay before coverage begins, often waived for preventive visits.</li>
        <li><strong>Waiting periods.</strong> Many plans won't cover major work for 6–12 months after enrollment. Relevant if you're buying coverage specifically for upcoming treatment.</li>
        <li><strong>Missing tooth clause.</strong> Excludes replacing teeth that were already missing when the policy started — a frequent and unpleasant surprise for implant and bridge patients.</li>
        <li><strong>Frequency limits.</strong> Two cleanings per year, X-rays at set intervals, crown replacement only after a set number of years.</li>
        <li><strong>UCR (usual, customary, reasonable).</strong> The insurer's own opinion of a fair fee, which may sit below what any dentist in your area charges.</li>
      </ul>

      <h2>How to find out what you actually have</h2>
      <ol>
        <li>Ask your office to run a <strong>benefits verification</strong> before treatment — most will do this as a matter of course.</li>
        <li>For anything substantial, request a <strong>pre-treatment estimate</strong> submitted to your insurer. It comes back with what they'll pay in writing, before you commit.</li>
        <li>Ask specifically about the <strong>missing tooth clause and waiting periods</strong> if implants or bridges are on the table.</li>
        <li>If you have unused benefits late in the year, <strong>timing matters</strong> — maximums usually reset and don't roll over.</li>
      </ol>

      <h2>When paying directly is the better math</h2>
      <p>For patients whose main need is a large restorative case, premiums plus deductible can exceed what the plan will ever pay out, given the maximum. That's a calculation worth doing honestly rather than assuming coverage is always worth having. Read <Link href="/blog/dental-care-without-insurance">how to get care without insurance</Link>.</p>
      <p>At <Link href="/insurance-financing">Sunland Dental Care</Link> we verify PPO coverage before treatment and translate it into plain numbers — what your plan pays, what you pay, for exactly the treatment proposed. And transparent fixed pricing like the <Link href="/dental-implants">$2,000 complete implant</Link> means self-pay patients know their number in advance too.</p>
      <p>Call <strong>(818) 353-5520</strong> with your plan details and you'll have real answers in minutes.</p>
    </BlogPost>
  );
}
