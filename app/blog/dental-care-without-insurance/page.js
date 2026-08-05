import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "dental-care-without-insurance");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Is dental insurance worth it?",
   "It depends on your plan and your needs. Many plans cap annual benefits around $1,000–$2,000 and cover major work at only a percentage — which is why a large share of implant and crown patients are effectively self-pay regardless of coverage. Compare your premium and deductible against what you actually expect to need."],
  ["What should I ask before agreeing to treatment?",
   "Three questions: What is the complete cost, including everything? Can I have that in writing before we schedule? What happens if I wait — does this get worse or more expensive? Any good office answers all three without hesitation."],
  ["How do I know if a quote is incomplete?",
   "Ask what it excludes. Implant quotes are the classic example: a low number often covers only the post, with imaging, abutment, and crown billed later. A complete quote names every component."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: get an exam and a written treatment plan first, then triage by urgency — infection and pain before function, function before cosmetics.</strong> Being uninsured doesn't mean going without care; it means being deliberate about sequence and insisting on exact numbers before anything begins.</p>
      <h2>What treatment actually costs</h2>
      <p>Prices vary by office and region, but the pattern holds: exams and cleanings are the least expensive thing you'll ever do and prevent the expensive things. Fillings cost a fraction of the crowns they prevent. Crowns cost a fraction of the implants they prevent. Almost every large dental bill began as something small that waited.</p>
      <h2>How to triage on a budget</h2>
      <ol>
        <li><strong>Infection and pain first.</strong> Abscesses and untreated decay get more expensive and more dangerous with time — this is never the place to economize.</li>
        <li><strong>Gum health second.</strong> <Link href="/blog/bleeding-gums-what-it-means">Periodontal disease</Link> quietly takes more teeth than cavities do, and hygiene visits are among the cheapest care available.</li>
        <li><strong>Function third.</strong> Restoring the ability to chew properly — fillings, crowns, replacing a missing tooth.</li>
        <li><strong>Cosmetics last.</strong> Whitening and veneers are wonderful and can wait.</li>
      </ol>
      <h2>Protecting yourself from surprise bills</h2>
      <p>The uninsured patient's greatest risk isn't the price — it's the ambush. Ask for the complete cost in writing before scheduling, ask specifically what a quote excludes, and be wary of prices that seem far below everyone else's, which often signals a partial quote rather than a bargain. Read <Link href="/blog/how-much-do-dental-implants-cost">how implant pricing really works</Link> for the clearest example of this.</p>
      <h2>Why fixed pricing exists here</h2>
      <p>A large share of patients at <Link href="/insurance-financing">Sunland Dental Care</Link> are self-pay, which is exactly why the practice publishes numbers instead of quoting them case by case — the $2,000 complete implant being the flagship. Every treatment plan comes with exact written pricing before it's scheduled, insurance is verified up front for those who have it, and the front desk can discuss payment arrangements for larger plans.</p>
      <p>If cost has kept you away for years, that's common and fixable — <Link href="/blog/afraid-of-the-dentist">start here</Link>.</p>
    </BlogPost>
  );
}
