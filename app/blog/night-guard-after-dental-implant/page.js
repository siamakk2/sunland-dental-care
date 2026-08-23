import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "night-guard-after-dental-implant");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Is a night guard helpful after getting a dental implant?",
   "For patients who grind or clench, yes — it's one of the most valuable things you can do to protect the investment. Implants lack the periodontal ligament that lets natural teeth sense excessive pressure, so a grinder can load an implant far harder than they realize without feeling it."],
  ["Why are implants more vulnerable to grinding than natural teeth?",
   "A natural tooth sits in a ligament that acts as a shock absorber and a sensor — it tells your brain when you're biting too hard, and it flexes slightly under load. An implant is fused directly to bone with neither cushion nor feedback, so force transfers straight into the bone and the components."],
  ["What can grinding do to an implant?",
   "Chip or fracture the crown, loosen or break the abutment screw, and over time contribute to bone loss around the implant. Screw loosening is the most common early sign that a bite is overloading the restoration."],
  ["Does everyone with an implant need a night guard?",
   "No. It's recommended for patients with evidence of grinding or clenching, for full-arch cases, and for anyone whose bite places heavy force on the restoration. Your dentist can see wear patterns that indicate whether you're a candidate."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: if you grind or clench, a night guard after implant treatment is one of the highest-value protections available — because an implant cannot feel that you're biting too hard.</strong> Your natural teeth can. That single difference is the entire argument.</p>

      <h2>The ligament your implant doesn't have</h2>
      <p>Every natural tooth is suspended in a periodontal ligament — a thin fibrous layer between root and bone that does two jobs. It cushions, flexing microscopically under load. And it senses, feeding your nervous system constant information about bite force, which triggers reflexes that stop you from clamping down too hard.</p>
      <p>An implant is fused directly to bone. No cushion, no sensor, no reflex. Force applied to an implant transfers straight through to the bone and hardware, and your body never sends the warning it would send for a real tooth. A patient who grinds can be delivering substantial nightly force to an implant while feeling nothing at all.</p>

      <h2>What that force actually damages</h2>
      <ul>
        <li><strong>The crown</strong> — chipping or fracturing the porcelain.</li>
        <li><strong>The abutment screw</strong> — loosening or, less often, breaking. A crown that keeps coming loose is usually a bite problem, not a cement problem.</li>
        <li><strong>The bone</strong> — chronic overload contributes to bone loss around the implant, which compounds any <Link href="/blog/can-dental-implants-fail">peri-implantitis risk</Link>.</li>
        <li><strong>Your other teeth,</strong> which are being ground down at the same time.</li>
      </ul>

      <h2>Who genuinely needs one</h2>
      <p>Not everyone. It's recommended when there's evidence of <Link href="/blog/wake-up-with-jaw-pain">grinding or clenching</Link> — worn or flattened teeth, morning jaw soreness, temple headaches, a scalloped tongue — and for <Link href="/full-arch-implants">full-arch cases</Link>, where a large prosthesis concentrates significant force. Your dentist can read the wear facets on your existing teeth and tell you which category you're in, often before you've noticed anything yourself.</p>

      <h2>The right kind of guard</h2>
      <p>A custom guard made from impressions of your own teeth distributes force evenly and fits precisely. Pharmacy boil-and-bite versions are better than nothing in the short term, but they fit loosely, wear quickly, and can shift your bite over time — which is a poor trade when you're protecting an implant. This is not the place to economize.</p>

      <h2>The larger point</h2>
      <p>Patients rightly focus on surgery day, but an implant's lifespan is determined by the years afterward: the health of the gums around it, the maintenance visits, and the forces it absorbs every night. A guard is inexpensive compared to replacing a fractured prosthesis — and cheap insurance on treatment designed to <Link href="/blog/how-long-do-dental-implants-last">last decades</Link>.</p>
      <p>Ask about it at your restoration appointment, or <Link href="/contact">call the office</Link> if you already have an implant and suspect you grind.</p>
    </BlogPost>
  );
}
