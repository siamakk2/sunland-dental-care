import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "cheap-dental-implant-ads-truth");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Are $499 dental implants real?",
   "That figure almost always refers to one component — usually the titanium post alone, or a monthly financing payment — rather than a finished, chewable tooth. A complete implant requires the consultation and 3D imaging, the post, the abutment, and the crown. Ask what the advertised number excludes, and the real total appears."],
  ["What is the lowest a complete dental implant can honestly cost?",
   "Once you add up the implant components, laboratory fabrication, imaging, sterilization, surgical time, and overhead, the direct cost of providing one complete implant is commonly in the four figures before a dentist earns anything. That's why complete implants priced far below about $2,000 usually turn out to exclude something."],
  ["Why is one office $2,000 and another $6,000 for the same implant?",
   "Mainly structure. When a general dentist, an oral surgeon, and a restorative dentist each handle one stage, each bills separately with their own overhead and margin. When one dentist performs every stage in one office, those layers disappear — without removing anything clinical."],
  ["What questions should I ask before agreeing to an implant price?",
   "Three: Does this include imaging, the abutment, and the final crown? Who performs each stage? Will you put the complete number in writing before I commit? Any reputable office answers all three immediately."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: an advertised implant price of $499, $799, or $999 is almost never the price of a finished tooth — it's the price of one component, or a monthly payment.</strong> You don't need to assume anyone is being dishonest to understand why. You just need to add up what an implant costs to actually provide. Here's that arithmetic, which almost nobody publishes.</p>

      <h2>What a finished implant is actually made of</h2>
      <p>A dental implant isn't one object. It's a system of parts plus the expertise and equipment to place them:</p>
      <ul>
        <li><strong>The implant fixture</strong> — the titanium post placed in your jawbone. Established, well-documented implant systems cost the dental office meaningfully more than unbranded alternatives, and that difference matters years later (see <Link href="/blog/dental-implant-brands-does-it-matter">why the brand matters</Link>).</li>
        <li><strong>The abutment</strong> — the connector between post and crown. Stock or custom-milled, and it is a separate manufactured component with its own cost.</li>
        <li><strong>The crown</strong> — fabricated by a dental laboratory from a scan or impression, shaded to match your other teeth. This is skilled labor, not a stock part.</li>
        <li><strong>3D imaging (CBCT)</strong> — the scanner is a six-figure piece of equipment, and every scan carries a share of that plus maintenance.</li>
        <li><strong>The surgical guide</strong> — designed from your scan so the implant goes exactly where it was planned.</li>
      </ul>
      <p>Then add what surrounds those parts: an hour or more of surgical chair time, an assistant, full sterilization of every instrument, the facility, insurance, and the follow-up appointments through months of healing.</p>

      <h2>Do the arithmetic</h2>
      <p>Add the components alone — fixture, abutment, lab-fabricated crown, imaging, guide, sterilization consumables — and you are already well into four figures before a single minute of the dentist's time, before rent, before staff, before the decades of training that determine whether the implant is in the right position. That's the number that makes advertised triple-digit implants impossible as complete treatment. It isn't a conspiracy. It's arithmetic.</p>

      <h2>So what do those ads actually refer to?</h2>
      <p>Usually one of four things, all technically accurate and none of them a finished tooth:</p>
      <ol>
        <li><strong>The fixture only.</strong> The post in the bone. Imaging, abutment, and crown are quoted after you're in the chair — often reaching four to six thousand dollars by the end.</li>
        <li><strong>A monthly financing payment.</strong> "$399" that turns out to be per month, for many months, frequently with interest.</li>
        <li><strong>A consultation or scan special</strong> — a genuine offer, but for the appointment, not the treatment.</li>
        <li><strong>A starting-at price for the simplest possible case</strong>, which very few actual mouths turn out to be.</li>
      </ol>

      <h2>The real red flags</h2>
      <ul>
        <li>A price with no written itemization of what it includes.</li>
        <li>Pressure to sign or pay a deposit at the first visit.</li>
        <li>No 3D imaging before a surgical quote — a flat X-ray cannot show what a CBCT shows.</li>
        <li>Vagueness about <em>who</em> performs the surgery, or about which implant system is used.</li>
        <li>A quote that changes after the scan. That's not always dishonest — genuinely complex cases cost more — but you should have been told the range up front.</li>
      </ul>

      <h2>Why we charge $2,000, and what it covers</h2>
      <p>At <Link href="/dental-implants">Sunland Dental Care</Link>, a complete single implant is <strong>$2,000</strong>: the consultation and exam, 3D imaging and surgical planning, guided placement of the implant, and the final crown. One fixed number, in writing, before anything starts.</p>
      <p>It isn't $2,000 because anything was left out or bought cheaply. It's $2,000 because of how the work is organized:</p>
      <ul>
        <li><strong>One dentist performs every stage.</strong> Across much of Los Angeles an implant means three offices — general dentist, oral surgeon, restorative dentist — each with separate fees, separate overhead, and separate margins. <Link href="/dr-emami">Dr. Mahvash Emami, DDS</Link> plans, places, and restores in one office. That removes the stacking, not the care.</li>
        <li><strong>Forty years and thousands of implants make the process efficient.</strong> Experience is measurable in chair time: fewer complications, fewer redos, shorter surgeries.</li>
        <li><strong>The practice has been at the same address since 1991,</strong> without the acquisition debt or corporate management fees that inflate pricing at group practices.</li>
      </ul>
      <p>And we publish the number rather than quoting it privately, because a price you can only learn by sitting in a chair is a price designed to be negotiated against your anxiety.</p>

      <h2>What we don't claim</h2>
      <p>Some clinics do advertise complete implants at or below $2,000, and some are entirely legitimate — high volume, tight overhead, honest work. Cheap doesn't automatically mean bad any more than expensive automatically means good. The point isn't that a low number is disqualifying; it's that <strong>a number without a component list tells you nothing at all.</strong></p>
      <p>Judge every quote — including ours — by the same three questions: what does it include, who performs each stage, and will you put the total in writing before I commit? For a broader breakdown, read <Link href="/blog/how-much-do-dental-implants-cost">what dental implants really cost in 2026</Link>, or see <Link href="/pricing">our full pricing</Link>.</p>
    </BlogPost>
  );
}
