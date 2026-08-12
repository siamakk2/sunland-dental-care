import Link from "next/link";
import BlogPost from "../../../components/BlogPost";
import { POSTS } from "../../../lib/posts";
const meta = POSTS.find((p) => p.slug === "second-opinion-dentist-la-canada");
export const metadata = { title: meta.title, description: meta.description, alternates: { canonical: `/blog/${meta.slug}` } };

const FAQS = [
  ["Is it rude to get a second opinion from another dentist?",
   "No, and good dentists expect it. Second opinions are routine in medicine for expensive or irreversible treatment, and a dentist confident in their plan has nothing to fear from another set of eyes. A practice that discourages one is telling you something useful."],
  ["What should I bring to a second-opinion appointment?",
   "The written treatment plan with itemized costs, any X-rays or 3D scans you can get (you're entitled to copies of your records), and a list of your medications. If you can't obtain the imaging, a new exam can establish the picture."],
  ["Will a second opinion cost me money?",
   "Usually the cost of an exam and any necessary imaging — a small fraction of the treatment being reconsidered. Ask what the visit costs when you book so there's no ambiguity."],
  ["What if the second opinion agrees with the first?",
   "That's a good outcome, not a wasted visit. You proceed with confidence instead of doubt, which matters when you're committing thousands of dollars and irreversible changes to your mouth."],
];

export default function Post() {
  return (
    <BlogPost meta={meta} faqs={FAQS}>
      <p><strong>The direct answer: get a second opinion whenever a treatment plan is expensive, irreversible, or simply doesn't match how your mouth feels — and bring the written plan and your X-rays with you.</strong> Around La Cañada Flintridge and the Foothill communities, second opinions on large restorative plans are among the most common reasons patients walk into a new office.</p>

      <h2>When a second opinion is genuinely warranted</h2>
      <ul>
        <li><strong>The number is large.</strong> Full-mouth reconstruction, multiple crowns, or full-arch implants run into five figures. Nobody spends that on a house without an inspection.</li>
        <li><strong>The plan is irreversible.</strong> Crowns require grinding down healthy enamel; extractions can't be undone. Conservative alternatives deserve consideration first.</li>
        <li><strong>Nothing hurts.</strong> A long list of urgent work on a mouth with no symptoms isn't automatically wrong — early treatment is often correct — but it's worth confirming.</li>
        <li><strong>You felt rushed.</strong> Pressure to sign today is a legitimate reason to pause. Teeth that have waited years can wait another week.</li>
        <li><strong>You were told no.</strong> Second opinions cut both ways — patients turned down for implants because of <Link href="/blog/not-enough-bone-for-implants">bone loss</Link> are often candidates under modern 3D planning.</li>
      </ul>

      <h2>How to get a real second opinion, not a sales pitch</h2>
      <p>Ask for your records first — in California you're entitled to copies of your X-rays and chart. Then arrive without leading the conversation: give the new dentist the chance to examine you and reach their own conclusion before you show them the first plan. Comparing the two afterward is far more informative than watching someone react to a competitor's proposal.</p>

      <h2>The three questions to ask</h2>
      <ol>
        <li><strong>What happens if I do nothing for six months?</strong> A good dentist can tell you exactly which items will worsen and which will sit unchanged.</li>
        <li><strong>What's the most conservative option that would work?</strong> There is almost always a smaller version of any plan. It may not be the best choice — but you should know it exists.</li>
        <li><strong>Which of these are you recommending, and which am I choosing?</strong> This separates clinical necessity from elective improvement, and honest dentists distinguish them readily.</li>
      </ol>

      <h2>Why patients drive from La Cañada</h2>
      <p>Sunland Dental Care is about twelve minutes west on the 210. It's a single-doctor practice: <Link href="/dr-emami">Dr. Mahvash Emami, DDS</Link> performs the exam, the surgery, and the restoration herself, with no treatment coordinator selling packages. After 40 years, her defining habit — the one patients mention most in reviews — is talking people out of work they don't need. That's exactly the disposition a second opinion requires.</p>
      <p>Bring your plan and your imaging. You'll get a straight assessment of what's necessary, what can wait, and what you don't need at all. See the <Link href="/dentist-la-canada-flintridge">La Cañada patient page</Link> or <Link href="/contact">request a consultation</Link>.</p>
    </BlogPost>
  );
}
