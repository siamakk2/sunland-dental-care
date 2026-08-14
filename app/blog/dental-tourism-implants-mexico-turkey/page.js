import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "dental-tourism-implants-mexico-turkey");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Is it safe to get dental implants in Mexico or Turkey?",
   "Many clinics abroad employ well-trained dentists using the same implant systems used in the US, and many patients have excellent outcomes. The risk isn't uniformly higher — it's less predictable, because credentialing, standards, and recourse vary far more than they do domestically, and verifying quality from a distance is genuinely difficult."],
  ["What's the catch with cheap implants abroad?",
   "Usually timeline and follow-up rather than the surgery itself. Implants need months to integrate before the final crown, which means either two trips or a compressed schedule. And if something needs adjusting a year later, the dentist who placed it is in another country."],
  ["Will a US dentist fix work done overseas?",
   "Many will, but not always easily. If the implant system isn't one they can identify or source parts for, repairs get complicated — this is the single most common problem American dentists see with overseas implant work."],
  ["When does dental tourism genuinely make sense?",
   "Large cases where the savings are substantial in absolute dollars, when you can commit to the full treatment timeline including a second trip, when you've verified the clinic and the implant brand independently, and when you have a local dentist willing to handle maintenance afterward."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: dental tourism can genuinely save money on large cases — and the savings often shrink or vanish on small ones once travel, time off, and follow-up are counted honestly.</strong> This isn't a warning against it. It's the arithmetic and the questions most people skip.</p>

      <h2>Why it's so common in Los Angeles</h2>
      <p>Tijuana is a two-hour drive, and Los Robles and Turkey both market aggressively to American patients. For someone quoted $30,000 for full-arch work, a clinic offering the same treatment for a third of that is not being irrational to consider it. Plenty of patients return delighted.</p>

      <h2>The honest arithmetic</h2>
      <p>Compare total cost, not sticker price:</p>
      <ul>
        <li><strong>Travel and lodging</strong>, usually for two trips — placement and, months later, the final restoration.</li>
        <li><strong>Time off work</strong> for both.</li>
        <li><strong>Follow-up and adjustments</strong>, which are routine and normally free locally.</li>
        <li><strong>The cost of a problem.</strong> If something fails at 18 months, you're paying for a third trip or paying a US dentist to fix it.</li>
      </ul>
      <p>On a single implant, those line items often exceed the savings entirely. On a full-arch case at $20,000+, they may not come close. The size of the case is what decides this, not the concept.</p>

      <h2>The timeline problem nobody mentions</h2>
      <p>An implant needs roughly three to six months of osseointegration — bone fusing to titanium — before the final crown goes on. Two trips is the honest schedule. Clinics that compress everything into a single week are doing something clinically real (immediate loading) but you should know that's what's happening, and that it isn't appropriate for every case. Read <Link href="/blog/same-day-dental-implants-explained">what "same-day implants" actually means</Link>.</p>

      <h2>The question that matters most</h2>
      <p><strong>Which implant system will be used, and can a dentist in Los Angeles source parts for it?</strong> Get the brand and model in writing. Established systems are identifiable and repairable worldwide; unbranded fixtures may not be. This is the single most common headache American dentists encounter with overseas work — not failed implants, but perfectly functional ones nobody can find a matching component for. See <Link href="/blog/dental-implant-brands-does-it-matter">why brand matters</Link>.</p>

      <h2>If you go, go prepared</h2>
      <ol>
        <li>Get the treatment plan, implant brand, and total cost <strong>in writing before you travel</strong>.</li>
        <li>Ask what happens — and who pays — if something fails at six months.</li>
        <li>Bring home your records, X-rays, and the implant system documentation.</li>
        <li>Arrange a local dentist for maintenance <em>before</em> you go, not after.</li>
      </ol>

      <h2>And if you'd rather not travel</h2>
      <p>Much of what drives patients abroad is domestic pricing built on referral chains — three offices, three fee schedules. That structure is avoidable without a passport. At <Link href="/dental-implants">Sunland Dental Care</Link>, a complete single implant is $2,000 fixed, with <Link href="/dr-emami">Dr. Emami</Link> performing every stage in one Sunland office, and follow-up is ten minutes from home rather than a flight away. See <Link href="/pricing">how our pricing works</Link>.</p>
    </BlogPost>
  );
}
